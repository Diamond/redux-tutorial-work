import { createStore, combineReducers } from 'redux';

const userReducer = (state={}, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return Object.assign({}, state, {name: action.name});
    default:
      return state;
  }
};

const itemsReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.concat(action.item);
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  user: userReducer, items: itemsReducer
});

const store = createStore(mainReducer);

const setName = (name) => {
  return { type: 'SET_NAME', name };
};

const addItem = (item) => {
  return { type: 'ADD_ITEM', item }
}

export default function app() {
  console.log("---- INITIAL STATE ----");
  console.log(store.getState());
  console.log("---- STATE 0 ----");
  store.dispatch(setName("Brandon"));
  console.log(store.getState());
  console.log("---- STATE 1 ----");
  store.dispatch(addItem("food"));
  console.log(store.getState());
};
