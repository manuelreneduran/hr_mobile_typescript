import React from 'react'
import { Layout } from './style'

export interface Props {
  color?: string
  size?: string
}

const Text: React.FC<Props> = ({
  color = 'black',
  size = 'medium',
  ...rest
}) => {
  return (
    <Layout color={color} size={size} {...rest}>
      {rest.children}
    </Layout>
  )
}

export default Text
