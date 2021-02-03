import styled from 'styled-components/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

export const Layout = styled.View`
  flex: 1;
  background-color: #2a5798;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-width: 4;
  border-color: green;
`
export const Row = styled.View`
  margin-bottom: 20px;
`
export const Header = styled.View`
  flex: 1;
  justify-content: center;
  border-width: 5;
  border-color: red;
`
export const MyAwareScrollView = styled(KeyboardAwareScrollView)`
  flex: 1;
  background-color: #2a5798;
  width: 100%;
`
export const Body = styled.View`
  flex: 1;
  justify-content: center;
  border-width: 5;
  border-color: purple;
`
