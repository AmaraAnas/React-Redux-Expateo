import { schemaSelectorCreator } from '../schema/schema.selectors';

export const STATE_KEY = 'tasks';
export const tasksSelector = schemaSelectorCreator(STATE_KEY, []);
