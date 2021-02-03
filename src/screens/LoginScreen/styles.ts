import styled from 'styled-components/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { wp, hp } from '../../utils'

export const Layout = styled.View`
  flex: 1;
  background-color: #2a5798;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const Row = styled.View`
  margin-bottom: 20px;
`
export const Header = styled.View`
  flex: 1;
  justify-content: center;
  width: 100%;
`
export const MyAwareScrollView = styled(KeyboardAwareScrollView)`
  width: 80%;
`

export const Body = styled.View`
  flex: 0.5;
  justify-content: flex-start;

  width: 100%;
`

export const StyledImage = styled.Image`
  width: 100%;
  height: ${hp('10%')};
  resize-mode: contain;
`
