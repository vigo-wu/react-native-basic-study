/*
* 用于保存navigation
* */
export function saveNavigation (navigation) {
    return {
        type: 'SAVE_NAVIGATION_STATE',
        navigation
    }
}
