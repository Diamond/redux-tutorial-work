import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  speaker: function (state={}, action) {
    switch(action.type) {
      case 'SAY':
        return Object.assign({}, state, { message: action.message });
      default:
        return state;
    }
  }
});

const store = createStore(reducer);

const sayActionCreator = (message) => {
  return {
    type: 'SAY',
    message
  };
};

store.dispatch(sayActionCreator('Hi'));
console.log(new Date());
console.log('store state after action SAY', store.getState());

const asyncSayActionCreator0 = (message) => {
  setTimeout(() => {
    return { type: 'SAY', message };
  }, 2000);
};

const asyncSayActionCreator1 = (message) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'SAY',
        message
      });
    }, 2000);
  };
};

store.dispatch(asyncSayActionCreator0("sup"));
store.dispatch(asyncSayActionCreator1("dog"));
