import { schemaSelectorCreator } from '../schema/schema.selectors';

export const STATE_KEY = 'services';
export const servicesSelector = schemaSelectorCreator(STATE_KEY, []);
