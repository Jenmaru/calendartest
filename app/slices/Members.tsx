import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = { email: "", password: "", };

const members = createSlice({
  name: 'members',
  initialState,
  reducers: {
    newMember: (state, action: PayloadAction<{email: string, password: string}>) => ({
        ...state,
        ...action.payload
    }),
  },
});

export const { actions } = members;
export default members.reducer;