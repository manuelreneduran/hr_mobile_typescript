import React from 'react'
import { Button as StyledButton } from './style'

export interface Props {
  onPress: () => void
  height: string
  width: string
  color?: string
}

const Button: React.FC<Props> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
