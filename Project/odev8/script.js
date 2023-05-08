let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDoButton = document.getElementById('clearToDo');

//ADD NEW TODO
addToDoButton.addEventListener('click', function() {
    let paragraph = document.createElement('p');
    paragraph.classList.add('p-styling');
    toDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through'
    });

    paragraph.addEventListener('dblclick', function() {
        // toDoContainer.removeChild(paragraph);
        paragraph.style.display = 'none';
    });

    
    //DELETE TODOS

    // clearToDoButton.addEventListener('click', function() {
    //     paragraph.style.display = 'none';
    // });
});

//DELETE TODOS

clearToDoButton.addEventListener('click', function() {
    let todoContainer = document.getElementById('toDoContainer');
    todoContainer.style.display = 'none';
});