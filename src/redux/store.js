import { configureStore } from '@reduxjs/toolkit';
import Reducer from './reducers';


export const store = configureStore({
    reducer: {
      chartData:Reducer
    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  });