export default (state={},action) => {
    switch(action.type){
        case 'ADD_MAP_ASYNC':
            console.log(action.payload,'s')
            return {...state,url:action.payload}
    }
    return state
}