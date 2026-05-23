// js/notes.js
const notes = {
  storageKey: () => `notes:${localStorage.getItem('username') || 'guest'}`,

  escapeHtml: (str) =>
    String(str)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '<')
      .replaceAll('>', '>')
      .replaceAll('"', '"')
      .replaceAll("'", '&#039;'),

  load: () => {
    const container = document.getElementById('notesContainer');
    if (!container) return;

    const data = JSON.parse(localStorage.getItem(notes.storageKey()) || '[]');
    container.innerHTML = '';

    data
      .slice()
      .reverse()
      .forEach(n => {
        const el = document.createElement('div');
        el.className = 'note card';
        el.dataset.id = String(n.id);
        el.innerHTML = `
          <div class="note-meta">
            <span class="note-date">${new Date(n.createdAt).toLocaleString()}</span>
            <button class="note-delete btn-delete" aria-label="delete">×</button>
          </div>
          <div class="note-body">${notes.escapeHtml(n.text || '')}</div>
        `;

        el.querySelector('.note-delete').addEventListener('click', () => notes.delete(n.id));
        container.appendChild(el);
      });
  },

  persist: (items) => {
    localStorage.setItem(notes.storageKey(), JSON.stringify(items));
  },

  save: () => {
    const textEl = document.getElementById('noteText');
    const text = (textEl?.value || '').trim();
    if (!text) return;

    const items = JSON.parse(localStorage.getItem(notes.storageKey()) || '[]');
    items.push({
      id: Date.now() + Math.floor(Math.random() * 1000),
      text,
      createdAt: new Date().toISOString()
    });

    notes.persist(items);
    textEl.value = '';
    notes.load();
  },

  delete: (id) => {
    const items = JSON.parse(localStorage.getItem(notes.storageKey()) || '[]');
    const filtered = items.filter(x => x.id !== id);
    notes.persist(filtered);
    notes.load();
  }
};
