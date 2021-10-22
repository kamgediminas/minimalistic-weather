interface Action {
	type: string
	payload: string
}

const initialState = {
	mode: 'dark',
};

const reducer = (state = initialState, action:Action) => {
	const currentMode = state.mode;
	switch (action.type) {
	case 'CHANGE_MODE':
		return {
			...state,
			mode: currentMode === 'dark' ? 'light' : 'dark',
		};
	default: {
		return { ...state, mode: 'light' };
	}
	}
};

export default reducer;