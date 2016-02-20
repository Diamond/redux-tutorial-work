import { createStore } from 'redux';

const actionCreator = () => {
  return { type: 'AN_ACTION' };
};

var store = createStore(() => {});

export default function app() {
  console.log(store);
};
