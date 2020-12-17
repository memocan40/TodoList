import Task from './components/Task.js';
import Tasklist from './components/Tasklist.js';
import {
  taskList,
  todoList,
  btnFinishTaskClass,
  btnUndoTaskClass,
  btnDeleteTaskClass,
  newTaskForm,
  newTaskDesc
} from './constants.js';
import { functions } from './functions.js';

const newToDoList = new Tasklist();

/*
 *
 * Event listeners
 *
 */

newTaskForm.addEventListener('submit', event => {
  const id = newToDoList._idCounter;
  const inputValue = newTaskDesc.value;
  const newTask = new Task(inputValue, id);
  const taskHTML = `<div class="task" id="${id}">
                      <p class="task-desc">${inputValue}</p>
                      <button class="task-button finish-task fas fa-check"></button>
                      <button class="task-button delete-task fas fa-trash-alt"></button>
                    </div>`;
  newToDoList.addTask(newTask);
  todoList.innerHTML += taskHTML;
  event.target.reset();
  //prevent default reset on submit
  event.preventDefault();
});

taskList.addEventListener('click', event => {
  let task = event.target.parentNode;
  let button = event.target;

  //Button 'finish task'
  if (button.classList.contains(btnFinishTaskClass))
    functions.finishTask(newToDoList, task, button);
  //Button 'delete task'
  else if (button.classList.contains(btnDeleteTaskClass))
    functions.deleteTask(newToDoList, task);
  //Button 'undo task'
  else if (button.classList.contains(btnUndoTaskClass))
    functions.undoTask(newToDoList, task, button);
});
