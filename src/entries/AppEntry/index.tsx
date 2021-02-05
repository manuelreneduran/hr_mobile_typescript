import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, login } from '../../redux/reducers/AuthSlice'
import PublicEntry from '../PublicEntry'
import CoreEntry from '../CoreEntry'
import Loader from '../../components/Loader'
import AppLoading from 'expo-app-loading'
import useBootstrap from '../../hooks/useBootstrap'
import { RootState } from '../../redux/reducers'
import { NavigationContainer } from '@react-navigation/native'

const AppEntry: React.FC = () => {
  const dispatch = useDispatch()

  const { _cacheResourcesAsync, isReady, setIsReady } = useBootstrap()

  const { bootstrap, user, isAuth, login } = useSelector(
    (state: RootState) => state.auth
  )
  const { status: loginStatus } = login
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

  if (bootstrapStatus === 'loading' || loginStatus === 'loading') {
    return <Loader color='blue' />
  }

  const userExists = !!userData

  return (
    <NavigationContainer>
      {userExists ? <CoreEntry /> : <PublicEntry />}
    </NavigationContainer>
  )
}

export default AppEntry
