import { configureStore } from '@reduxjs/toolkit'
import tariffReducer from './tariffsSlice'

export default configureStore({
  reducer: {
    tariffs: tariffReducer,
  },
});