import {createSlice} from '@reduxjs/toolkit';
import {create} from 'react-test-renderer';

const initialState = {};

const item = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {
    resetItem: () => {
      return initialState;
    },
    updateItem: (state, action) => {
      return action.payload;
    },
  },
});

export const {resetItem, updateItem} = item.actions;

export default item.reducer;
