import { createSelector } from 'reselect';

import { tasksSelector } from '../tasks/tasks.selectors';
import { schemaSelectorCreator } from '../schema/schema.selectors';

export const STATE_KEY = 'themes';
export const themesSelector = schemaSelectorCreator(STATE_KEY, []);

const taskThemeGuidsSelector = createSelector(
  tasksSelector,
  (tasks) => Array.from(new Set(tasks.map((task) => task.themeGuid))),
);
/**
 * Select all themes that has a task
 */
export const themesByTasksSelector = createSelector(
  [taskThemeGuidsSelector, themesSelector],
  (taskThemeGuids, themes) =>
    themes.filter((theme) =>
      taskThemeGuids.some((taskThemeGuid) => theme.guid === taskThemeGuid),
    ),
);
