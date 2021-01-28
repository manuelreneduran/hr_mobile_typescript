import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import { Layout } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, login } from '../../redux/reducers/AuthSlice'
import PublicEntry from '../PublicEntry'
import { AppLoading } from 'expo'
import useBootstrap from '../../hooks/useBootstrap'
import { authSelector as authState } from '../../redux/reducers/AuthSlice'

const AppEntry: React.FC = () => {
  const dispatch = useDispatch()
  const { _cacheResourcesAsync, isReady, setIsReady } = useBootstrap()
  // console.log('here', authState)

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
