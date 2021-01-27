import React from 'react'
import Text from '../Text'
import { StyledTextInput, Layout } from './style'

export interface Props {
  onChangeText?: () => {}
  error?: boolean
  errorMessage?: string
  placeholder?: string
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
        autocorrect={false}
        error={error}
        onChangeText={onChangeText}
        {...rest}
      />
      {error && <Text color='#EF594C'>{rest.errorMessage}</Text>}
    </Layout>
  )
}

export default Input
