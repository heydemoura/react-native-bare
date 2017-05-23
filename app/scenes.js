import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'

// Scene component imports
import App from './containers/App'
import Start from './containers/Start'

const TabIcon = ({ selected, title}) => {
  return (
    <Text style={{color: selected ? 'blue' : 'black' }}>{title}</Text>
  )
}

const scenes = [{
  key: 'app',
  title: 'Main Screen',
  component: App,
  initial: true,
  icon: TabIcon
}, {
  key: 'start',
  title: 'Start Screen',
  component: Start,
  icon: TabIcon
}]

function scenesToJSX (scenes) {
  return scenes.map(scene => {
    let children = scene.children && scene.children.length ?
      scene.childre.map(childScene => (<Scene {...childScene}/>)) :
      []

    if (children.length) {
      return (
        <Scene key={scene.key} title={scene.title} component={scene.component} initial={scene.initial}>
          { children }
        </Scene>
      )
    } else {
      return <Scene key={scene.key} title={scene.title} component={scene.component} initial={scene.initial}/>
    }
  })
}

export default (scenesToJSX(scenes))
