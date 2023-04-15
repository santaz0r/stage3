import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { charactersApi } from './charactersAPI';
import searchReducer from './search';

const rootReducer = combineReducers({
  [charactersApi.reducerPath]: charactersApi.reducer,
  search: searchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefMiddleware) => getDefMiddleware().concat(charactersApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
