import React from 'react'
import Text from '../Text'
import { StyledTextInput, Layout } from './style'

export interface Props {
  onChangeText?: any
  error?: boolean
  errorMessage?: string
  placeholder?: string
  secureTextEntry?: boolean
}

const Input: React.FC<Props> = ({
  onChangeText = () => {},
  error = false,
  ...rest
}) => {
  return (
    <Layout>
      <StyledTextInput
        autoCapitalize='none'
        autoCorrect={false}
        error={error}
        onChangeText={onChangeText}
        blurOnSubmit={true}
        clearTextOnFocus={true}
        secureTextEntry={false}
        {...rest}
      />
      {error && <Text color='#EF594C'>{rest.errorMessage}</Text>}
    </Layout>
  )
}

export default Input
