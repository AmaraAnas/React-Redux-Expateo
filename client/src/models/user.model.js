/**
 * {  
gSesGuid,":"1C318AB4B890F07F3B4D574375DD2B3C",
gUsrId,":"1166",
gUsrGuid,":"FFA6F5223A9955085D0A8E34EF3C9D15",
gUsrLanguage,":"fr",
gUsrDateFormat,":"dd\/MM\/yyyy",
gUsrCompanyGuid,":"TOTAL",
gUsrEmail,":"test7@expateotest.com",
gUsrDepartureCountryCode,":"MX",
gServiceEnabled,":"1",
gCompanyMode,":"GLOBAL",
gMixPanelToken,":"124355cd44c781292f9f9f5bce580456",
gTypeFormRpMain_FR,":"https:\/\/expateo.typeform.com\/to\/kkKgJU",
gTypeFormRpMain_EN,":"https:\/\/expateo.typeform.com\/to\/XADq3N",
gRedirectPage,":"indexin.html#\/Start",
gRememberMeEmail,":"test7@expateotest.com",
gRememberMeId,":"FFA6F5223A9955085D0A8E34EF3C9D15"
}
 */

export default class User {
  constructor({
    gRememberMeEmail,
    gRememberMeId,
    gUsrId,
    gUsrGuid,
    gUsrLanguage,
    gUsrDateFormat,
    gUsrCompanyGuid,
    gUsrEmail,
    gUsrDepartureCountryCode,
    gServiceEnabled,
    gSesGuid,
    gFamilyGuid,
    gCompanyMode,
    gMixPanelToken,
    gTypeFormRpMain_FR,
    gTypeFormRpMain_EN,
    gRedirectPage,
  }) {
    this._gFamilyGuid = gFamilyGuid;
    this._gSesGuid = gSesGuid;
    this._gUsrId = gUsrId;
    this._gUsrGuid = gUsrGuid;
    this._gUsrLanguage = gUsrLanguage;
    this._gUsrDateFormat = gUsrDateFormat;
    this._gUsrCompanyGuid = gUsrCompanyGuid;
    this._gUsrEmail = gUsrEmail;
    this._gUsrDepartureCountryCode = gUsrDepartureCountryCode;
    this._gServiceEnabled = gServiceEnabled;
    this._gCompanyMode = gCompanyMode;
    this._gMixPanelToken = gMixPanelToken;
    this._gTypeFormRpMain_FR = gTypeFormRpMain_FR;
    this._gTypeFormRpMain_EN = gTypeFormRpMain_EN;
    this._gRedirectPage = gRedirectPage;
    this._gRememberMeEmail = gRememberMeEmail;
    this._gRememberMeId = gRememberMeId;
    this._rawData = {
      gFamilyGuid,
      gRememberMeEmail,
      gRememberMeId,
      gUsrId,
      gUsrGuid,
      gUsrLanguage,
      gUsrDateFormat,
      gUsrCompanyGuid,
      gUsrEmail,
      gUsrDepartureCountryCode,
      gServiceEnabled,
      gSesGuid,
      gCompanyMode,
      gMixPanelToken,
      gTypeFormRpMain_FR,
      gTypeFormRpMain_EN,
      gRedirectPage,
    };
  }

  get rememberMeEmail() {
    return this._gRememberMeEmail; // is this always the same as user.email ??
  }

  get rememberMeId() {
    return this._gRememberMeId; // is this always the same as user.id ??
  }

  get email() {
    return this._gUsrEmail;
  }

  get guid() {
    return this._gUsrGuid;
  }

  get id() {
    return this._gUsrId;
  }

  get sessionId() {
    return this._gSesGuid;
  }

  get isLogged() {
    return this._gSesGuid !== undefined && this._gSesGuid !== 0;
  }

  toJSON() {
    return this._rawData;
  }
}
