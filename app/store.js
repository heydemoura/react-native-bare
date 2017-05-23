/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'
import { routerMiddleware } from 'react-native-router-flux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. promiseMiddleware: Handle promises
  const middlewares = [
    sagaMiddleware
  ]

  /* eslint-disable no-underscore-dangle */
  const middleware = []
  const store = compose(
    applyMiddleware(...middleware)
  )(createStore)(createReducer())

  // Extensions
  store.runSaga = sagaMiddleware.run
  store.asyncReducers = {} // Async reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  /*
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        import('./reducers').then((reducerModule) => {
          const createReducers = reducerModule.default
          const nextReducers = createReducers(store.asyncReducers)

          store.replaceReducer(nextReducers)
        })
      })
    }
  */

  return store
}
