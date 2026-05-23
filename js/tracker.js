// js/tracker.js
const tracker = {
  storageKey: () => `sessions:${localStorage.getItem('username') || 'guest'}`,

  init: () => {
    tracker.timer = null;
    tracker.seconds = 0;
    tracker.startTime = null;
    tracker.goal = '';

    const btn = document.getElementById('timerBtn');
    if (btn) {
      btn.onclick = tracker.toggle;
    }

    tracker.updateDisplay();
    // If history view exists, render it.
    if (typeof filterHistory === 'function' && document.getElementById('historyLog')) {
      filterHistory('all');
    }

    // Make sure deep insights reflect existing data.
    tracker.renderDeepInsights();
    tracker.renderChart();
  },

  formatTime: (totalSeconds) => {
    const s = Math.max(0, totalSeconds | 0);
    const hh = String(Math.floor(s / 3600)).padStart(2, '0');
    const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
  },

  updateDisplay: () => {
    const display = document.getElementById('timerDisplay');
    if (!display) return;
    display.textContent = tracker.formatTime(tracker.seconds || 0);
  },

  toggle: () => {
    const btn = document.getElementById('timerBtn');
    const goalInput = document.getElementById('goalInput');
    const isRunning = btn && btn.innerText === 'Stop Session';

    if (!isRunning) {
      const goal = (goalInput?.value || '').trim();
      if (!goal) return alert('Set a goal!');

      tracker.goal = goal;
      tracker.startTime = new Date();
      tracker.seconds = 0;

      tracker.timer = setInterval(tracker.tick, 1000);
      if (btn) btn.innerText = 'Stop Session';
      if (btn) btn.classList.add('active');
      return;
    }

    tracker.stop();
  },

  tick: () => {
    tracker.seconds++;
    tracker.updateDisplay();

    // Milestone alerts (user permissions may block; we keep it safe)
    if (tracker.seconds === 1500) {
      try {
        if (Notification && Notification.permission === 'granted') {
          new Notification('Milestone Reached!', {
            body: "You've been focused for 25 minutes. Keep it up or take a break!"
          });
        }
      } catch (e) {
        // ignore
      }
    }
  },

  stop: () => {
    if (tracker.timer) clearInterval(tracker.timer);

    const focusScoreRaw = prompt('Rate your focus intensity (1-10):', '5');
    const focusScore = Math.max(1, Math.min(10, Number(focusScoreRaw || 5)));

    tracker.save(focusScore);

    tracker.timer = null;
    tracker.seconds = 0;
    tracker.startTime = null;
    tracker.goal = '';

    const btn = document.getElementById('timerBtn');
    if (btn) btn.innerText = 'Start Focus';
    tracker.renderDeepInsights();
    tracker.renderChart();
    if (typeof filterHistory === 'function') filterHistory('all');
  },

  loadSessions: () => {
    return JSON.parse(localStorage.getItem(tracker.storageKey()) || '[]');
  },

  save: (intensity) => {
    const end = new Date();
    const start = tracker.startTime ? new Date(tracker.startTime) : end;

    const durationMinutes = Math.max(0, Math.round((tracker.seconds || 0) / 60));

    // success heuristic: intensity >= 7
    const success = Number(intensity) >= 7;

    const sessions = tracker.loadSessions();
    const session = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      goal: tracker.goal || 'Untitled',
      app: tracker.goal ? tracker.goal : 'general',
      duration: durationMinutes,
      intensity: Number(intensity),
      success,
      startAt: start.toISOString(),
      endAt: end.toISOString()
    };

    sessions.push(session);
    localStorage.setItem(tracker.storageKey(), JSON.stringify(sessions));

    return session;
  },

  deleteSession: (id) => {
    const sessions = tracker.loadSessions();
    const filtered = sessions.filter(s => s.id !== id);
    localStorage.setItem(tracker.storageKey(), JSON.stringify(filtered));
    if (typeof filterHistory === 'function') filterHistory('all');
    tracker.renderDeepInsights();
    tracker.renderChart();
  },

  renderDeepInsights: () => {
    const sessions = tracker.loadSessions();

    const successCount = sessions.filter(s => s.success).length;
    const successRate = sessions.length ? Math.round((successCount / sessions.length) * 100) : 0;

    const latest = sessions.slice().sort((a, b) => b.endAt.localeCompare(a.endAt))[0];
    const mostRecentGoal = latest ? latest.goal : '—';

    // Peak hour window (most common start hour)
    const hourCounts = new Array(24).fill(0);
    sessions.forEach(s => {
      const d = new Date(s.startAt);
      if (!isNaN(d)) hourCounts[d.getHours()]++;
    });
    const peakHour = hourCounts.indexOf(Math.max(...hourCounts));
    const peakText = sessions.length ? `${String(peakHour).padStart(2, '0')}:00 - ${String((peakHour + 2) % 24).padStart(2, '0')}:00` : '—';

    const distractionAppEl = document.getElementById('distractionApp');
    const peakTimeEl = document.getElementById('peakTime');
    const successRateEl = document.getElementById('successRate');

    if (distractionAppEl) distractionAppEl.textContent = mostRecentGoal;
    if (peakTimeEl) peakTimeEl.textContent = peakText;
    if (successRateEl) successRateEl.textContent = `${successRate}%`;
  },

  renderChart: () => {
    const canvas = document.getElementById('statsChart');
    if (!canvas || typeof Chart === 'undefined') return;

    const sessions = tracker.loadSessions();
    const last = sessions.slice(-7);
    const labels = last.map(s => new Date(s.endAt).toLocaleDateString());
    const data = last.map(s => s.intensity);

    if (tracker._chart) tracker._chart.destroy();

    tracker._chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Focus intensity (1-10)',
            data,
            borderColor: 'rgba(129, 140, 248, 1)',
            backgroundColor: 'rgba(129, 140, 248, 0.15)',
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true, max: 10 }
        }
      }
    });
  }
};

// Expose for inline onclick in history.js
function deleteSession(id) {
  tracker.deleteSession(id);
}

