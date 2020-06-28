export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_MAP_ASYNC':
      return {...state, url: action.payload};
  }
  return state;
};
