import { ACTION_TYPES as InscriptionActionType } from './inscription.actions';

const initialState = {
  user: {},
  error: {
    message: '',
  },
};

export default function InscriptionReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case InscriptionActionType.INSCRIPTION_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: {
          message: '',
        },
      };
    case InscriptionActionType.INSCRIPTION_FAILURE:
      return {
        ...state,
        user: {},
        error: action.error,
      };
    default:
      return state;
  }
}
