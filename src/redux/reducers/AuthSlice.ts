import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authAPI from '../../utils/adapters/authAPI'

export const checkAuth = createAsyncThunk('users/fetchUser', async () => {
  const response = await authAPI.fetch()
  return response
})

export interface CurrentUser {
  id: string
  firstName: string
  lastName: string
  isAdmin: boolean
  email: string
}

export interface AuthState {
  isAuth: boolean
  currentUser: null | object
  status: string
  error?: string | null
}

export const initialState: AuthState = {
  isAuth: false,
  currentUser: null,
  status: 'idle',
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder pattern sets state and action types automatically
    builder.addCase(checkAuth.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.currentUser = action.payload
      state.error = null
    })
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.status = 'error'
      state.currentUser = null
      state.error = action.error.message
    })
  },
})

export default authSlice.reducer

export const authSelector = (state: { auth: AuthState }) => state.auth
