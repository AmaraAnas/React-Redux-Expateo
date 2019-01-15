import Task from '../../models/task.model';
import { flatten } from '../../utils';

import { tasksApi } from '../api/base.api';

/**
 * Example of working request
 * @example
 *  getTasks({
 *    sessionId: '8B1A7A0DE8549EE8A28E195573A2FD91',
 *    id: '9058',
 *  });
 */

// response from the api are themes. themes contain subtheme. subtheme contain yearmonth. yearmonth contain taskaction
// We end up with themes[].user_subtheme[].user_yearmonth[].user_taskaction[] chain
const subThemesSelector = (rawTheme) => rawTheme.user_subtheme;
const yearMonthSelector = (subTheme) => subTheme.user_yearmonth;
const tasksSelector = (yearMonth) => yearMonth.user_taskaction;

/**
 * get list of tasks for the given user
 * @param {User} - the user where to retrieve sessionId and id field
 * @returns {Array<Task>} - return list of Task
 */
export async function getTasks({ sessionId: gSesGuid, id: gUsrId }) {
  const res = await tasksApi({
    gSesGuid,
    gUsrId,
    gAdmUsrId: null,
    gAdmSesGuid: null,
  });
  const tasks = res.map((rawTheme) =>
    subThemesSelector(rawTheme).map((subTheme) =>
      yearMonthSelector(subTheme).map((yearMonth) =>
        tasksSelector(yearMonth).map(
          (rawTask) => new Task(rawTask, { themeGuid: rawTheme.THE_GUID }), // if need to add soemthing the Task Model, use the second arguments
        ),
      ),
    ),
  );
  return flatten(tasks);
}
