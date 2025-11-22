import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cartState"));

const cartSlice = createSlice({
    name: "cart",
    initialState: savedCart || {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    },

    reducers: {
        // Product Cart kore
        addToCart: (state, action) => {
            const existing = state.items.find(item => item.id === action.payload.id);

            if (existing) {
                alert("Product Already In Cart!");
                return;
            }
            state.items.push({
                ...action.payload,
                quantity: 1,
                total: action.payload.price
            });

            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
        },
        // Cart page theke delete kore
        removeFromCart: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);

            if (!item) return;

            state.totalQuantity -= item.quantity;
            state.totalPrice -= item.total;

            state.items = state.items.filter(i => i.id !== action.payload);
        },

        // increase button
        increase: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (!item) return;

            //  check if quantity is already 5
            if (item.quantity >= 5) {
                alert("Maximum quantity for this product is 5!");
                return;
            }

            item.quantity += 1;
            item.total = item.quantity * item.price;

            state.totalQuantity += 1;
            state.totalPrice += item.price;
        },

        // decrease button
        decrease: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (!item) return;

            if (item.quantity > 1) {
                item.quantity -= 1;
                item.total = item.quantity * item.price;

                state.totalQuantity -= 1;
                state.totalPrice -= item.price;
            }
        },
        // ✅ Single product Checkout
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        clearSelectedProduct: (state) => {
            state.selectedProduct = null;
        },
    },
});

export const { addToCart, removeFromCart, increase, decrease, setSelectedProduct } = cartSlice.actions;
export default cartSlice.reducer;
