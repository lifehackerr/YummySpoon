import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: [],
    },
    reducers: {
        addItem: (state, action) =>{  //dispatch an action, addItem is an action
            state.items.push(action.payload);  // here it is pushing the actions into the state
        },
        removeItem: (state, action) =>{
            state.items.pop(); 
        },
        clearCart: (state) =>{
            state.items = [];
        }
    }
})
 
export const {addItem,removeItem,clearCart} = cartSlice.actions
export default cartSlice.reducer;