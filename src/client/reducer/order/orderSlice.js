import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItem: sessionStorage.getItem("cartItem") ? JSON.parse(sessionStorage.getItem("cartItem")) : [],
        cartTotalQuanlity: 0,
        cartTotalAmount: 0,
    },
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItem.findIndex((item) => item._id === action.payload._id)
            const quanlity = parseInt(sessionStorage.getItem('quantity'));
            if (itemIndex >= 0) {
                if (quanlity && quanlity > 1) {
                    state.cartItem[itemIndex].cartQuanlity = quanlity
                    sessionStorage.setItem('quantity', 1)
                }
                else
                    state.cartItem[itemIndex].cartQuanlity += 1
            }
            else {

                const tempProduct = (quanlity && quanlity > 1) ? { ...action.payload, cartQuanlity: quanlity } : { ...action.payload, cartQuanlity: 1 }
                state.cartItem.push(tempProduct)
            }
            sessionStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },

    }
})
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer