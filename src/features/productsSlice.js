import { createSlice } from '@reduxjs/toolkit';
import productsData from '../goods.json';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: productsData
    },
    reducers: {}
});

export default productsSlice.reducer;
