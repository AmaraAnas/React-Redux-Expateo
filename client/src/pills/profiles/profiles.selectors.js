import { createSelector } from 'reselect';

import { schemaSelectorCreator } from '../schema/schema.selectors';

export const STATE_KEY = 'profiles';
export const profilesSelector = schemaSelectorCreator(STATE_KEY, []);
export const mainProfileSelector = createSelector(
  profilesSelector,
  (profile) => profile.find((profile) => profile.isMain),
);
