import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import styles from './style'

interface Props {
  onPress: () => void
}

const Button: React.FC<Props> = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

export default Button
