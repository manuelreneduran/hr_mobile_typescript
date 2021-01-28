import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { Layout } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, login } from '../../redux/reducers/AuthSlice'
import PublicEntry from '../PublicEntry'
import { AppLoading } from 'expo'
import useBootstrap from '../../hooks/useBootstrap'
import { RootState } from '../../redux/reducers'

const AppEntry: React.FC = () => {
  const dispatch = useDispatch()

  const { _cacheResourcesAsync, isReady, setIsReady } = useBootstrap()

  const auth = useSelector((state: RootState) => state.auth)

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
