import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = { currentPage: 1 };

const pages = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    openPage: (state, action: PayloadAction<{currentPage: number}>) => ({
        ...state,
        ...action.payload
    }),
  },
});

export const { actions } = pages;
export default pages.reducer;