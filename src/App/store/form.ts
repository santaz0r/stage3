import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';
import { TCard } from '../types/types';

type TCardForm = {
  entities: TCard[];
};

const initialState: TCardForm = {
  entities: [],
};

const formSlice = createSlice({
  name: 'cardsForm',
  initialState,
  reducers: {
    createdCard: (state, action) => {
      state.entities.push(action.payload);
    },
  },
});

const { actions, reducer: formReducer } = formSlice;
export const { createdCard } = actions;

export const createCard = (payload: TCard) => (dispatch: AppDispatch) => {
  dispatch(createdCard(payload));
};

export const getAllCards = () => (state: RootState) => state.form.entities;

export default formReducer;
