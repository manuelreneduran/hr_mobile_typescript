import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { Layout } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, login } from '../../redux/reducers/AuthSlice'
import PublicEntry from '../PublicEntry'
import Loader from '../../components/Loader'
import AppLoading from 'expo-app-loading'
import useBootstrap from '../../hooks/useBootstrap'
import { RootState } from '../../redux/reducers'

const AppEntry: React.FC = () => {
  const dispatch = useDispatch()

  const { _cacheResourcesAsync, isReady, setIsReady } = useBootstrap()

  const { bootstrap, user } = useSelector((state: RootState) => state.auth)
  const { status: bootstrapStatus } = bootstrap
  const { data: userData } = user

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  if (!isReady) {
    return (
      <AppLoading
        startAsync={() => _cacheResourcesAsync()}
        onFinish={() => setIsReady(true)}
        onError={(err) => console.warn('err', err)}
      />
    )
  }
  if (bootstrapStatus !== 'idle' && bootstrapStatus !== 'fulfilled') {
    return (
      <Layout>
        <Loader color='white' />
      </Layout>
    )
  }

  return (
    <Layout>
      <PublicEntry />
    </Layout>
  )
}

export default AppEntry
