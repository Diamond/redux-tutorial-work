import { createStore } from 'redux';

const actionCreator = () => {
  return { type: 'AN_ACTION' };
};

const store = createStore(() => {});

const reducer = function(...args) {
  console.log('Reducer was called with args', args);
};

export default function app() {
  const store_1 = createStore(reducer);
};
