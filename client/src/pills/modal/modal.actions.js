import { createAction } from 'redux-actions';

import { addPrefixToActionTypes } from '../../redux-utils/utils';

import { BigLoaderModal, ErrorModal } from './modal.loaders';

export const ACTION_TYPES = addPrefixToActionTypes(
  {
    SHOW: 'SHOW',
    HIDE: 'HIDE', // hide modal but preserve it content
    DESTROY: 'DESTROY', // HIDE + reset of content
  },
  'modal',
);

export const show = createAction(ACTION_TYPES.SHOW);
export const hide = createAction(ACTION_TYPES.HIDE);
export const destroy = createAction(ACTION_TYPES.DESTROY);

export const showBigLoaderModal = ({ content, ...rest }) =>
  show(
    BigLoaderModal({
      content,
      ...rest,
    }),
  );

export const showErrorModal = ({ title, message, ...rest }) =>
  show(
    ErrorModal({
      title,
      message,
      ...rest,
    }),
  );
