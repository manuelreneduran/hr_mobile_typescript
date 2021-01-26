import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { Props } from './index'

export const Layout = styled.TouchableOpacity`
  border-radius: 5;
  background-color: #1dafa1;
  height: ${(props: Props) => getHeight(props.height)};
  width: ${(props: Props) => getWidth(props.width)};
  justify-content: center;
  align-items: center;
`

export const getHeight = (height: string): number => {
  switch (height) {
    case 'small':
      return hp('5%')
    case 'medium':
      return hp('10%')
    case 'large':
      return hp('15%')
    default:
      return hp('5%')
  }
}

export const getWidth = (width: string): number => {
  switch (width) {
    case 'small':
      return wp('20%')
    case 'medium':
      return wp('40%')
    case 'large':
      return wp('70%')
    default:
      return wp('40%')
  }
}
