let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDoButton = document.getElementById('clearToDo');
let toDoArray = [];


addToDoButton.addEventListener('click', addToDo);

inputText.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addToDo();
    }
});

function addToDo() {
    const value = inputText.value.trim();
    if (value !== '') {
        toDoArray.push({ text: value, completed: false });
        addTodoToDOM(value);
        inputText.value = '';
    }
}


function addTodoToDOM(todo) {

    const li = document.createElement('li');
    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        toggleTodoComplete(li, todo);
    });

    const label = document.createElement('label');
    label.textContent = todo;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        removeTodoFromDOM(li, todo);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    toDoContainer.appendChild(li);
}




function toggleTodoComplete(todoItem, todo) {
    const index = toDoArray.findIndex(item => item.text === todo);
    if (index > -1) {
        toDoArray[index].completed = !toDoArray[index].completed;
        todoItem.classList.toggle('completed');
    }
}



function removeTodoFromDOM(todoItem, todo) {
    const index = toDoArray.indexOf(todo);
    console.log(index)

    if (index > -1) {
        toDoArray.splice(index, 1);
    }
    toDoContainer.removeChild(todoItem);
}

clearToDoButton.addEventListener('click', () => {
    toDoContainer.innerHTML = '';
    toDoArray = [];
    inputText.value = '';

    console.log(toDoArray)
})
