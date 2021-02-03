import React from 'react'
import Login from './Login'
import { Layout } from './styles'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/reducers/AuthSlice'
import { LoginScreenProps } from '../types'

const LoginContainer: React.FC<LoginScreenProps> = ({ route, navigation }) => {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(login({ email: 'blah@blah.com', password: 'urururu' }))
    console.log('submitted')
  }

  return (
    <Layout>
      <Login status='idle' handleSubmit={handleSubmit} />
    </Layout>
  )
}

export default LoginContainer
