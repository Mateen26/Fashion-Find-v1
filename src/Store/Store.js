// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice'
import loaderSlicer from './loaderSlicer';

const store = configureStore({
  reducer: {
    products: productReducer,
    Loader: loaderSlicer
  },
});

export default store;
