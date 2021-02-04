import React, { useEffect } from 'react'
import Login from './Login'
import { Layout } from './styles'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/reducers/AuthSlice'
import { LoginScreenProps, LoginFormData } from '../types'
import { useForm } from 'react-hook-form'

const LoginContainer: React.FC<LoginScreenProps> = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors, setValue } = useForm<LoginFormData>()
  const childProps = { errors, handleSubmit, setValue }

  useEffect(() => {
    register('email')
    register('password')
  }, [register])

  const submitHandler = ({ email, password }) => {
    dispatch(login({ email, password }))
  }

  return (
    <Layout>
      <Login status='idle' submitHandler={submitHandler} {...childProps} />
    </Layout>
  )
}

export default LoginContainer
