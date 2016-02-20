import { createStore } from 'redux';

const reducer0 = function (state, action) {
  console.log('reducer0 was called with state', state, 'and action', action);
};
const store0 = createStore(reducer0);

const reducer1 = function(state, action) {
  console.log("reducer1 was called with state", state, "and action", action);
  if (typeof state === 'undefined') {
    return {};
  }
  return state;
};
const store1 = createStore(reducer1);

const reducer2 = (state={}, action) => {
  console.log('reducer2 was called with state', state, 'and action', action);
  return state;
}
const store2 = createStore(reducer2);

const reducer3 = (state={}, action) => {
  console.log('reducer3 was called with state', state, 'and action', action);
  switch (action.type) {
    case 'SAY_SOMETHING':
      return Object.assign({}, state, { message: action.value });
    default:
      return state;
  }
};
const store3 = createStore(reducer3);

export default function app() {
  console.log('store0 state after initialization', store0.getState());
  console.log('store1 state after initialization', store1.getState());
  console.log('store2 state after initialization', store2.getState());
  console.log('store3 state after initialization', store3.getState());
};
