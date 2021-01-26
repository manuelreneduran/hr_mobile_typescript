import styled from 'styled-components/native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

export const Layout = styled.Text`
  color: ${(props) => props.color};
`
