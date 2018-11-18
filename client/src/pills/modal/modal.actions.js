import { createAction } from 'redux-actions';

import { addPrefixToActionTypes } from '../../redux-utils/utils';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    SHOW: 'SHOW',
    HIDE: 'HIDE',
    FLUSH: 'FLUSH',
  },
  'modal',
);

export const show = createAction(ACTION_TYPES.SHOW);
export const hide = createAction(ACTION_TYPES.HIDE);
export const flush = createAction(ACTION_TYPES.FLUSH);
