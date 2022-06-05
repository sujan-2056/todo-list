'use strict';

// selecting class
const inputField = document.querySelector('.input');
const addBtn = document.querySelector('.add');
const todoItem = document.querySelector('.list');
const removeAll = document.querySelector('.remove-all');

// creating addBtn event listner
addBtn.addEventListener('click', function() {
    // Calling addToDo() function
    addToDo();
});

    // Defining addToDo() function
function addToDo(text) {
    let inputText = inputField.value;
    let li = document.createElement('li');

    // if user type any input in input field
    if(inputText) {
       li.innerText = inputText;
       todoItem.appendChild(li);
//     todoItem.insertBefore(li, todoItem.childNodes[0]);
       inputField.value = "";

    //  creating delete item to delete particular li item
       let remove = document.createElement('a');
       remove.className='removeItem';
       remove.textContent = 'X';
       remove.href="javascript:void(0)";
       li.appendChild(remove);

    // if user do not insert any text in input field
    }else{
        alert('Write Something');
    }
};

// activating delete item with event listner
let btn = document.querySelector('ul');
btn.addEventListener('click', function(e) {
    let todoItem = document.querySelector('.list');
    let li = e.target.parentNode;
    todoItem.removeChild(li);

});

// event listner to delete all li items
removeAll.addEventListener('click', function() {
    // calling allRemove() function 
    allRemoveLi();
})

// defining  allRemove() function 
function allRemoveLi() {
    document.querySelector('ul').innerHTML = ""; 
}