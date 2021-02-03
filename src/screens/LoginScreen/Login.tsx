import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Text from '../../components/Text'
import { Layout, Row, Header, Body, MyAwareScrollView } from './styles'

interface Props {
  errors?: {
    username: boolean
    password: boolean
  }
  status: string
  handleSubmit: () => void
}
const Login: React.FC<Props> = ({ errors, status, handleSubmit }) => {
  return (
    <MyAwareScrollView
      // resetScrollToCoords={{ x: 0, y: 100 }}
      // scrollEnabled={false}
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'orange',
      }}
      // keyboardShouldPersistTaps='always'
    >
      <Header>
        <Text>placeholder</Text>
      </Header>
      <Body>
        <Row>
          <Input
            placeholder='Username'
            error={errors?.username || false}
            errorMessage='Missing username'
          />
        </Row>
        <Row>
          <Input
            placeholder='Password'
            error={errors?.password || false}
            errorMessage='Password must be greater than 8 characters'
          />
        </Row>
        <Row>
          <Button
            loading={status === 'loading'}
            height='small'
            width='large'
            onPress={handleSubmit}
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
