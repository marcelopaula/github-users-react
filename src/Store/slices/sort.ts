import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
export interface ISort {
  sort: string,
  order: string
}

export const initialState: ISort = {
  sort: 'start',
  order: 'desc'
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<ISort>) => action.payload
  }
})

export const { update } = sortSlice.actions
export default sortSlice.reducer