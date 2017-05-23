import React from 'react'

/** Third-party Components **/
import {
  Button,
  Body,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Text,
  Title
} from 'native-base'
import { Actions } from 'react-native-router-flux'
console.log(Actions)

import styles from './styles'

/** Main Component **/
export default class App extends React.Component {
  render () {
    return (
        <Content contentContainerStyle={styles.content}> 
          <Text onPress={Actions.start}>App View</Text>
        </Content>
    )
  }
}
