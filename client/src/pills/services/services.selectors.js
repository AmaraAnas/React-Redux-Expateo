import { schemaSelectorCreator } from '../schema/schema.selectors';
import { createSelector } from 'reselect';

export const STATE_KEY = 'services';
export const servicesSelector = schemaSelectorCreator(STATE_KEY, []);

export const servicesWithTaskSelector = createSelector(
  servicesSelector,
  (services) => services.filter((service) => service.hasTasks),
);
