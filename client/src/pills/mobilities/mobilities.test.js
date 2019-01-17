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
    const rawQuestions = [
      {
        QUE_GUID: 'QUE_64',
        QUE_LABEL: 'Partez-vous avec des enfants ?',
        QUE_TYPE: 'list',
        QUE_LOCATION: 'INFO_USER',
        QUE_TRANSLATION_CODE: 'CHILD_COUNT',
        QUE_LEVEL: null,
        user_theme: [],
        user_answer: [
          {
            ANS_GUID: 'ANS_988',
            ANS_CONDITION: null,
            ANS_LABEL: '0',
          },
          {
            ANS_GUID: 'ANS_990',
            ANS_CONDITION: null,
            ANS_LABEL: '1',
          },
          {
            ANS_GUID: 'ANS_992',
            ANS_CONDITION: null,
            ANS_LABEL: '2',
          },
        ],
        user_answer_done: [
          {
            USA_ANSWER_GUID: 'ANS_992',
            USA_TEXT: null,
            USA_DATE: null,
          },
        ],
      },
      {
        QUE_GUID: 'QUE_20',
        QUE_LABEL: 'Quelle est votre date de départ de France prévisionnelle ?',
        QUE_TYPE: 'date',
        QUE_LOCATION: 'MENU_USER',
        QUE_TRANSLATION_CODE: 'DEPART',
        QUE_LEVEL: null,
        user_theme: [],
        user_answer: [],
        user_answer_done: [
          {
            USA_ANSWER_GUID: null,
            USA_TEXT: null,
            USA_DATE: '2019-07-20 00:00:00',
          },
        ],
      },
      {
        QUE_GUID: 'QUE_88',
        QUE_LABEL: 'Quelle est votre destination ?',
        QUE_TYPE: 'place',
        QUE_LOCATION: 'MENU_USER',
        QUE_TRANSLATION_CODE: 'PAYS_ETAT_VILLE',
        QUE_LEVEL: null,
        user_theme: [],
        user_answer: [],
        user_answer_done: [
          {
            USA_ANSWER_GUID: null,
            USA_TEXT: 'Nigeria',
            USA_DATE: null,
          },
        ],
      },
    ];
    baseApi.mobilitiesApi.mockResolvedValueOnce(rawQuestions);
    const mobilities = await getMobilities({
      sessionId: 'FE213467BD8B2EB84A34F9D6F47DF52C',
      id: '9193',
    });
    expect(mobilities.length).toEqual(1);
    expect(mobilities[0].toJSON()).toEqual({
      id: undefined,
      startDate: new Date(
        rawQuestions[1].user_answer_done[0].USA_DATE,
      ).getTime(),
      destination: rawQuestions[2].user_answer_done[0].USA_TEXT,
    });
  });
});

describe('Mobilities action', () => {
  it('Should dispatch pending & success', async () => {
    const thunk = getMobilitiesAction();
    const dispatch = jest.fn();
    const rawQuestions = [
      {
        QUE_GUID: 'QUE_64',
        QUE_LABEL: 'Partez-vous avec des enfants ?',
        QUE_TYPE: 'list',
        QUE_LOCATION: 'INFO_USER',
        QUE_TRANSLATION_CODE: 'CHILD_COUNT',
        QUE_LEVEL: null,
        user_theme: [],
        user_answer: [
          {
            ANS_GUID: 'ANS_988',
            ANS_CONDITION: null,
            ANS_LABEL: '0',
          },
          {
            ANS_GUID: 'ANS_990',
            ANS_CONDITION: null,
            ANS_LABEL: '1',
          },
          {
            ANS_GUID: 'ANS_992',
            ANS_CONDITION: null,
            ANS_LABEL: '2',
          },
        ],
        user_answer_done: [
          {
            USA_ANSWER_GUID: 'ANS_992',
            USA_TEXT: null,
            USA_DATE: null,
          },
        ],
      },
      {
        QUE_GUID: 'QUE_20',
        QUE_LABEL: 'Quelle est votre date de départ de France prévisionnelle ?',
        QUE_TYPE: 'date',
        QUE_LOCATION: 'MENU_USER',
        QUE_TRANSLATION_CODE: 'DEPART',
        QUE_LEVEL: null,
        user_theme: [],
        user_answer: [],
        user_answer_done: [
          {
            USA_ANSWER_GUID: null,
            USA_TEXT: null,
            USA_DATE: '2019-07-20 00:00:00',
          },
        ],
      },
      {
        QUE_GUID: 'QUE_88',
        QUE_LABEL: 'Quelle est votre destination ?',
        QUE_TYPE: 'place',
        QUE_LOCATION: 'MENU_USER',
        QUE_TRANSLATION_CODE: 'PAYS_ETAT_VILLE',
        QUE_LEVEL: null,
        user_theme: [],
        user_answer: [],
        user_answer_done: [
          {
            USA_ANSWER_GUID: null,
            USA_TEXT: 'Nigeria',
            USA_DATE: null,
          },
        ],
      },
    ];
    baseApi.mobilitiesApi.mockResolvedValueOnce(rawQuestions);
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
        [STATE_KEY]: [
          new Mobility({ QUE_20: rawQuestions[1], QUE_88: rawQuestions[2] }),
        ],
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
