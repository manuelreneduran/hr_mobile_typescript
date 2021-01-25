import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppEntry from './containers/AppEntry'
import { Layout } from './styles'
import { Provider } from 'react-redux'
import store from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <Layout>
        <NavigationContainer>
          <AppEntry />
        </NavigationContainer>
      </Layout>
    </Provider>
  )
}
