// if you use expo remove this line
import { AppRegistry } from 'react-native'
import { action } from '@storybook/addon-actions'
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'

import './rn-addons'

// this eliminates the syntheticEvent errors that occur with
// the traditional 'action' function
export const partialAction = (actionName) => {
  const beacon = action(actionName)
  return (eventObj, ...args) => {
    beacon({ ...eventObj, view: undefined }, ...args)
  }
}
// enables knobs for all stories
addDecorator(withKnobs)

// import stories
configure(() => {
  require('./stories')
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage:
    require('@react-native-community/async-storage').default || null,
})

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot)

export default StorybookUIRoot
