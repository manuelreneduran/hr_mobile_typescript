import 'react-native-gesture-handler'
import React from 'react'
import AppEntry from './entries/AppEntry'
import { Provider } from 'react-redux'
import store from './redux/store'
// export { default } from '../storybook'
import * as Sentry from 'sentry-expo'

Sentry.init({
  dsn: process.env.SENTRY_DNS,
  enableInExpoDevelopment: true,
  debug: true, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
})

// Access any @sentry/react-native exports via:
// Sentry.Native.*

// Access any @sentry/browser exports via:
// Sentry.Browser.*

export default function App() {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
  )
}
