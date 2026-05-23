// Add Filtering Logic to History
function filterHistory(category) {
    const key = `sessions:${localStorage.getItem('username') || 'guest'}`;
    const sessions = JSON.parse(localStorage.getItem(key)) || [];
    const filtered = category === 'all'
        ? sessions
        : sessions.filter(s => s.app === category);

    renderHistory(filtered);
}

// Advanced History Item UI
function renderHistory(data) {
    const container = document.getElementById('historyLog');
    container.innerHTML = data.map(s => `
        <div class="history-card ${s.success ? 'success-border' : 'fail-border'}">
            <div class="card-header">
                <strong>${s.goal}</strong>
                <span class="tag">${s.app}</span>
            </div>
            <div class="card-details">
                <span>⏱️ ${s.duration} mins</span>
                <span>🔥 Intensity: ${s.intensity}/10</span>
                <span>✅ ${s.success ? 'Achieved' : 'Distracted'}</span>
            </div>
            <button onclick="deleteSession(${s.id})" class="btn-delete">×</button>
        </div>
    `).join('');
}