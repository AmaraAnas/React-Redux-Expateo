/**
 *      {
            YM_ORDER: '201901',
            YM_LABEL: 'Janvier 2019',
            user_taskaction: [
              {
                UTA_GUID: 'CED679B4D61080B7186BAC65B8B4BCCE',
                UTA_CUSTOM_USER: '0',
                UTA_CUSTOM_DATE: '0',
                UTA_CUSTOM_ADMIN: '0',
                UTA_CUSTOM_SCHEDULED_DATE: null,
                UTA_REMIND_DATE: null,
                UTA_LABEL: 'Fixer la date de votre d\u00e9m\u00e9nagement ',
                UTA_COMMENT:
                  'Lorsque vous aurez s\u00e9lectionn\u00e9 une soci\u00e9t\u00e9 de d\u00e9m\u00e9nagement, retournez-leur rapidement le <b>contrat sign\u00e9</b> pour confirmer votre d\u00e9m\u00e9nagement et en figer la date.',
                UTA_HOWTO:
                  "Par ailleurs, il est conseill\u00e9 de prendre en compt<b>e le d\u00e9lai d'acheminement de vos effets \u00e0 destination afin de fixer la date de votre d\u00e9m\u00e9nagement</b>. Aussi n'oubliez pas de poser un jour de cong\u00e9 si n\u00e9cessaire. Cela vous permettra de participer au bon d\u00e9roulement des op\u00e9rations. Afin de faciliter votre d\u00e9m\u00e9nagement et surtout, si vous habitez en centre ville, n'oubliez pas de <b>contacter votre mairie pour la mise en place de la signalisation des camions. </b>",
                UTA_LINK: '',
                UTA_HASHTAG: '#D\u00e9m\u00e9nageurs',
                UTA_COMPUTED_HOWTO:
                  "Par ailleurs, il est conseill\u00e9 de prendre en compt<b>e le d\u00e9lai d'acheminement de vos effets \u00e0 destination afin de fixer la date de votre d\u00e9m\u00e9nagement</b>. Aussi n'oubliez pas de poser un jour de cong\u00e9 si n\u00e9cessaire. Cela vous permettra de participer au bon d\u00e9roulement des op\u00e9rations. Afin de faciliter votre d\u00e9m\u00e9nagement et surtout, si vous habitez en centre ville, n'oubliez pas de <b>contacter votre mairie pour la mise en place de la signalisation des camions. </b>",
                UTA_COMPUTED_COMMENT:
                  'Lorsque vous aurez s\u00e9lectionn\u00e9 une soci\u00e9t\u00e9 de d\u00e9m\u00e9nagement, retournez-leur rapidement le <b>contrat sign\u00e9</b> pour confirmer votre d\u00e9m\u00e9nagement et en figer la date.',
                UTA_DATE: '5 Janvier 2019',
                UTA_SCHEDULED_DATE: '2019-01-05 00:00:00',
                UTA_COMPUTED_SCHEDULED_DATE: '2019-01-05 00:00:00',
                UTA_DONE: '0',
                UTA_PRIORITY: '0',
                UTA_OWNER: '',
                user_taskaction_user: [
                  {
                    USR_GUID: '9570E5E3C4A0859CF18220E7E21CC4A4',
                    USR_FIRSTNAME: 'Miyukiq',
                  },
                ],
                user_taskaction_service_company: [
                  { USC_GUID: '58686D83021B059EA2962C7ACC057121' },
                ],
                user_taskaction_partner_online: [
                  {
                    PRD_GUID: 'CMP_LES3D',
                    PRD_ICON:
                      'https://www.expateo.com/dev_v2/ws/img_cmp/les3d.png',
                    PRD_TITLE: 'Les 3 Demenageurs',
                    PRD_SUBTITLE:
                      'Demenagement international pour particuliers',
                    PRD_DESCRIPTION:
                      'Beaucoup de raisons nous poussent a faire un demenagement a l international. Mais ce projet n est pas chose facile et demande beaucoup de temps. C est a cet instant que Les 3 Demenageurs rentrent en jeu.',
                    PRD_PROMOTIONAL_TITLE: null,
                    PRD_PROMOTIONAL_CODE: 'XPTO',
                    PRD_DESCRIPTION_OTHER_TITLE: '',
                    PRD_DESCRIPTION_OTHER_CONTENT: '',
                    PRD_URL_NAME: 'Les 3 Demenageurs',
                    PRD_URL_LINK: null,
                    PRD_SUBSCRIBE_URL_NAME: 'Register Les 3 Demenageurs',
                    PRD_SUBSCRIBE_URL_LINK: 'URL_1000_1',
                    PRD_OWNER: 'XPTO',
                    partner_contact: [
                      {
                        PAC_FIRSTNAME: 'Kevin',
                        PAC_LASTNAME: 'PITHIOUD',
                        PAC_EMAIL: 'kevin@l3dem.com',
                        PAC_PHONE: '(0)4 28 29 03 17',
                        PAC_PHONE2: null,
                        PAC_OTHER_MEAN_CONTACT: null,
                      },
                    ],
                  },
                ],
                user_taskaction_partner_xpto: [],
                user_taskaction_partner_company: [],
              },
            ],
          },
 */

