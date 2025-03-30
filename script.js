// Get the form and list elements
const form = document.getElementById('todo-form');
const list = document.getElementById('todo-list');

// Add event listener to form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemText = document.getElementById('todo-item').value.trim();
    if (itemText !== '') {
        // Create a new list item with a checkbox
        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';

        const label = document.createElement('label');
        label.textContent = itemText;

        // Append the checkbox and label to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(label);

        // Append the list item to the list
        list.appendChild(listItem);

        // Clear the input field
        document.getElementById('todo-item').value = '';

        // Update the encouraging message dynamically
        updateMessage();
    }
});

// Add event listener for dynamic checkbox changes
list.addEventListener('change', updateMessage);

// Function to update the encouraging message
function updateMessage() {
    const completedTasks = document.querySelectorAll('.task-checkbox:checked').length;
    const totalTasks = document.querySelectorAll('.task-checkbox').length;

    const message = document.getElementById('encouraging-message');
    if (completedTasks === totalTasks && totalTasks > 0) {
        message.textContent = "Amazing! All tasks complete!";
    } else if (completedTasks > 0) {
        message.textContent = "Keep going, you're doing great!";
    } else {
        message.textContent = "You Got This!";
    }
}
