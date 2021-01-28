import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppEntry from './screens/AppEntry'
import { Layout } from './styles'
import { Provider } from 'react-redux'
import store from './redux/store'
// export { default } from '../storybook'

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
