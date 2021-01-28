import React from 'react'
import Text from '../../components/Text'
import { Layout } from './styles'
import LoginScreen from '../LoginScreen'
const PublicEntry: React.FC = () => {
  return (
    <Layout>
      <LoginScreen />
    </Layout>
  )
}

export default PublicEntry
