export default class Profile {
  constructor({
    USR_ID,
    USR_EMAIL,
    USR_FIRSTNAME,
    USR_LASTNAME,
    USR_PHONE,
    USR_LANGUAGE,
    USR_DATEFORMAT,
    USR_FAMILY_GUID,
    USR_PROFILE,
    USR_PICTURE,
    USR_COMPANY_GUID,
    USR_BUSINESS_PROVIDER_GUID,
    USR_COOKIE,
    USR_BACKGROUND,
    USR_ALLOW_EMAIL,
    USR_ALLOW_SPAM,
    USR_ALLOW_PARTNER,
    USR_SOURCE,
    USR_LOG_STATUS,
    USR_REGISTER_STATUS,
    USR_INSERT_DATETIME,
    USR_UPDATE_DATETIME,
    USR_REGISTERED_DATETIME,
    USR_PASSWORD_DATETIME,
    USR_VALIDEMAIL_DATETIME,
    USR_RP_HIDE,
    USR_RP_DATETIME,
    USR_RP_READY_DATETIME,
    USR_RP_NOTTODO,
    USR_RP_FIRSTACCESS,
    USR_ALLOW_RDV,
    USR_LASTLOGIN_DATETIME,
    USR_SOFTMAILER_ID,
    USR_SOFTCRM_ID,
    USR_GUID,
    CMP_NAME,
    USR_GRAVATAR,
    USR_PCK_RP,
    USR_QRA_MAIN,
    USR_APP_FG,
    USR_APP_SP,
    USR_PNI,
    contact,
  }) {
    this._rawData = {
      USR_ID,
      USR_EMAIL,
      USR_FIRSTNAME,
      USR_LASTNAME,
      USR_PHONE,
      USR_LANGUAGE,
      USR_DATEFORMAT,
      USR_FAMILY_GUID,
      USR_PROFILE,
      USR_PICTURE,
      USR_COMPANY_GUID,
      USR_BUSINESS_PROVIDER_GUID,
      USR_COOKIE,
      USR_BACKGROUND,
      USR_ALLOW_EMAIL,
      USR_ALLOW_SPAM,
      USR_ALLOW_PARTNER,
      USR_SOURCE,
      USR_LOG_STATUS,
      USR_REGISTER_STATUS,
      USR_INSERT_DATETIME,
      USR_UPDATE_DATETIME,
      USR_REGISTERED_DATETIME,
      USR_PASSWORD_DATETIME,
      USR_VALIDEMAIL_DATETIME,
      USR_RP_HIDE,
      USR_RP_DATETIME,
      USR_RP_READY_DATETIME,
      USR_RP_NOTTODO,
      USR_RP_FIRSTACCESS,
      USR_ALLOW_RDV,
      USR_LASTLOGIN_DATETIME,
      USR_SOFTMAILER_ID,
      USR_SOFTCRM_ID,
      USR_GUID,
      CMP_NAME,
      USR_GRAVATAR,
      USR_PCK_RP,
      USR_QRA_MAIN,
      USR_APP_FG,
      USR_APP_SP,
      USR_PNI,
      contact,
    };
  }

  get isMain() {
    return this._rawData.USR_PROFILE === 'MAIN';
  }

  get firstname() {
    return this._rawData.USR_FIRSTNAME;
  }

  get lastname() {
    return this._rawData.USR_LASTNAME;
  }

  toJSON() {
    const { isMain, firstname, lastname } = this;
    return { isMain, firstname, lastname };
  }
}
