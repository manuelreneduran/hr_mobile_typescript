import 'react-native-gesture-handler'
import React from 'react'
import AppEntry from './entries/AppEntry'
import { Provider } from 'react-redux'
import store from './redux/store'
// export { default } from '../storybook'

export default function App() {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
  )
}
