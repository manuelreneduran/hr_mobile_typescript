import { combineReducers } from '@reduxjs/toolkit'
import authSliceReducer from './AuthSlice'

const rootReducer = combineReducers({
  auth: authSliceReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
