export default (state=[],action) => {
    switch(action.type) {
        case 'ADD_PHOTO_ASYNC':
         
        return [...state,{cameraInfo:action.payload}]
      
    }
    return state
}
