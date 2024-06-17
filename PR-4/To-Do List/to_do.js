class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
}

class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
    }

    getTasks() {
        return this.tasks;
    }
}

const todoList = new TodoList();
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const todoForm = document.getElementById('todo-form');

todoForm.addEventListener('submit', (e) => { e.preventDefault();
    const taskDescription = taskInput.value.trim();
    if (taskDescription === '') {
        alert('Please enter a task.');
        return;
    }

    const task = new Task(taskDescription);
    todoList.addTask(task);
    taskInput.value = '';
    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = '';
    todoList.getTasks().forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        const span = document.createElement('span');
        span.textContent = task.description;
        span.addEventListener('click', () => {
            task.toggleCompleted();
            renderTasks();
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            todoList.removeTask(index);
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// Initial render
renderTasks();
