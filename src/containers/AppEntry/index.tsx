import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'
import { Layout } from './styles'

const AppEntry: React.FC = () => {
  return (
    <Layout>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </Layout>
  )
}

export default AppEntry
