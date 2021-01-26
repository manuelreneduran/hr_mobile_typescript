import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Text from '../../../src/components/Text'
import Button from '../../../src/components/Button'
import CenterView from '../CenterView'

// this eliminates the syntheticEvent errors that occur with
// the traditional 'action' function
export const partialAction = (actionName) => {
  const beacon = action(actionName)
  return (eventObj, ...args) => {
    beacon({ ...eventObj, view: undefined }, ...args)
  }
}
storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('medium', () => (
    <Button
      height='small'
      width='medium'
      onPress={partialAction('button-press')}
    >
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
  .add('large', () => (
    <Button
      height='small'
      width='large'
      onPress={partialAction('large-button-press')}
    >
      <Text color='white'>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
