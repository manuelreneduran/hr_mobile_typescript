import { partialAction as action } from '../../actions'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Text from '../../../src/components/Text'
import LoginScreen from '../../../src/screens/LoginScreen/Login'
import CenterView from '../CenterView'
import Login from '../../../src/screens/LoginScreen/Login'

export const defaultProps = {
  errors: { username: false, password: false },
  status: 'idle',
}
storiesOf('LoginScreen', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('normal', () => <LoginScreen {...defaultProps} />)
  .add('loading', () => <LoginScreen {...defaultProps} status='loading' />)
  .add('form error', () => (
    <LoginScreen
      {...defaultProps}
      errors={{ username: true, password: true }}
    />
  ))
