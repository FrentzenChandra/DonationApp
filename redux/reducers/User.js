import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

export const User = createSlice({
  name: 'User',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      return {...action.payload, isLoggedIn: true};
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      return {};
    },
    resetToInitialState: (state, action) => {
      return initialState;
    },
  },
});

export const {resetToInitialState, login} = User.actions;

export default User.reducer;
