/**
 * TODO: We should use the facttory pattern to createModel instance as : replace `new Task(rawTask)` by a factory `createTask(rawTask)`
 *
 */
export default class Mobility {
  constructor({
    UCK_AMOUNT_MAX,
    UCK_ARRIVAL_CITY,
    UCK_ARRIVAL_COUNTRY_CODE,
    UCK_ARRIVAL_COUNTRY_FLAG_URL,
    UCK_ARRIVAL_COUNTRY_LABEL,
    UCK_ARRIVAL_DATETIME,
    UCK_ARRIVAL_MOBILITY_STATUS,
    UCK_ARRIVAL_MOBILITY_STATUS_LABEL,
    UCK_ARRIVAL_PLACE,
    UCK_ARRIVAL_STATE_CODE,
    UCK_ARRIVAL_STATE_LABEL,
    UCK_BEGIN_DATETIME,
    UCK_CHILD_COUNT,
    UCK_CHILD_COUNT_LABEL,
    UCK_CKM_GUID,
    UCK_CLOSURE_DATETIME,
    UCK_CSU_ARRIVAL_GUID,
    UCK_CSU_ARRIVAL_NAME,
    UCK_CSU_DEPARTURE_GUID,
    UCK_CSU_DEPARTURE_NAME,
    UCK_CURRENCY,
    UCK_CURRENT,
    UCK_DEPARTURE_CITY,
    UCK_DEPARTURE_COUNTRY_CODE,
    UCK_DEPARTURE_COUNTRY_FLAG_URL,
    UCK_DEPARTURE_COUNTRY_LABEL,
    UCK_DEPARTURE_DATETIME,
    UCK_DEPARTURE_PLACE,
    UCK_DEPARTURE_STATE_CODE,
    UCK_DEPARTURE_STATE_LABEL,
    UCK_END_DATETIME,
    UCK_FAMILY_GUID,
    UCK_FAMILY_STATUS,
    UCK_FAMILY_STATUS_LABEL,
    UCK_GUID,
    UCK_ID,
    UCK_INSERT_DATETIME,
    UCK_JOB_TITLE_ARRIVAL,
    UCK_LABEL,
    UCK_MOVING_DATETIME,
    UCK_PMI_GUID,
    UCK_SPOUSE_GUID,
    UCK_STATUS,
    UCK_UPDATE_DATETIME,
  }) {
    this._rawData = {
      UCK_AMOUNT_MAX,
      UCK_ARRIVAL_CITY,
      UCK_ARRIVAL_COUNTRY_CODE,
      UCK_ARRIVAL_COUNTRY_FLAG_URL,
      UCK_ARRIVAL_COUNTRY_LABEL,
      UCK_ARRIVAL_DATETIME,
      UCK_ARRIVAL_MOBILITY_STATUS,
      UCK_ARRIVAL_MOBILITY_STATUS_LABEL,
      UCK_ARRIVAL_PLACE,
      UCK_ARRIVAL_STATE_CODE,
      UCK_ARRIVAL_STATE_LABEL,
      UCK_BEGIN_DATETIME,
      UCK_CHILD_COUNT,
      UCK_CHILD_COUNT_LABEL,
      UCK_CKM_GUID,
      UCK_CLOSURE_DATETIME,
      UCK_CSU_ARRIVAL_GUID,
      UCK_CSU_ARRIVAL_NAME,
      UCK_CSU_DEPARTURE_GUID,
      UCK_CSU_DEPARTURE_NAME,
      UCK_CURRENCY,
      UCK_CURRENT,
      UCK_DEPARTURE_CITY,
      UCK_DEPARTURE_COUNTRY_CODE,
      UCK_DEPARTURE_COUNTRY_FLAG_URL,
      UCK_DEPARTURE_COUNTRY_LABEL,
      UCK_DEPARTURE_DATETIME,
      UCK_DEPARTURE_PLACE,
      UCK_DEPARTURE_STATE_CODE,
      UCK_DEPARTURE_STATE_LABEL,
      UCK_END_DATETIME,
      UCK_FAMILY_GUID,
      UCK_FAMILY_STATUS,
      UCK_FAMILY_STATUS_LABEL,
      UCK_GUID,
      UCK_ID,
      UCK_INSERT_DATETIME,
      UCK_JOB_TITLE_ARRIVAL,
      UCK_LABEL,
      UCK_MOVING_DATETIME,
      UCK_PMI_GUID,
      UCK_SPOUSE_GUID,
      UCK_STATUS,
      UCK_UPDATE_DATETIME,
    };
  }

  get id() {
    return this._rawData.UCK_ID;
  }

  get guid() {
    return this._rawData.UCK_GUID;
  }

  get startDate() {
    return new Date(this._rawData.UCK_DEPARTURE_DATETIME).getTime();
  }

  get destination() {
    return this._rawData.UCK_ARRIVAL_PLACE;
  }

  get isCurrent() {
    return this._rawData.UCK_CURRENT === '1';
  }

  get title() {
    return this._rawData.UCK_LABEL;
  }

  get isInitialized() {
    return Boolean(this._rawData.UCK_DEPARTURE_DATETIME);
  }

  toJSON() {
    const {
      id,
      startDate,
      destination,
      isCurrent,
      title,
      guid,
      isInitialized,
    } = this;
    return {
      id,
      startDate,
      destination,
      isCurrent,
      title,
      guid,
      isInitialized,
    };
  }
}
