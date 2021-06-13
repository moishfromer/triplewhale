import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from './tableAPI';

const initialState = {
  data: [],
  pending: false,
};

export const fetchOrdersData = createAsyncThunk(
  'table/fetchOrdersData',
  async () => {
    const response = await fetchData();
    return response.data;
  }
);

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersData.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchOrdersData.fulfilled, (state, action) => {
        state.pending = false;
        state.data = action.payload;
      });
  },
});


export default tableSlice.reducer;
