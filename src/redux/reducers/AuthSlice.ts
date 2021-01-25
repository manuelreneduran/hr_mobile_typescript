import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { AppThunk } from '../store'
import { RootState } from './index'
import axios from '../../../axios'

const checkAuth = createAsyncThunk('users/getUsers', async () => {
  try {
    const response = await axios.get('/auth/user')
    return response
  } catch (e) {
    return e
  }
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
    builder.addCase(checkAuth.pending, (state) => {
      state.status = 'loading'
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

export const reducer = authSlice.reducer

// Slice

//  initialState: {
//     status: 'idle',
//     error: null,
//   },
