import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './screens/Home'
import DeepLinkScreen from './screens/DeepLink'

const MainApp = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home'
      },
      path: 'Home'
    },
    DeepLink: {
      screen: DeepLinkScreen,
      navigationOptions: {
        headerTitle: 'DeepLink'
      },
      path: 'rndeeplink'
    }
  })
  
  const AppContainer = createAppContainer(MainApp)

  export default () => {
  const prefix = 'mytsproject://'
  return <AppContainer uriPrefix={prefix} />
}