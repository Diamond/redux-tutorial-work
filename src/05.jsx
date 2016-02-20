const reducer0 = (state={}, action) => {
  console.log('reducer0 was called with state', state, 'and action', action);
  switch (Action.type) {
    case 'SAY_SOMETHING':
      return Object.assign({}, state, { message: action.value });
    default:
      return state;
  }
};
