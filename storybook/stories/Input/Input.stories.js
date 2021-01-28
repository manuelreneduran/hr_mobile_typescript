import { storiesOf } from '@storybook/react-native'
import { partialAction as action } from '../../actions'
import React from 'react'
import Input from '../../../src/components/Input'
import CenterView from '../CenterView'

storiesOf('Input', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('no error', () => (
    <Input
      onChangeText={action('Input-press')}
      placeholder='Username'
      error={false}
    />
  ))
  .add('error', () => (
    <Input
      onChangeText={action('Input-press')}
      placeholder='Username'
      error={true}
      errorMessage={'Please enter an email address'}
    />
  ))
