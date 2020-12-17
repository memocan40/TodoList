/**
 * @module TaskList
 */

/**
 * @class
 * @description Tasklist
 *
 * @property {Array}  _tasks  Task list.
 * @property {Number} _nextId Id to be assigned to the next new task.
 */
export default class TaskList {
  /**
   * @constructor
   * @description Creates a new TaskList.
   */
  constructor() {
    this._tasks = [];
    this._nextId = 0;
  }

  /**
   * @description Returns the id for next new task.
   *
   * @returns {Number} Id of next new task.
   */
  get NextId() {
    return this._nextId;
  }

  /**
   * @description Returns the list of tasks.
   *
   * @returns {Array} List of tasks.
   */
  get Tasks() {
    return this._tasks;
  }

  /**
   * @description Adds a task to the list.
   *
   * @param {Task} task Task to be added to the list.
   */
  addTask(task) {
    const newTask = task;
    newTask.Id = this._nextId;
    this._tasks.push(newTask);
    this._nextId++;
    return newTask.Id;
  }

  /**
   * @description Removes a task from the list.
   *
   * @param {Number} id Id of the task to be removed.
   */
  deleteTask(id) {
    const index = this.Tasks.findIndex(task => task.getId === id);
    this._tasks.splice(index, 1);
  }
}
