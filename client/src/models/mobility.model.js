/**
 * TODO: We should use the facttory pattern to createModel instance as : replace `new Task(rawTask)` by a factory `createTask(rawTask)`
 *
 */
export default class Mobility {
  constructor({ id, QUE_88, QUE_20 }) {
    this._rawData = {
      QUE_88,
      QUE_20,
      id,
    };
  }

  get id() {
    return this._rawData.id;
  }

  get startDate() {
    return new Date(
      this._rawData.QUE_20.user_answer_done[0].USA_DATE,
    ).getTime();
  }
  get destination() {
    return this._rawData.QUE_88.user_answer_done[0].USA_TEXT;
  }

  toJSON() {
    const { id, startDate, destination } = this;
    return { id, startDate, destination };
  }
}
