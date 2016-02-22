import { createStore, combineReducers, applyMiddleware } from 'redux';

const thunkMiddleware = ({dispatch, getState}) =>
  next =>
    action => {
      return typeof action === 'function' ?
        action(dispatch, getState) :
        next(action);
    };

const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);

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

const store = finalCreateStore(reducer);

const sayActionCreator = (message) => {
  return {
    type: 'SAY',
    message
  };
};

const asyncSayActionCreator = (message) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'SAY',
        message
      });
      console.log(new Date());
      console.log('store state after action SAY', store.getState());
    }, 2000);
  };
};

export default function app() {
  store.dispatch(sayActionCreator('Hi'));
  console.log(new Date());
  console.log('store state after action SAY', store.getState());
  store.dispatch(asyncSayActionCreator("dog"));
};
