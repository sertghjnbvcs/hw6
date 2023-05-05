import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            } else {
                state.items.push({
                    id,
                    name,
                    price,
                    quantity: 1
                });
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            if (itemIndex >= 0) {
                state.items.splice(itemIndex, 1);
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity = quantity;
            }
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
