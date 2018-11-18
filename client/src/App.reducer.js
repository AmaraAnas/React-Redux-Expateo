import { ACTION_TYPES as AppActionTypes } from './App.actions';

const initialState = {
  title: 'Expateo',
  isInitDone: false,
};

export default function AppReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case AppActionTypes.INIT_DONE:
      return { ...state, isInitDone: true };
    case AppActionTypes.SET_TITLE:
      return { ...state, title: action.payload };
    default:
      return state;
  }
}
