import { partialAction as action } from '../../index'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Text from '../../../src/components/Text'
import LoginScreen from '../../../src/screens/LoginScreen/Login'
import CenterView from '../CenterView'
import Login from '../../../src/screens/LoginScreen/Login'

storiesOf('LoginScreen', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('normal', () => <LoginScreen />)
  .add('error', () => (
    <LoginScreen errors={{ username: true, password: true }} />
  ))
