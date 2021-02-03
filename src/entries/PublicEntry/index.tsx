import React from 'react'
import Text from '../../components/Text'
import LoginScreen from '../../screens/LoginScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { PublicStackParamList } from '../types'

const Stack = createStackNavigator<PublicStackParamList>()

const PublicEntry: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default PublicEntry
