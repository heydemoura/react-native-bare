import React from 'react'

import { connect, Provider } from 'react-redux'
import {
  Header, Body, Container,
  Button, Left, Icon, Title} from 'native-base'

/** Third-party Components **/
import { Actions, Scene, Router } from 'react-native-router-flux'

/** Local Components/Containers **/

/** Scenes **/
import Scenes from './app/scenes'

/** Stores **/
import configureStore from './app/store'

const ReduxRouter = connect()(Router)
const store = configureStore({})

/** Main Component **/
export default class Index extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ReduxRouter>
          <Scene key="root">
            {Scenes}
          </Scene>
        </ReduxRouter>
      </Provider>
    )
  }
}
