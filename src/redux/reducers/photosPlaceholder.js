export default (state = {}, action) => {
    console.log(state, 'sta')
    switch (action.type) {
        case 'GET_PHOTOS_ASYNC':
            return { ...state, data: action.payload }
    }
    return state
}