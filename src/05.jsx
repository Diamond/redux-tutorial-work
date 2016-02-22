import { createStore, combineReducers } from 'redux';

const userReducer = (state={}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const itemsReducer = (state={}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  user: userReducer, items: itemsReducer
});

const store = createStore(mainReducer);

export default function app() {
  console.log(store.getState());
};
