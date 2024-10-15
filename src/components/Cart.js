import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart, removeItem } from "../Utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector ((store) => store.cart.items)
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearCart())
  }
  
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'> CART ITEMS</h1>
      <button className='p-2 m-2 font-bold bg-fuchsia-300 text-white rounded-lg' onClick={clearCartItems}> Clear Cart</button>
      <div className='w-6/12 m-auto'>
        <ItemList resMenuOptions = {cartItems} /> 
      </div>

      
      
    </div>
  )
}

export default Cart
