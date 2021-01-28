import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch } from '../store'
import authAPI from '../../utils/adapters/authAPI'

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
  user: {
    status: string
    error?: string | null
    data: null | CurrentUser
  }
  login: {
    status: string
    error?: string | null
  }
  bootstrap: {
    status: string
    error?: string | null
  }
  isAuth: boolean
}

export const fetchUser = createAsyncThunk('auth/user', async () => {
  const response = await authAPI.fetchUser()
  return response
})

export const login = createAsyncThunk(
  'auth/login',
  async (userData: UserData) => {
    const response = await authAPI.login(userData)
    return response
  }
)

export const bootstrap = createAsyncThunk<
  any,
  undefined,
  {
    dispatch: AppDispatch
    state: { auth: AuthState }
    extra: any
  }
>('auth/bootstrap', async (...args) => {
  const thunkAPI = args[1]
  const getState = thunkAPI.getState
  const dispatch = thunkAPI.dispatch
  // guards against multiple requests
  if (getState().auth.bootstrap.status === 'loading') {
    return Promise.resolve()
  }

  let user = await getState().auth.user.data

  if (!user) {
    dispatch(fetchUser())
  }

  user = await getState().auth.user.data

  if (user) {
    // dispatch other action creators as needed
  }
  return Promise.resolve()
})

export const initialState: AuthState = {
  user: {
    status: 'idle',
    error: null,
    data: null,
  },
  login: {
    status: 'idle',
    error: null,
  },
  bootstrap: {
    status: 'idle',
    error: null,
  },
  isAuth: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder pattern sets state and action types automatically
    builder.addCase(fetchUser.pending, (state) => {
      state.user.status = 'loading'
      state.user.error = null
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user.status = 'fulfilled'
      state.user.data = action.payload
      state.user.error = null
      state.isAuth = true
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.user.status = 'error'
      state.user.data = null
      state.user.error = action.error.message
      state.isAuth = false
    })
    builder.addCase(login.pending, (state) => {
      state.login.status = 'loading'
      state.login.error = null
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.login.status = 'fulfilled'
      state.user.data = action.payload
      state.login.error = null
      state.isAuth = true
    })
    builder.addCase(login.rejected, (state, action) => {
      state.login.status = 'error'
      state.user.data = null
      state.login.error = action.error.message
      state.isAuth = false
    })
    builder.addCase(bootstrap.pending, (state) => {
      state.bootstrap.status = 'loading'
      state.bootstrap.error = null
    })
    builder.addCase(bootstrap.fulfilled, (state) => {
      state.bootstrap.status = 'fulfilled'
      state.bootstrap.error = null
    })
  },
})

export default authSlice.reducer

export const authSelector = (state: { auth: AuthState }) => state.auth
