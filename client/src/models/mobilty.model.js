export default class Mobility {
  constructor({ id, startDate, destination }) {
    this._rawData = {
      id,
      startDate,
      destination,
    };
  }

  get id() {
    return this._rawData.id;
  }

  get startDate() {
    return this._rawData.startDate;
  }
  get destination() {
    return this._rawData.destination;
  }

  toJSON() {
    const { id, startDate, destination } = this;
    return { id, startDate, destination };
  }
}
