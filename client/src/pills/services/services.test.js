import Service from '../../models/service.model';

import { schemaSelectorCreator } from '../schema/schema.selectors';
import { addEntities } from '../schema/schema.actions';
import * as baseApi from '../api/base.api';

import {
  STATE_KEY,
  servicesSelector,
  servicesWithTaskSelector,
} from './services.selectors';
import { getServices } from './services.api';
import {
  getServices as getServicesAction,
  getAllPending,
  getAllSuccess,
  getAllFailure,
} from './services.actions';
import rawServices from './services.data';

jest.mock('../api/base.api');

describe('Services selector', () => {
  it('Should created selector use the good STATE_KEY', () => {
    expect(servicesSelector.toString()).toEqual(
      schemaSelectorCreator(STATE_KEY, []).toString(),
    );
  });

  it('Should created selector return the default value', () => {
    let state = {
      Schema: {
        entities: {},
      },
    };
    expect(servicesSelector(state)).toEqual([]);
  });

  it('Should created selector return the `services` stored entity', () => {
    let state = {
      Schema: {
        entities: {
          services: [{ id: 1, name: 'chomage' }, { id: 2, name: 'assurance' }],
        },
      },
    };
    expect(servicesSelector(state)).toEqual([
      { id: 1, name: 'chomage' },
      { id: 2, name: 'assurance' },
    ]);
  });

  it('Should the selector return services filered by hasTasks', () => {
    let state = {
      Schema: {
        entities: {
          services: [
            { hasTasks: false, id: 1 },
            { hasTasks: true, id: 2 },
            { hasTasks: false, id: 3 },
            { hasTasks: true, id: 5 },
          ],
        },
      },
    };
    expect(servicesWithTaskSelector(state)).toEqual([
      { hasTasks: true, id: 2 },
      { hasTasks: true, id: 5 },
    ]);
  });
});

describe('Services API', () => {
  it('Should return an array of Service', async () => {
    baseApi.servicesApi.mockResolvedValueOnce(rawServices);
    const services = await getServices({ sessionId: '0128d', id: '123' });
    expect(services).toEqual(
      rawServices.map((service) => new Service(service)),
    );
  });
});

describe('Services action', () => {
  it('Should dispatch pending & success', async () => {
    const thunk = getServicesAction();
    const dispatch = jest.fn();
    baseApi.servicesApi.mockResolvedValueOnce(rawServices);
    const getState = jest.fn().mockReturnValueOnce({ Auth: { user: {} } });
    await thunk(dispatch, getState, {
      api: { services: { getServices: getServices } },
    });
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, getAllPending());
    expect(dispatch).toHaveBeenNthCalledWith(2, getAllSuccess());
    expect(dispatch).toHaveBeenNthCalledWith(
      3,
      addEntities({
        [STATE_KEY]: rawServices.map((service) => new Service(service)),
      }),
    );
  });

  it('Should dispatch pending & failure', async () => {
    const thunk = getServicesAction();
    const dispatch = jest.fn();
    const e = new Error('failed');
    baseApi.servicesApi.mockRejectedValueOnce(e);
    const getState = jest.fn().mockReturnValueOnce({ Auth: { user: {} } });
    await thunk(dispatch, getState, {
      api: { services: { getServices } },
    });
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getAllPending());
    expect(dispatch).toHaveBeenNthCalledWith(2, getAllFailure(e));
  });
});
