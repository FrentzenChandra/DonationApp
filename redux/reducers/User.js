import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: '',
  displayName: '',
  email: '',
  isLoggedIn: false,
};

export const User = createSlice({
  name: 'User',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      return {...action.payload, isLoggedIn: true};
    },
    resetUserState: (state, action) => {
      return initialState;
    },
    updateToken: (state, action) => {
      state.displayName = 'Ayam Goreng';
      state.token = action.payload;
    },
  },
});

export const {resetUserState, login, updateToken} = User.actions;

export default User.reducer;
