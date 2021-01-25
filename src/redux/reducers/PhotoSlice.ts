import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../../axios'
import { AppThunk } from '../index'

export interface PhotoState {
  photos: object[]
  loading: boolean
  errors: string
}

const initialState: PhotoState = {
  photos: [],
  loading: false,
  errors: '',
}

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload
    },

    setPhotos: (state, { payload }: PayloadAction<object[]>) => {
      state.photos = payload
    },
  },
})

export const { setLoading, setErrors, setPhotos } = photoSlice.actions

export default photoSlice.reducer

export const photosSelector = (state: { photosStore: PhotoState }) =>
  state.photosStore
