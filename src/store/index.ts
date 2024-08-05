import thunkMiddleware from 'redux-thunk';

// import { createLogger } from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';

import { applyMiddleware, compose, createStore, Store } from 'redux';

import reducer from './reducer';

export function initializeStore(defaultState = {}): Store {
  const middleware = [
    thunkMiddleware,
    // createLogger()
  ];

  const store = createStore(
    reducer,
    defaultState,
    composeWithDevTools
      ? composeWithDevTools(applyMiddleware(...middleware))
      : compose(applyMiddleware(...middleware)),
  );

  return store;
}

export type IAppStore = ReturnType<typeof initializeStore>;
export const getStore = initializeStore;
