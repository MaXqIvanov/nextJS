import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getModelsCar:any = createAsyncThunk(
  'cars/getCars',
  async (params:any, state:any) => { // here you have two arguments
      const response = await fetch('https://api.carmart.ru/cars/temp?page=1&perPage=18&isNew%5B0%5D=1&orderBy%5B0%5D%5Bfield%5D=year&orderBy%5B0%5D%5Bdirection%5D=desc&brand%5B0%5D');
      const models = response.json();
      return models;
  },
)

export const getCurrentCar:any = createAsyncThunk(
    'cars/getCurrentCar',
    async (params:any, state:any) => { // here you have two arguments  
        const response = await fetch(`https://api.carmart.ru/cars/temp?page=1&perPage=18&isNew%5B0%5D=1&orderBy%5B0%5D%5Bfield%5D=year&orderBy%5B0%5D%5Bdirection%5D=desc&brand%5B0%5D=${params.models}`);
        const cars = response.json();
        return cars;
    },
  )

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    models: [] as any[],
    cars: [] as any[],
  },
  reducers: {
    getServices(state:any, action:any) {
    },
  },
  extraReducers: {
    [getModelsCar.pending]: (state:any, action:any) => {
    },
    [getModelsCar.fulfilled]: (state:any, { payload }:any) => {
      console.log(payload);
      
    state.models = payload.meta.filters.brand;
    },
    [getModelsCar.rejected]: (state:any, action: any) => {
    },

    [getCurrentCar.pending]: (state:any, action:any) => {
    },
    [getCurrentCar.fulfilled]: (state:any, { payload }:any) => {
    console.log(payload);    
    state.cars = payload.list
    },
    [getCurrentCar.rejected]: (state:any, action: any) => {
    },
  }
});

export default carsSlice.reducer;
export const { getServices } =
carsSlice.actions;