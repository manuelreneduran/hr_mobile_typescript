import { Alert as NativeAlert } from 'react-native'

interface Props {
  content: string
}

const Alert = ({ content = '' }: Props) =>
  NativeAlert.alert(
    'Error',
    content,
    [
      {
        text: 'Cancel',
        // onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        // onPress: () => console.log('OK Pressed')
      },
    ],
    { cancelable: false }
  )

export default Alert
