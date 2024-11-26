// Get references to DOM elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const totalCount = document.getElementById('total-count');

let tasks = [];

// Function to update task count
function updateTaskCount() {
    totalCount.textContent = tasks.length;
}

// Function to render tasks in the list
function renderTasks() {
    taskList.innerHTML = ''; // Clear current list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        // Task text container
        const taskText = document.createElement('span');
        taskText.classList.add('task-text');
        taskText.textContent = task.text;

        // Button group container
        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('button-group');

        // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editTask(index));

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteTask(index));

        // Add buttons to button group
        buttonGroup.appendChild(editButton);
        buttonGroup.appendChild(deleteButton);

        // Add task text and buttons to list item
        li.appendChild(taskText);
        li.appendChild(buttonGroup);
        taskList.appendChild(li);
    });

    // Update task count
    updateTaskCount();
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const newTask = {
            text: taskText
        };
        tasks.push(newTask);
        taskInput.value = ''; // Clear input
        renderTasks();
    }
}

// Function to edit a task
function editTask(index) {
    const newText = prompt("Edit task:", tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText.trim();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove task from array
    renderTasks();
}

// Event listener for the "Add" button
addButton.addEventListener('click', addTask);

// Allow pressing 'Enter' to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Initial render
renderTasks();
