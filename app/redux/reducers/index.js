const globalState = (state = {}, action) => {
    switch (action.type) {
        case 'SAVE_NAVIGATION_STATE':
            return Object.assign({}, state, {navigation: action.navigation})
        default:
            return state
    }
}

export default globalState
