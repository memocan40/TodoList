/**
 * @module functions
 */

import {
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
} from './constants.js';

let functions = {
  /**
   * @description Adds task to list
   *
   * @param {TaskList}  taskList  Task list object in application
   * @param {Object}    domTask   Task DOM node to be marked as finished
   */

  addTask: (taskList, task) => {
    const taskId = taskList.addTask(task);

    const taskHTML = `<div class="${cssClassTask}" id="${taskId}">
                      <p class="${cssClassTaskDesc}">${task.Description}</p>
                      <button class="${cssClassBtnTask} ${cssClassBtnFinishTask} fas ${cssClassFaBtnFinishTask}"></button>
                      <button class="${cssClassBtnTask} ${cssClassBtnDelTask} fas ${cssClassFaBtnDelTask}"></button>
                    </div>`;

    domTodoList.innerHTML += taskHTML;
  },

  /**
   * @description Marks task as done and moves it to finished tasks section
   *
   * @param {TaskList}  taskList  Task list object in application
   * @param {Object}    domTask   Task DOM node to be marked as finished
   * @param {Object}    domBtn    Finish button in DOM of spedific task
   */

  finishTask: (taskList, domTask, domBtn) => {
    const domTaskId = parseInt(domTask.id);
    const taskArray = taskList.Tasks;

    //Changing button icons
    domBtn.classList.add(cssClassFaBtnUndoTask);
    domBtn.classList.remove(cssClassFaBtnFinishTask);

    //Changing button task classes
    domBtn.classList.add(cssClassBtnUndoTask);
    domBtn.classList.remove(cssClassBtnFinishTask);

    domTask.classList.add(cssClassTaskFinished);
    domDoneList.append(domTask);

    taskArray.find(task => task.Id === domTaskId).markAsDone();
  },

  /**
   * @description Marks task as not done and moves it to TODO tasks section
   *
   * @param {TaskList}  taskList  Task list object in application
   * @param {Object}    domTask   Task DOM node to be marked as finished
   * @param {Object}    domBtn    Finish button in DOM of specific task
   */

  undoTask: (taskList, domTask, domBtn) => {
    const domTaskId = parseInt(domTask.id);
    const taskArray = taskList.Tasks;

    //Changing button icons
    domBtn.classList.add(cssClassFaBtnFinishTask);
    domBtn.classList.remove(cssClassFaBtnUndoTask);

    //Changing button task classes
    domBtn.classList.add(cssClassBtnFinishTask);
    domBtn.classList.remove(cssClassBtnUndoTask);

    domTask.classList.remove(cssClassTaskFinished);
    domTodoList.append(domTask);

    taskArray.find(task => task.Id === domTaskId).undo();
  },

  /**
   * @description Deletes task from task array and DOM
   *
   * @param {TaskList}  taskList  Task list object in application
   * @param {Object}    domTask   Task DOM node to be marked as finished
   */

  deleteTask: (taskList, domTask) => {
    const domTaskId = parseInt(domTask.id);
    taskList.deleteTask(domTaskId);
    domTask.remove();
  }
};

export { functions };
