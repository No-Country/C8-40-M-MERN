import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchText: '',
  searchFocus: false,
};

export const searchFocus = createSlice({
  name: 'searchFocus',
  initialState,
  reducers: {
    setTrueFocus: (state) => {
      state.searchFocus = true;
    },
    setFalseFocus: (state) => {
      state.searchFocus = false;
    },
    setSearchText: (state, { payload }) => {
      state.searchText = payload;
    },
  },
});

export const { setTrueFocus, setFalseFocus, setSearchText } = searchFocus.actions;

export default searchFocus.reducer;
