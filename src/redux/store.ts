import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import { useDispatch } from 'react-redux'
import rootReducer, { RootState } from './reducers'

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

const store = configureStore({ reducer: rootReducer })
export default store

/**
 * Adding middleware
 */
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import logger from 'redux-logger'
// const middleware = [...getDefaultMiddleware(), logger]

// export default configureStore({
//   reducer,
//   middleware,
// })
