export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_ADDRESS_ASYNC':
      return [...state, {adressInfo: action.payload}];
  }
  return state;
};
