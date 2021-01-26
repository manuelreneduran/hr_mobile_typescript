import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { Layout } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from '../../redux/reducers/AuthSlice'

const AppEntry: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [])
  return (
    <Layout>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </Layout>
  )
}

export default AppEntry
