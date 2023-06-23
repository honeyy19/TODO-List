// Get necessary elements from the DOM
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
const totalTasks = document.getElementById('totalTasks');

// Function to create a new todo item
function createTodoItem(text) {
  const listItem = document.createElement('li');
  listItem.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  listItem.appendChild(checkbox);

  const label = document.createElement('label');
  label.textContent = text;
  listItem.appendChild(label);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
    updateTotalTasks();
  });
  listItem.appendChild(deleteButton);

  return listItem;
}

// Function to add a new todo item to the list
function addTodoItem() {
  const text = todoInput.value.trim();
  if (text !== '') {
    const listItem = createTodoItem(text);
    todoList.appendChild(listItem);
    todoInput.value = '';
    updateTotalTasks();
  }
}

// Function to update the total number of tasks
function updateTotalTasks() {
  totalTasks.textContent = todoList.children.length;
}

// Add event listener to the add button
addButton.addEventListener('click', addTodoItem);

// Add event listener to the todo input to allow adding a new item by pressing Enter
todoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTodoItem();
  }
});