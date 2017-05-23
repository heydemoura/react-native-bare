/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { ActionConst } from 'react-native-router-flux'

import globalReducer from './containers/App/reducers'

/*
 * Aplication wide container's reducers
 *
 */


/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({})

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case ActionConst.FOCUS:
      return state.merge({
        scene: action.scene,
      })
    default:
      return state
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer() {
  return combineReducers({
    route: routeReducer,
    global: globalReducer
  })
}
