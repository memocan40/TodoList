/**
 * @module Task
 */

/**
 * @class
 * @description Task
 *
 * @property {Number} _id           Id of task.
 * @property {String} _description  Task content.
 * @property {Boolean} _finished    Indicates whether task has been marked as done.
 */
export default class Task {
  /**
   * @constructor
   * @description Creates a new Tasklist.
   *
   * @param {String} description  Task content for new task.
   */
  constructor(description) {
    this._id = null;
    this._description = description;
    this._finished = false;
  }

  /**
   * @description Returns task id.
   *
   * @returns {Number} Id of task.
   */
  get Id() {
    return this._id;
  }

  /**
   * @description Returns task id.
   *
   * @param {Number} Id of task.
   */
  set Id(id) {
    this._id = id;
  }

  /**
   * @description Returns task description.
   *
   * @returns {Number} Id of task.
   */
  get Description() {
    return this._description;
  }

  /**
   * @description Returns true if task finished.
   *
   * @returns {Boolean} True if tasf finished.
   */
  get Finished() {
    return this._finished;
  }

  /**
   * @description Marks task as done.
   */

  markAsDone() {
    this._finished = true;
  }

  /**
   * @description Marks task as not done.
   */
  undo() {
    this._finished = false;
  }
}
