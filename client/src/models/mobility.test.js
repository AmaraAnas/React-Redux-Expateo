import Mobilty from './mobility.model';

describe('Mobility model', () => {
  it('Should construct', () => {
    const rawData = {
      UCK_ID: '384',
      UCK_FAMILY_GUID: 'FB21B04CEC71F2F3C6B59ADA04F0E030',
      UCK_SPOUSE_GUID: null,
      UCK_CKM_GUID: 'base',
      UCK_PMI_GUID: null,
      UCK_STATUS: 'INPROGRESS',
      UCK_LABEL: 'Australie',
      UCK_ARRIVAL_MOBILITY_STATUS: 'MOB_PRO_EXPATRIE',
      UCK_BEGIN_DATETIME: '2019-09-17 00:00:00',
      UCK_DEPARTURE_DATETIME: '2019-01-22 21:01:24',
      UCK_ARRIVAL_DATETIME: null,
      UCK_MOVING_DATETIME: null,
      UCK_DEPARTURE_PLACE: null,
      UCK_DEPARTURE_CITY: null,
      UCK_DEPARTURE_STATE_CODE: null,
      UCK_DEPARTURE_COUNTRY_CODE: null,
      UCK_ARRIVAL_PLACE: 'Australie',
      UCK_ARRIVAL_CITY: '',
      UCK_ARRIVAL_STATE_CODE: '',
      UCK_ARRIVAL_COUNTRY_CODE: 'AU',
      UCK_END_DATETIME: null,
      UCK_CSU_DEPARTURE_GUID: null,
      UCK_CSU_ARRIVAL_GUID: null,
      UCK_JOB_TITLE_ARRIVAL: null,
      UCK_CHILD_COUNT: null,
      UCK_FAMILY_STATUS: 'FAMILLE_SEUL',
      UCK_AMOUNT_MAX: null,
      UCK_CURRENCY: null,
      UCK_CLOSURE_DATETIME: null,
      UCK_CURRENT: '1',
      UCK_INSERT_DATETIME: '2019-01-22 20:21:30',
      UCK_UPDATE_DATETIME: '2019-01-22 22:01:47',
      UCK_GUID: '3F26BD65801187AB5A2FC348FCDAEADA',
      UCK_CSU_DEPARTURE_NAME: null,
      UCK_CSU_ARRIVAL_NAME: null,
      UCK_ARRIVAL_MOBILITY_STATUS_LABEL: 'Expatrié',
      UCK_DEPARTURE_STATE_LABEL: null,
      UCK_DEPARTURE_COUNTRY_LABEL: null,
      UCK_ARRIVAL_STATE_LABEL: null,
      UCK_ARRIVAL_COUNTRY_LABEL: 'Australie',
      UCK_CHILD_COUNT_LABEL: null,
      UCK_FAMILY_STATUS_LABEL: null,
      UCK_DEPARTURE_COUNTRY_FLAG_URL: '',
      UCK_ARRIVAL_COUNTRY_FLAG_URL:
        'https://www.expateo.com/dev_v3/ws/img_flag/au.png',
    };

    const m = new Mobilty(rawData);
    expect(m.id).toEqual(rawData.UCK_ID);
    expect(m.guid).toEqual(rawData.UCK_GUID);
    expect(m.destination).toEqual(rawData.UCK_ARRIVAL_PLACE);
    expect(m.title).toEqual(rawData.UCK_LABEL);
    expect(m.isCurrent).toEqual(true);
    expect(m.startDate).toEqual(
      new Date(rawData.UCK_DEPARTURE_DATETIME).getTime(),
    );
    expect(JSON.parse(JSON.stringify(m))).toEqual({
      id: rawData.UCK_ID,
      guid: rawData.UCK_GUID,
      destination: rawData.UCK_ARRIVAL_PLACE,
      title: rawData.UCK_LABEL,
      isCurrent: true,
      startDate: new Date(rawData.UCK_DEPARTURE_DATETIME).getTime(),
      isInitialized: true,
    });
  });
});
