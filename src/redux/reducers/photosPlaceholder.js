export default (state = {}, action) => {
    switch (action.type) {
        case 'GET_PHOTOS_ASYNC':
            return { ...state, data: action.payload }
    }
    return state
}