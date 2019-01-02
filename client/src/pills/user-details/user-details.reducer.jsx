import { ACTION_TYPES as getUserInfoActionType } from './user-details.actions';

const initialState = {
  userInfo: {},
  error: {
    message: '',
  },
};

export default function UserDetailsReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case getUserInfoActionType.GET_USERINFO_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        error: {
          message: '',
        },
      };
    case getUserInfoActionType.GET_USERINFO_FAILURE:
      return {
        ...state,
        userData: {},
        error: action.error,
      };
    default:
      return state;
  }
}
