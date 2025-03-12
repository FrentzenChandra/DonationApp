import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: 'Highlight',
  categoryId: 1,
};

const category = createSlice({
  name: 'Category',
  initialState: initialState,
  reducers: {
    resetCategoryToInitialState: (state, action) => {
      return initialState;
    },
    updateActiveCategory: (state, action) => {
      return action.payload;
    },
  },
});

export const {resetToInitialState, updateActiveCategory} = category.actions;

export default category.reducer;
