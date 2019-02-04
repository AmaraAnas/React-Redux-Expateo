export default class Theme {
  constructor({
    THE_ID,
    THE_TRANSLATION_CODE,
    THE_CONDITION,
    THE_ORDER,
    THE_INSERT_DATETIME,
    THE_UPDATE_DATETIME,
    THE_GUID,
    THE_ICON,
    THE_LABEL,
    THE_HASHTAG,
  }) {
    this._rawData = {
      THE_ID,
      THE_TRANSLATION_CODE,
      THE_CONDITION,
      THE_ORDER,
      THE_INSERT_DATETIME,
      THE_UPDATE_DATETIME,
      THE_GUID,
      THE_ICON,
      THE_LABEL,
      THE_HASHTAG,
    };
  }

  get id() {
    return this._rawData.THE_ID;
  }

  get guid() {
    return this._rawData.THE_GUID;
  }

  get label() {
    return this._rawData.THE_LABEL;
  }

  toJSON() {
    const { id, guid, label } = this;
    return { id, guid, label };
  }
}
