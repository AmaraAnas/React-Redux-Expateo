import { schemaSelectorCreator } from '../schema/schema.selectors';

export const STATE_KEY = 'themes';
export const themesSelector = schemaSelectorCreator(STATE_KEY, []);
