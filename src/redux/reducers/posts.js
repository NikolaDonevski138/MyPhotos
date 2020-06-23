export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_POST_ASYNC':
      return {...state, value: action.payload};
  }

  return state;
};
