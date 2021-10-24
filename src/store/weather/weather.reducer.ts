interface Action {
  type: string;
  payload: any;
}

const initialState = {
  isLoading: false,
  error: false,
  data: {},
};

const reducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'WEATHER_FETCH_REQUESTED':
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case 'WEATHER_FETCH_SUCCEEDED':
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case 'WEATHER_FETCH_FAILED':
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
