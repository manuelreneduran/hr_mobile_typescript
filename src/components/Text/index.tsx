import React from 'react'
import { Layout } from './style'

export interface Props {
  color: string
}

const Text: React.FC<Props> = ({ color = 'black', ...rest }) => {
  return (
    <Layout color={color} {...rest}>
      {rest.children}
    </Layout>
  )
}

export default Text
