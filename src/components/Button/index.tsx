import React from 'react'
import { Layout } from './style'

export interface Props {
  onPress: () => void
  height: string
  width: string
  color?: string
}

const Button: React.FC<Props> = (props) => {
  return <Layout {...props}>{props.children}</Layout>
}

export default Button
