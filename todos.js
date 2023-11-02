if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'index.html';
}
document.getElementById('todo-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const todoInput = document.getElementById('todo');
    const todoText = todoInput.value.trim();

    if (todoText) {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todoText);
        localStorage.setItem('todos', JSON.stringify(todos));
        todoInput.value = '';
        displayTodos();
    }
});
document.getElementById('logout').addEventListener('click', function () {
    localStorage.setItem('loggedIn', 'false');
    window.location.href = 'index.html';
});

function displayTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach(function (todo, index) {
        const li = document.createElement('li');
        li.innerHTML = `${todo} <button class="delete-btn" data-index="${index}">Delete</button>`;
        todoList.appendChild(li);
    });
}

document.getElementById('todo-list').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        const todos = JSON.parse(localStorage.getItem('todos')) || [];

        if (index >= 0 && index < todos.length) {
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            displayTodos();
        }
    }
});


displayTodos();