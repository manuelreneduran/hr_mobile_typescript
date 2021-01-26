import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authAPI from '../../utils/adapters/authAPI'

export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
  const response = await authAPI.fetchUser()
  return response
})

export const login = createAsyncThunk(
  'users/login',
  async (userData: UserData) => {
    const response = await authAPI.login(userData)
    return response
  }
)

export interface UserData {
  email: string
  password: string
}

export interface CurrentUser {
  email: string
  firstName: string
  middleName?: string
  lastName: string
  phoneNumber: string
  isAdmin: boolean
  address?: object
  membership?: object[] | []
  applications?: object[] | []
  id: string
  paymentSources?: object[] | []
  createdAt: string
  cards?: object[] | []
  isApproved?: boolean
}

export interface AuthState {
  isAuth: boolean
  currentUser: null | CurrentUser
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
    builder.addCase(fetchUser.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.currentUser = action.payload
      state.error = null
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.status = 'error'
      state.currentUser = null
      state.error = action.error.message
    })
    builder.addCase(login.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.currentUser = action.payload
      state.error = null
      state.isAuth = true
    })
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'error'
      state.currentUser = null
      state.error = action.error.message
      state.isAuth = false
    })
  },
})

export default authSlice.reducer

export const authSelector = (state: { auth: AuthState }) => state.auth
