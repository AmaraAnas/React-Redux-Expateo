import Mobility from '../../models/mobility.model';

import { schemaSelectorCreator } from '../schema/schema.selectors';
import * as baseApi from '../api/base.api';
import { addEntities } from '../schema/schema.actions';

import { STATE_KEY, mobilitySelector } from './mobility.selectors';

import { getMobility } from './mobility.api';

import {
  getMobility as getMobilityAction,
  getAllPending,
  getAllSuccess,
  getAllFailure,
} from './mobility.actions';

jest.mock('../api/base.api');

describe('Mobility selector', () => {
  it('Should created selector use the good STATE_KEY', () => {
    expect(mobilitySelector.toString()).toEqual(
      schemaSelectorCreator(STATE_KEY, []).toString(),
    );
  });

  it('Should created selector return the default value', () => {
    let state = {
      Schema: {
        entities: {},
      },
    };
    expect(mobilitySelector(state)).toEqual([]);
  });
});
