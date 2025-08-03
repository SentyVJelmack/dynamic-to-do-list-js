// Attach event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the function to add a task
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== "") {
            // Create a new <li> element and set its text content
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a new <button> element for removing the task
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = 'remove-btn';

            // Assign onclick event to the remove button to remove the li from taskList
            removeButton.onclick = function () {
                taskList.removeChild(li);
            };

            // Append the remove button to the li
            li.appendChild(removeButton);

            // Append the li to the task list
            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = "";
        } else {
            // If input is empty, alert the user
            alert("Please enter a task.");
        }
    }

    // Attach event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Attach event listener to the input field for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
