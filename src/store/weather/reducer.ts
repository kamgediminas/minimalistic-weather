interface Action {
    type: string
    payload: any
}

const initialState = {
	test: 1
};

const reducer = (state = initialState, action:Action) => {

};