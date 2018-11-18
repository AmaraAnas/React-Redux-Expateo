import { ACTION_TYPES as ModalActionTypes } from './modal.actions';

const initialState = {
  isOpen: false,
  header: '',
  content: '',
  actions: '',
};

export default function ModalReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ModalActionTypes.SHOW:
      return {
        ...state,
        isOpen: true,
        ...action.payload,
      };
    case ModalActionTypes.HIDE:
      return {
        ...state,
        isOpen: false,
      };
    case ModalActionTypes.FLUSH:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}
