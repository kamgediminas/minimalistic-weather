interface Action {
	type: string
	payload: string
}

const initialState = {
	theme: 'dark',
};

const reducer = (state = initialState, action:Action) => {
	const currentTheme = state.theme;
	switch (action.type) {
	case 'CHANGE_THEME':
		return {
			...state,
			theme: currentTheme === 'dark' ? 'light' : 'dark',
		};
	default: {
		return state;
	}
	}
};

export default reducer;