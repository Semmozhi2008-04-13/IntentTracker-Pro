// js/app.js
function showPage(pageId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(`${pageId}-view`).classList.remove('hidden');
}

// Global Logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    location.reload();
}

// Check auth on load
window.onload = () => {
    if (localStorage.getItem('isLoggedIn')) {
        document.getElementById('sidebar').classList.remove('hidden');
        showPage('tracker');
        tracker.init();
    }
};
