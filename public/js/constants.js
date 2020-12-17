/**
 * @module constants
 */

//New task form
const domNewTaskForm = document.querySelector('.new-task-form');
const domNewTaskDescInput = document.getElementById('new-task-desc');

//Task lists
const domTaskList = document.querySelector('.task-list');
const domTodoList = document.querySelector('.task-list-todo-wrapper');
const domDoneList = document.querySelector('.task-list-finished-wrapper');

//Task CSS classes
const cssClassTask = 'task';
const cssClassTaskFinished = 'finished';
const cssClassTaskDesc = 'task-desc';

//Task buttons CSS classes
const cssClassBtnTask = 'task-button';
const cssClassBtnFinishTask = 'finish-task';
const cssClassBtnUndoTask = 'undo-task';
const cssClassBtnDelTask = 'delete-task';

//Font awesome CSS classes
const cssClassFaBtnFinishTask = 'fa-check';
const cssClassFaBtnUndoTask = 'fa-undo';
const cssClassFaBtnDelTask = 'fa-trash-alt';

export {
  domNewTaskForm,
  domNewTaskDescInput,
  domTaskList,
  domTodoList,
  domDoneList,
  cssClassTask,
  cssClassTaskFinished,
  cssClassTaskDesc,
  cssClassBtnTask,
  cssClassBtnFinishTask,
  cssClassBtnUndoTask,
  cssClassBtnDelTask,
  cssClassFaBtnFinishTask,
  cssClassFaBtnUndoTask,
  cssClassFaBtnDelTask
};
