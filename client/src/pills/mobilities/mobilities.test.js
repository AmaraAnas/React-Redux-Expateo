import Mobility from '../../models/mobility.model';

import { schemaSelectorCreator } from '../schema/schema.selectors';
import * as baseApi from '../api/base.api';
import { addEntities } from '../schema/schema.actions';

import {
  STATE_KEY,
  mobilitiesSelector,
  currentMobilitySelector,
} from './mobilities.selectors';
import { getMobilities } from './mobilities.api';
import {
  getMobilities as getMobilitiesAction,
  getAllPending,
  getAllSuccess,
  getAllFailure,
} from './mobilities.actions';

jest.mock('../api/base.api');

const rawMobilities = [
  {
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
  },
  {
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
    UCK_CURRENT: '0',
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
  },
];

describe('Mobilities selector', () => {
  it('Should created selector use the good STATE_KEY', () => {
    expect(mobilitiesSelector.toString()).toEqual(
      schemaSelectorCreator(STATE_KEY, []).toString(),
    );
  });

  it('Should created selector return the default value', () => {
    let state = {
      Schema: {
        entities: {},
      },
    };
    expect(mobilitiesSelector(state)).toEqual([]);
  });
});

describe('Mobilities API', () => {
  it('Should return an array with only one Mobilty object', async () => {
    baseApi.mobilitiesApi.mockResolvedValueOnce(rawMobilities);
    const mobilities = await getMobilities({
      sessionId: 'FE213467BD8B2EB84A34F9D6F47DF52C',
      id: '9193',
    });
    expect(mobilities).toEqual(
      rawMobilities.map((mobility) => new Mobility(mobility)),
    );
  });
});

describe('Mobilities action', () => {
  it('Should dispatch pending & success', async () => {
    const thunk = getMobilitiesAction();
    const dispatch = jest.fn();
    baseApi.mobilitiesApi.mockResolvedValueOnce(rawMobilities);
    const getState = jest.fn().mockReturnValueOnce({ Auth: { user: {} } });
    await thunk(dispatch, getState, {
      api: { mobilities: { getMobilities } },
    });

    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, getAllPending());
    expect(dispatch).toHaveBeenNthCalledWith(2, getAllSuccess());
    expect(dispatch).toHaveBeenNthCalledWith(
      3,
      addEntities({
        [STATE_KEY]: rawMobilities.map((mobility) => new Mobility(mobility)),
      }),
    );
  });

  it('Should dispatch pending & failure', async () => {
    const thunk = getMobilitiesAction();
    const dispatch = jest.fn();
    const e = new Error('failed');
    baseApi.mobilitiesApi.mockRejectedValueOnce(e);
    const getState = jest.fn().mockReturnValueOnce({ Auth: { user: {} } });
    await thunk(dispatch, getState, {
      api: { mobilities: { getMobilities } },
    });
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getAllPending());
    expect(dispatch).toHaveBeenNthCalledWith(2, getAllFailure(e));
  });
});
