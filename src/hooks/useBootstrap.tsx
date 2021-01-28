import React from 'react'
import * as Font from 'expo-font'
import { useDispatch, useSelector } from 'react-redux'
import { bootstrap } from '../redux/reducers/AuthSlice'

export default function () {
  const [isReady, setIsReady] = React.useState(false)

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(bootstrap())
  }, [])

  const _cacheResourcesAsync = async () => {
    //LOAD FONTS
    await Font.loadAsync({
      Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
      OpenSans: require('../../assets/fonts/OpenSans-Regular.ttf'),
      Lato: require('../../assets/fonts/Lato-Regular.ttf'),
      LatoBold: require('../../assets/fonts/Lato-Bold.ttf'),
      LatoBlack: require('../../assets/fonts/Lato-Black.ttf'),
    })

    //    const images = [require('./assets/snack-icon.png')]
    //    const cacheImages = images.map((image) => {
    //      return Asset.fromModule(image).downloadAsync()
    //    })
    //    return Promise.all(cacheImages)
  }

  return { _cacheResourcesAsync, isReady, setIsReady }
}
