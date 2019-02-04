import Profile from './profile.model';

describe('Profile model', () => {
  it('Should construct', () => {
    const rawData = {
      USR_ID: '363',
      USR_EMAIL: 'pberquet@gmail.com',
      USR_PASSWORD: 'be29233b71538422a650ce15a81066d8f77408b1',
      USR_FIRSTNAME: 'Patrice',
      USR_LASTNAME: 'BERQUET',
      USR_PHONE: '0102030405',
      USR_LANGUAGE: 'fr',
      USR_DATEFORMAT: 'dd/MM/yyyy',
      USR_FAMILY_GUID: 'CBF3DF68E199218834A3CB2F2A0606CA',
      USR_PROFILE: 'MAIN',
      USR_PICTURE: 'profile_man.png',
      USR_COMPANY_GUID: null,
      USR_BUSINESS_PROVIDER_GUID: null,
      USR_COOKIE: '0',
      USR_BACKGROUND: 'IMAGE1',
      USR_ALLOW_EMAIL: '1',
      USR_ALLOW_SPAM: '1',
      USR_ALLOW_PARTNER: null,
      USR_SOURCE: null,
      USR_LOG_STATUS: null,
      USR_REGISTER_STATUS: null,
      USR_INSERT_DATETIME: '2016-03-03 00:08:39',
      USR_UPDATE_DATETIME: '2017-07-16 08:07:31',
      USR_REGISTERED_DATETIME: '2016-03-03 00:08:39',
      USR_PASSWORD_DATETIME: '2017-07-16 07:05:07',
      USR_VALIDEMAIL_DATETIME: '2017-03-06 11:50:21',
      USR_RP_HIDE: null,
      USR_RP_DATETIME: '2016-04-20 09:27:35',
      USR_RP_READY_DATETIME: '2017-05-08 11:03:30',
      USR_RP_NOTTODO: '1',
      USR_RP_FIRSTACCESS: '1',
      USR_ALLOW_RDV: '0',
      USR_LASTLOGIN_DATETIME: '2017-07-16 07:56:43',
      USR_SOFTMAILER_ID: '1',
      USR_SOFTCRM_ID: '5680876067225600',
      USR_GUID: 'A662E821B19A50D7137725CA86ED19E1',
      CMP_NAME: null,
      USR_GRAVATAR:
        'http://www.gravatar.com/avatar/87c278699f3f6a7ba790a42083d0fe1e?s=80&r=g&d=http://127.0.0.1:81/app//img_usr/profile_man.png',
      USR_PCK_RP: 'PCK_RP1',
      USR_QRA_MAIN: 0,
      USR_APP_FG: 1,
      USR_APP_SP: 0,
      USR_PNI: '0',
      contact: [
        {
          USR_FIRSTNAME: 'Johanna',
          USR_LASTNAME: 'TPOENA',
          USR_JOB_TITLE: 'Responsable immigration',
          USR_PHONE_PREFIX: '+33',
          USR_PHONE: '(0)1 49 23 54 22 22',
          USR_EMAIL: 'johanna.tpoena@expatototest.com',
        },
        {
          USR_FIRSTNAME: 'Yann',
          USR_LASTNAME: 'MARD',
          USR_JOB_TITLE: 'Responsable RH',
          USR_PHONE_PREFIX: '+33',
          USR_PHONE: '(0)1 22 22 49 54 ',
          USR_EMAIL: 'ymard.tpoena@expatototest.com',
        },
      ],
    };

    const p = new Profile(rawData);
    expect(p.isMain).toEqual(true);
    expect(p.firstname).toEqual('Patrice');
    expect(p.lastname).toEqual('BERQUET');
    expect(JSON.parse(JSON.stringify(p))).toEqual({
      isMain: true,
      firstname: 'Patrice',
      lastname: 'BERQUET',
    });
  });
});
