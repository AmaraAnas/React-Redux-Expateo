export default class Service {
  constructor({
    SMI_GUID,
    SMI_NAME,
    SMI_TITLE,
    SMI_DISPLAY_TYPE,
    SMI_DESCRIPTION,
    SMI_WALLPAPER,
    PSM_REQUIRED,
    PSM_ALLOW_OUT_OF_PACK,
    SMI_ISPACK,
    SMI_UTA_COUNT,
    SMI_UTA_COUNT_DONE,
    service_company,
    service_taskaction, // TODO: is there all associated user tasks ???
  }) {
    this._rawData = {
      SMI_GUID,
      SMI_NAME,
      SMI_TITLE,
      SMI_DISPLAY_TYPE,
      SMI_DESCRIPTION,
      SMI_WALLPAPER,
      PSM_REQUIRED,
      PSM_ALLOW_OUT_OF_PACK,
      SMI_ISPACK,
      SMI_UTA_COUNT,
      SMI_UTA_COUNT_DONE,
      service_company,
      service_taskaction,
    };
  }

  get id() {
    return this._rawData.SMI_GUID;
  }

  get name() {
    return this._rawData.SMI_NAME;
  }

  get title() {
    return this._rawData.SMI_TITLE;
  }

  get description() {
    return this._rawData.SMI_DESCRIPTION;
  }

  get isRequired() {
    return Boolean(parseInt(this._rawData.PSM_REQUIRED));
  }

  toJSON() {
    const { id, name, title, description, isRequired } = this;
    return { id, name, title, description, isRequired };
  }
}
