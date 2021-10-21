
const initialState = {
    mode: 'dark',
}

const reducer = (state = initialState, action:any) => {
    const { payload } = action
    switch (action.type) {
    case 'CHANGE_MODE':
        const currentMode = state.mode
        return {
          ...state,
          mode: currentMode === 'dark' ? 'light' : 'dark',
        }
    default: {
        return { ...state, mode: 'light' }
    }
  }
}

export default reducer