export default class Task {
  /**
   * Task model
   * @param {Object} rawData - the first parameter is rawData. Should be comming from 'user_subtheme[] .user_yearmonth[]'
   * @param {Object} extraData - extra data that can be passed to the Task model
   */
  constructor(
    {
      UTA_GUID,
      UTA_CUSTOM_USER,
      UTA_CUSTOM_DATE,
      UTA_CUSTOM_ADMIN,
      UTA_CUSTOM_SCHEDULED_DATE,
      UTA_REMIND_DATE,
      UTA_LABEL,
      UTA_COMMENT,
      UTA_HOWTO,
      UTA_LINK,
      UTA_HASHTAG,
      UTA_COMPUTED_HOWTO,
      UTA_COMPUTED_COMMENT,
      UTA_DATE,
      UTA_SCHEDULED_DATE,
      UTA_COMPUTED_SCHEDULED_DATE,
      UTA_DONE,
      UTA_PRIORITY,
      UTA_OWNER,
      user_taskaction_user,
      user_taskaction_service_company,
      user_taskaction_partner_online,
      user_taskaction_partner_xpto,
      user_taskaction_partner_company,
    },
    { themeGuid },
  ) {
    this._rawData = {
      themeGuid,
      UTA_GUID,
      UTA_CUSTOM_USER,
      UTA_CUSTOM_DATE,
      UTA_CUSTOM_ADMIN,
      UTA_CUSTOM_SCHEDULED_DATE,
      UTA_REMIND_DATE,
      UTA_LABEL,
      UTA_COMMENT,
      UTA_HOWTO,
      UTA_LINK,
      UTA_HASHTAG,
      UTA_COMPUTED_HOWTO,
      UTA_COMPUTED_COMMENT,
      UTA_DATE,
      UTA_SCHEDULED_DATE,
      UTA_COMPUTED_SCHEDULED_DATE,
      UTA_DONE,
      UTA_PRIORITY,
      UTA_OWNER,
      user_taskaction_user,
      user_taskaction_service_company,
      user_taskaction_partner_online,
      user_taskaction_partner_xpto,
      user_taskaction_partner_company,
    };
  }

  get id() {
    return this._rawData.UTA_GUID;
  }

  get label() {
    return this._rawData.UTA_LABEL;
  }

  get date() {
    return new Date(this._rawData.UTA_COMPUTED_SCHEDULED_DATE).getTime();
  }

  get isDone() {
    return Boolean(parseInt(this._rawData.UTA_DONE));
  }

  get themeGuid() {
    return this._rawData.themeGuid;
  }

  toJSON() {
    const { id, label, date, isDone, themeGuid } = this;
    return { id, label, date, isDone, themeGuid };
  }
}
