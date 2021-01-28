import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Text from '../../components/Text'
import { Layout, Row, Header, Body } from './styles'

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
    <Layout>
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
    </Layout>
  )
}

export default Login
