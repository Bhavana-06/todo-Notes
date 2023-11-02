document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'bhavana__shivakumar' && password === '1234') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'todos.html';
    } else {
        document.getElementById('login-error').textContent = 'Invalid credentials';
    }
});
