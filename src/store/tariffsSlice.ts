import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITariff {
  name: 'Starter' | 'Buisness' | 'Enterprise' | 'Custom', 
  members: number | 'Unlimited',
  traffic: number | 'Unlimited',
  space: number,
  alwaysOnline: boolean
  price: number
}

const initialState: ITariff = {
  name: 'Custom',
  members: 0,
  traffic: 0,
  space: 0,
  alwaysOnline: false,
  price: 0
}

console.log(initialState.price)

const tariffsSlice = createSlice({
  name: 'tariffs',
  initialState: initialState,
  reducers: {
    updateTariff(state: ITariff, action) {
      // payload
    },
  },
});


export const { updateTariff } = tariffsSlice.actions;

export default tariffsSlice.reducer;