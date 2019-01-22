import { createSelector } from 'reselect';

import { schemaSelectorCreator } from '../schema/schema.selectors';

export const STATE_KEY = 'mobilities';
export const mobilitiesSelector = schemaSelectorCreator(STATE_KEY, []);
export const currentMobilitySelector = createSelector(
  mobilitiesSelector,
  (mobilities) => mobilities.find((mobility) => mobility.isCurrent),
);
