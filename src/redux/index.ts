import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import photosSliceReducer, { PhotoState } from './reducers/PhotoSlice'

export type AppThunk = ThunkAction<void, PhotoState, unknown, Action<string>>

const store = configureStore({
  reducer: {
    // the convention is to name this photos rather than photosStore but photosStore is clearer to me.
    photosStore: photosSliceReducer,

    // anyOtherStore: anyOtherSlice,
    // middleware: ['array of middlewares'],
  },
})
export default store
