import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import carsSlice from './carsSlice';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';


const rootReducer = combineReducers({
  cars: carsSlice,
});

export const makeStore = () => 
   configureStore({
    reducer: rootReducer,
  });


export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);
