import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import { Layout } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, login } from '../../redux/reducers/AuthSlice'
import PublicEntry from '../PublicEntry'

const AppEntry: React.FC = () => {
  const dispatch = useDispatch()

  const onPress = () => {
    dispatch(login({ email: 'test@higherrewards.com', password: '12345678' }))
  }
  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  return (
    <Layout>
      <PublicEntry />
    </Layout>
  )
}

export default AppEntry
