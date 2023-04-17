import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';

type TSearch = {
  value: string;
};

const initialState: TSearch = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changedSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { actions, reducer: searchReducer } = searchSlice;
export const { changedSearch } = actions;

export const changeSearch = (payload: string) => (dispatch: AppDispatch) => {
  dispatch(changedSearch(payload));
};

export const getSearch = () => (state: RootState) => state.search.value;

export default searchReducer;
