import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  pending: false,
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    updateOrders: (state, action) => {
      state.data = action.payload
    }
  }
});

export const {updateOrders} = tableSlice.actions;

export default tableSlice.reducer;
