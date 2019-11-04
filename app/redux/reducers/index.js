const saveNavigationToStore = (state = {}, action) => {

    switch (action.type) {
        case 'SAVE_NAVIGATION_STATE':
            return action.navigation
        default:
            return state
    }
}

export default saveNavigationToStore
