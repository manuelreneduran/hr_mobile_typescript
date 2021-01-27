import styled from 'styled-components/native'
import { wp, hp } from '../../utils'
import { Props } from './index'

export const Button = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: #1dafa1;
  height: ${(props: Props) => getButtonHeight(props.height)};
  width: ${(props: Props) => getButtonWidth(props.width)};
  justify-content: center;
  align-items: center;
`

export const getButtonHeight = (height: string): string => {
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

export const getButtonWidth = (width: string): string => {
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
