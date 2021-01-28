import React from 'react'
import Text from '../Text'
import { Button as StyledButton } from './style'

export interface Props {
  onPress: () => void
  height: string
  width: string
  color?: string
  loading: boolean
}

const Button: React.FC<Props> = (props) => {
  const childrenToRender = props.loading ? <Text>Loading</Text> : props.children
  return <StyledButton {...props}>{childrenToRender}</StyledButton>
}

export default Button
