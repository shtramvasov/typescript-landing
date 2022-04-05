import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ITariff {
  name: 'Starter' | 'Buisness' | 'Enterprise' | 'Custom' | null, 
  members: number | 'Unlimited',
  traffic: number | 'Unlimited',
  space: number,
  alwaysOnline: boolean
  price: number
}

const initialState: ITariff = {
  name: null,
  members: 0,
  traffic: 0,
  space: 0,
  alwaysOnline: false,
  price: 0
}

const tariffsSlice = createSlice({
  name: 'tariffs',
  initialState,
  reducers: {
    chooseTariff(state: ITariff, action: PayloadAction) {
      // payload
    }
  }
});

export const { chooseTariff } = tariffsSlice.actions;

export default tariffsSlice.reducer;