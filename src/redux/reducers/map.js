export default (state={},action) => {
    switch(action.payload){
        case 'ADD_MAP_ASYNC':
            return {...state,map:action.payload}
    }
    return state
}