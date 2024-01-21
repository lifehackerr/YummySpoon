import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return(
        <>
            <h1 className="font-bold">Cart Items:- {cartItems.length}</h1>
            <button className="p-2 m-2" onClick={()=>handleClearCart()}>clear cart</button>

            <div className="flex">{cartItems.map(item => <FoodItem key= {item.id} {...item} />)}</div>
            
            
        </>
    )
    
}
export default Cart;