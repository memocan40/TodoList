import Task from './components/Task.js';
import Tasklist from './components/Tasklist.js';
import {
  domNewTaskForm,
  domNewTaskDescInput,
  domTaskList,
  cssClassBtnTask,
  cssClassBtnFinishTask,
  cssClassBtnUndoTask,
  cssClassBtnDelTask
} from './constants.js';
import { addTask, finishTask, undoTask, deleteTask } from './functions.js';

//Creating new list
const taskList = new Tasklist();

//Adding example tasks
const exampleTask1 = new Task('Walk the mini Rothweiler');
const exampleTask2 = new Task('Water the giant bonsay');

addTask(taskList, exampleTask1);
addTask(taskList, exampleTask2);

/*
 *
 * Event listeners
 *
 */

/**
 * @description Form submit
 */

domNewTaskForm.addEventListener('submit', event => {
  const newTaskDesc = domNewTaskDescInput.value;
  const newTask = new Task(newTaskDesc);

  addTask(taskList, newTask);

  domNewTaskForm.reset();
  //prevent default page refresh on submit
  event.preventDefault();
});

/**
 * @description Task List click
 */

domTaskList.addEventListener('click', event => {
  if (event.target.classList.contains(cssClassBtnTask)) {
    const domTask = event.target.parentNode;
    const domBtn = event.target;

    //Button 'finish task'
    if (domBtn.classList.contains(cssClassBtnFinishTask))
      finishTask(taskList, domTask, domBtn);
    //Button 'delete task'
    else if (domBtn.classList.contains(cssClassBtnDelTask))
      deleteTask(taskList, domTask);
    //Button 'undo task'
    else if (domBtn.classList.contains(cssClassBtnUndoTask))
      undoTask(taskList, domTask, domBtn);
  }
});
