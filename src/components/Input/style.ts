import styled from 'styled-components/native'
import { wp, hp } from '../../utils'
import { Props } from './index'

export const StyledTextInput = styled.TextInput`
  height: ${hp('5%')};
  width: ${wp('70%')};
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  padding: 10px;
  border-width: 1px;
  border-color: ${(props: Props) => (props.error ? '#EF594C' : 'lightgray')};
`
export const Layout = styled.View`
  align-items: flex-start;
`
