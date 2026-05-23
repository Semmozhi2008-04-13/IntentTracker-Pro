// js/auth.js
const auth = {
    login: () => {
        const user = document.getElementById('username').value;
        if (user.length > 2) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', user);
            location.reload();
        } else {
            alert("Enter a valid username");
        }
    }
};