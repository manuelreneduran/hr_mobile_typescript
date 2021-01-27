import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen'

export const wp = (width: string): string => {
  const result = widthPercentageToDP(width).toString() + 'px'
  return result
}
export const hp = (height: string): string => {
  const result = heightPercentageToDP(height).toString() + 'px'
  return result
}
