import React from 'react'
import "./CartWidget.css"
import cart from "./cart.png";

export const CartWidget = () => {
  return (
    <div>
      <img src={cart} alt="" />
      <div className='notifications'> 5 </div>
    </div>
    
  )
}

export default CartWidget