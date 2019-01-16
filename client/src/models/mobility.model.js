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

  get date() {
    return new Date(this._rawData.startDate).getTime();
  }
  get destination() {
    return this._rawData.destination;
  }

  toJSON() {
    const { id, date, destination } = this;
    return { id, date, destination };
  }
}
