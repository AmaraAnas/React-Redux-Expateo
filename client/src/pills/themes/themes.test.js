import Theme from '../../models/theme.model';

import { schemaSelectorCreator } from '../schema/schema.selectors';
import * as baseApi from '../api/base.api';
import { addEntities } from '../schema/schema.actions';

import { STATE_KEY, themesSelector } from './themes.selectors';
import { getThemes } from './themes.api';
import {
  getThemes as getThemesAction,
  getAllPending,
  getAllSuccess,
  getAllFailure,
} from './themes.actions';

jest.mock('../api/base.api');

describe('Themes selector', () => {
  it('Should created selector use the good STATE_KEY', () => {
    expect(themesSelector.toString()).toEqual(
      schemaSelectorCreator(STATE_KEY, []).toString(),
    );
  });

  it('Should created selector return the default value', () => {
    let state = {
      Schema: {
        entities: {},
      },
    };
    expect(themesSelector(state)).toEqual([]);
  });

  it('Should created selector return the `themes` stored entity', () => {
    let state = {
      Schema: {
        entities: {
          themes: [{ id: 1, name: 'chomage' }, { id: 2, name: 'assurance' }],
        },
      },
    };
    expect(themesSelector(state)).toEqual([
      { id: 1, name: 'chomage' },
      { id: 2, name: 'assurance' },
    ]);
  });
});

describe('Themes API', () => {
  it('Should return an array of Theme', async () => {
    const rawThemes = [
      {
        THE_ID: '2',
        THE_TRANSLATION_CODE: 'THE_PROFESSIONAL',
        THE_CONDITION: null,
        THE_ORDER: '2',
        THE_INSERT_DATETIME: '0000-00-00 00:00:00',
        THE_UPDATE_DATETIME: '0000-00-00 00:00:00',
        THE_GUID: 'THE_2',
        THE_ICON: 'THE_PROFESSIONAL.svg',
        THE_LABEL: 'Activit\u00e9 professionnelle',
        THE_HASHTAG: '#Travail',
      },
      {
        THE_ID: '4',
        THE_TRANSLATION_CODE: 'THE_UNEMPLOYMENT_RETIREMENT',
        THE_CONDITION: null,
        THE_ORDER: '3',
        THE_INSERT_DATETIME: '0000-00-00 00:00:00',
        THE_UPDATE_DATETIME: '0000-00-00 00:00:00',
        THE_GUID: 'THE_4',
        THE_ICON: 'THE_UNEMPLOYMENT_RETIREMENT.svg',
        THE_LABEL: 'Chomage et retraite',
        THE_HASHTAG: '#Chomage #Retraite',
      },
    ];
    baseApi.themesApi.mockResolvedValueOnce(rawThemes);
    const themes = await getThemes({ sessionId: '0128d', id: '123' });
    expect(themes).toEqual(rawThemes.map((theme) => new Theme(theme)));
  });
});

describe('Themes action', () => {
  it('Should dispatch pending & success', async () => {
    const thunk = getThemesAction();
    const dispatch = jest.fn();
    const rawThemes = [
      {
        THE_ID: '2',
        THE_TRANSLATION_CODE: 'THE_PROFESSIONAL',
        THE_CONDITION: null,
        THE_ORDER: '2',
        THE_INSERT_DATETIME: '0000-00-00 00:00:00',
        THE_UPDATE_DATETIME: '0000-00-00 00:00:00',
        THE_GUID: 'THE_2',
        THE_ICON: 'THE_PROFESSIONAL.svg',
        THE_LABEL: 'Activit\u00e9 professionnelle',
        THE_HASHTAG: '#Travail',
      },
      {
        THE_ID: '4',
        THE_TRANSLATION_CODE: 'THE_UNEMPLOYMENT_RETIREMENT',
        THE_CONDITION: null,
        THE_ORDER: '3',
        THE_INSERT_DATETIME: '0000-00-00 00:00:00',
        THE_UPDATE_DATETIME: '0000-00-00 00:00:00',
        THE_GUID: 'THE_4',
        THE_ICON: 'THE_UNEMPLOYMENT_RETIREMENT.svg',
        THE_LABEL: 'Chomage et retraite',
        THE_HASHTAG: '#Chomage #Retraite',
      },
    ];
    baseApi.themesApi.mockResolvedValueOnce(rawThemes);
    const getState = jest.fn().mockReturnValueOnce({ Auth: { user: {} } });
    await thunk(dispatch, getState, { api: { themes: { getThemes } } });
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, getAllPending());
    expect(dispatch).toHaveBeenNthCalledWith(2, getAllSuccess());
    expect(dispatch).toHaveBeenNthCalledWith(
      3,
      addEntities({ [STATE_KEY]: rawThemes.map((theme) => new Theme(theme)) }),
    );
  });

  it('Should dispatch pending & failure', async () => {
    const thunk = getThemesAction();
    const dispatch = jest.fn();
    const e = new Error('failed');
    baseApi.themesApi.mockRejectedValueOnce(e);
    const getState = jest.fn().mockReturnValueOnce({ Auth: { user: {} } });
    await thunk(dispatch, getState, { api: { themes: { getThemes } } });
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getAllPending());
    expect(dispatch).toHaveBeenNthCalledWith(2, getAllFailure(e));
  });
});
