import { combineReducers } from 'redux'
import { reducer as authSliceReducer } from './AuthSlice'

const reducers = combineReducers({
  auth: authSliceReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
