const initialState = {
  title: 'Hello',
};

export default function reduce(state = initialState, action = {}) {
  const { type, payload } = action;
  switch (type) {
    case '@APP/INIT':
      return { ...state, title: payload.title };
    default:
      return state;
  }
}
