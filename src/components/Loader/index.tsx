import React from 'react'
import LottieView from 'lottie-react-native'
import { Layout } from './styles'

interface Props {
  color: string
}

const Loader: React.FC<Props> = ({ color }) => {
  const loaderColor =
    color === 'white'
      ? require('../../../assets/json/loader-white.json')
      : require('../../../assets/json/loader-blue.json')

  return (
    <Layout>
      <LottieView
        source={loaderColor}
        autoPlay
        loop
        style={{
          height: 50,
          width: 50,
          alignSelf: 'center',
        }}
      />
    </Layout>
  )
}

export default Loader
