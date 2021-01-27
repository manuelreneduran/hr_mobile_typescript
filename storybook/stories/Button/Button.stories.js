import { partialAction as action } from '../../index'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Text from '../../../src/components/Text'
import Button from '../../../src/components/Button'
import CenterView from '../CenterView'

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('medium', () => (
    <Button height='small' width='medium' onPress={action('button-press')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
  .add('large', () => (
    <Button height='small' width='large' onPress={action('large-button-press')}>
      <Text color='white'>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ))
