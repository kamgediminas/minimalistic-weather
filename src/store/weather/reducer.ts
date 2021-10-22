interface Action {
    type: string
    payload: any
}

const initialState = {
	test: 1
};

const reducer = (state = initialState, action:Action) => {
	switch (action.type) {
	case 'WEATHER_FETCH_REQUESTED':
		return state;
	default:
		return state;
	}
};