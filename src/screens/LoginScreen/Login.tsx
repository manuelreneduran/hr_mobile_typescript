import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Text from '../../components/Text'
import {
  Layout,
  Row,
  Header,
  Body,
  MyAwareScrollView,
  StyledImage,
} from './styles'
import { FieldError, DeepMap } from 'react-hook-form'
import { LoginFormData } from '../types'

interface Props {
  errors: DeepMap<LoginFormData, FieldError>
  status: string
  submitHandler: ({ email, password }) => void
  handleSubmit: any
  setValue: any
}

const Login: React.FC<Props> = ({
  errors,
  status,
  submitHandler,
  handleSubmit,
  setValue,
}) => {
  return (
    <MyAwareScrollView
      resetScrollToCoords={{ x: 0, y: 100 }}
      scrollEnabled={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      keyboardShouldPersistTaps='never'
    >
      <Header>
        <StyledImage
          source={require('../../../assets/image/HRLogoWhiteOnBlue.png')}
        />
      </Header>
      <Body>
        <Row>
          <Input
            placeholder='Email'
            onChangeText={(text) => {
              setValue('email', text)
            }}
            error={!!errors.email}
            errorMessage='Missing email address'
          />
        </Row>
        <Row>
          <Input
            placeholder='Password'
            onChangeText={(text) => {
              setValue('password', text)
            }}
            secureTextEntry={true}
            error={!!errors.password}
            errorMessage='Password must be greater than 8 characters'
          />
        </Row>
        <Row>
          <Button
            loading={status === 'loading'}
            height='small'
            width='large'
            onPress={handleSubmit(submitHandler)}
          >
            <Text color='white' size='large'>
              Login
            </Text>
          </Button>
        </Row>
      </Body>
    </MyAwareScrollView>
  )
}

export default Login
