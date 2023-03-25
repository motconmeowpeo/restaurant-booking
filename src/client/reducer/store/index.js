import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../product/productSlice';
import orderSlice from '../order/orderSlice';



const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        order: orderSlice

    }
});
export default store;