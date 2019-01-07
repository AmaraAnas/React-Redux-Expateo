import User from './user.model';

describe('User model', () => {
  it('Should construct', () => {
    const userData = {
      gSesGuid: '1C318AB4B890F07F3B4D574375DD2B3C',
      gUsrId: '1166',
      gUsrGuid: 'FFA6F5223A9955085D0A8E34EF3C9D15',
      gUsrLanguage: 'fr',
      gUsrDateFormat: 'dd/MM/yyyy',
      gUsrCompanyGuid: 'TOTAL',
      gServiceEnabled: '1',
      gCompanyMode: 'GLOBAL',
      gUsrEmail: 'test7@expateotest.com',
      gMixPanelToken: '124355cd44c781292f9f9f5bce580456',
      gTypeFormRpMain_FR: 'https://expateo.typeform.com/to/kkKgJU',
      gTypeFormRpMain_EN: 'https://expateo.typeform.com/to/XADq3N',
      gUsrDepartureCountryCode: 'MX',
      gRedirectPage: 'indexin.html#/Start',
      gRememberMeEmail: 'test7@expateotest.com',
      gRememberMeId: 'FFA6F5223A9955085D0A8E34EF3C9D15',
    };
    const jhon = new User(userData);
    expect(jhon.email).toEqual(userData.gUsrEmail);
    expect(jhon.sessionId).toEqual(userData.gSesGuid);
    expect(jhon.isLogged).toEqual(userData.gSesGuid !== 0);
    expect(JSON.parse(JSON.stringify(jhon))).toEqual(userData);
  });
});
