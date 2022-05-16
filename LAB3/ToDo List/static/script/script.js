let addButton = document.querySelector('.add-button');
let newMessage = document.querySelector('.input-task');
let todoList = document.querySelector('.todo-list');

addButton.addEventListener('click', function(){
    let addTask = newMessage.value.trim();
    newMessage.value = '';

    

    let taskText = document.createElement('span');
    taskText.innerHTML = addTask;

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function(){
        if (this.checked){
            this.parentNode.className = 'task done';
        }else
        this.parentNode.className = 'task undone';
    });

    let deleteTask = document.createElement('img');
    deleteTask.className = 'delete-img';
    deleteTask.src = 'static/image/delete.png';
    deleteTask.addEventListener('click', function(){
        this.parentNode.remove();
    });

    if (addTask === "") {
        return;
    }

    let item = document.createElement('div');
    item.className = 'task';
    item.appendChild(checkbox);
    item.appendChild(taskText);
    item.appendChild(deleteTask);
    todoList.appendChild(item);
    
});
