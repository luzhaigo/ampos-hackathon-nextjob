import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
  const middlewares = [promiseMiddleware, thunk];

  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          trace: true,
          traceLimit: 25,
        })
      : compose;
  const store = createStore(reducers, initialState,  composeEnhancers(...enhancers),);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};