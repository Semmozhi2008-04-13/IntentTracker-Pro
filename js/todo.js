// js/todo.js
const todo = {
  storageKey: () => `todo:${localStorage.getItem('username') || 'guest'}`,

  load: () => {
    const list = document.getElementById('todoList');
    if (!list) return;
    const items = JSON.parse(localStorage.getItem(todo.storageKey()) || '[]');
    list.innerHTML = '';
    items.forEach(item => todo.renderItem(item));
  },

  persist: () => {
    const list = document.getElementById('todoList');
    if (!list) return;
    const items = Array.from(list.querySelectorAll('li[data-id]')).map(li => ({
      id: Number(li.dataset.id),
      text: li.querySelector('.todo-text')?.textContent || '',
      done: li.classList.contains('done')
    }));
    localStorage.setItem(todo.storageKey(), JSON.stringify(items));
  },

  uid: () => Date.now() + Math.floor(Math.random() * 1000),

  add: () => {
    const input = document.getElementById('todoInput');
    const text = (input.value || '').trim();
    if (!text) return;

    const li = document.createElement('li');
    li.className = 'todo-item';
    const id = todo.uid();
    li.dataset.id = String(id);
    li.innerHTML = `
      <span class="todo-text">${escapeHtml(text)}</span>
      <button class="todo-toggle" aria-label="toggle">✓</button>
      <button class="todo-delete" aria-label="delete">×</button>
    `;

    todo.bindItem(li);
    document.getElementById('todoList').appendChild(li);
    input.value = '';
    todo.persist();
  },

  bindItem: (li) => {
    const btnToggle = li.querySelector('.todo-toggle');
    const btnDelete = li.querySelector('.todo-delete');

    btnToggle.addEventListener('click', () => {
      li.classList.toggle('done');
      todo.persist();
    });

    btnDelete.addEventListener('click', () => {
      li.remove();
      todo.persist();
    });
  },

  renderItem: (item) => {
    const li = document.createElement('li');
    li.className = `todo-item ${item.done ? 'done' : ''}`;
    li.dataset.id = String(item.id);
    li.innerHTML = `
      <span class="todo-text">${escapeHtml(item.text || '')}</span>
      <button class="todo-toggle" aria-label="toggle">✓</button>
      <button class="todo-delete" aria-label="delete">×</button>
    `;
    todo.bindItem(li);
    document.getElementById('todoList').appendChild(li);
  }
};

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '<')
    .replaceAll('>', '>')
    .replaceAll('"', '"')
    .replaceAll("'", '&#039;');
}

