import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Props } from './index'

export const Layout = styled.Text`
  color: ${(props: Props): string | undefined => props.color};
  font-size: ${(props: Props) => getTextSize(props.size)};
`
const getTextSize = (size: string | undefined) => {
  let sizeWithPx = ''
  switch (size) {
    case 'small':
      sizeWithPx = '12px'
      break
    case 'medium':
      sizeWithPx = '16px'
      break
    case 'large':
      sizeWithPx = '20px'
      break
    default:
      return undefined
  }
  return sizeWithPx
}
