/** @format */

const todoIcon = document.querySelector('.input-icon');

const todoField = document.querySelector('#input');

const todoBody = document.querySelector('ul');

const modalToggler = document.querySelector('.modal');

let todo;

let todoItems;

let check;

let trash;

let value;

let deligation;

eventTrigger();

function eventTrigger() {
   todoIcon.addEventListener('click', addValues);
   deligation = document.addEventListener('click', deligate);
}

function addValues() {
   if (todoField.value == '') {
      modalToggler.classList.add('show');
      setTimeout(() => {
          modalToggler.classList.remove('show');
      }, 5000);
   } else {
      itemsBody();
      todoField.value = '';
   }
}

function deligate(e) {
   let itt = e.target;

   if (itt.classList[0] === 'isDone') {
      let ittt = itt.parentElement;
      ittt.classList.toggle('completed');
      ittt.classList.toggle('strike');
   } else if (itt.classList[0] === 'del') {
      let ittt = itt.parentElement;
      ittt.classList.add('rem');
      setInterval(() => {
         ittt.remove();
      }, 500);
   }
}

function itemsBody() {
   todo = document.createElement('div');
   todo.className = 'todo-wrapper';

   todoItems = document.createElement('li');

   todoItems.className = 'todo-items';

   todoItems.innerText = todoField.value;
   todo.appendChild(todoItems);
   check = document.createElement('button');

   trash = document.createElement('button');
   check.className = 'isDone';

   trash.className = 'del';

   check.innerHTML = `<i>&checkmark;</i>`;

   trash.innerHTML = `<i>X<i>`;
   todo.appendChild(check);
   todo.appendChild(trash);

   todoBody.appendChild(todo);
}
