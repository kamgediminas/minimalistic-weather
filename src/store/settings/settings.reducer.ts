interface Action {
  type: string;
  payload: {
    theme: string;
    language: string;
    unit: string;
  };
}

const initialState = {
  theme: 'dark',
  language: 'en',
  unit: 'c',
};

const reducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: payload.theme,
      };
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: payload.language,
      };
    case 'CHANGE_UNIT':
      return {
        ...state,
        unit: payload.unit,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
