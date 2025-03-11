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
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    resetToInitialState: (state, action) => {
      return initialState;
    },
  },
});

export const {updateFirstName, resetToInitialState} = User.actions;

export default User.reducer;
