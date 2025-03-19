import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Acen',
  lastName: 'Chandra',
  userId: 1,
};

export const User = createSlice({
  name: 'User',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    resetToInitialState: (state, action) => {
      return initialState;
    },
  },
});

export const {resetToInitialState, login} = User.actions;

export default User.reducer;
