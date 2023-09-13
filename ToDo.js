// Task List
const tasks = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const task = {
        text: taskText,
        completed: false,
        timestamp: new Date().toLocaleString(),
    };

    tasks.push(task);
    taskInput.value = '';
    updateLists();
}

// Function to update the lists
function updateLists() {
    const pendingList = document.getElementById('pending-tasks');
    const completedList = document.getElementById('completed-tasks');

    pendingList.innerHTML = '';
    completedList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <span>${task.timestamp}</span>
            <div class="actions">
                <button onclick="completeTask(${index})">Complete</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        if (task.completed) {
            completedList.appendChild(listItem);
        } else {
            pendingList.appendChild(listItem);
        }
    });
}

// Function to mark a task as completed
function completeTask(index) {
    tasks[index].completed = true;
    updateLists();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    updateLists();
}

// Initial update
updateLists();
