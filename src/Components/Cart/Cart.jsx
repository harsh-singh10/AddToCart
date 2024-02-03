import React, { useState } from 'react'
import './Cart.css'

function Cart({ cart }) {

  const [cartItems, setCartItems] = useState(cart);
  const handleIncrement = (cartIndex) => {
    const updatedCart = [...cartItems];
    updatedCart[cartIndex].quantity += 1;
    
    setCartItems(updatedCart);

  };

  const handleDecrement = (cartIndex)=>{
     const decremetedCart = [...cartItems];
      decremetedCart [cartIndex].quantity -= 1;
      setCartItems(decremetedCart)
  }
  

  if (cart.length == 0) {
    return <div className="d"><h1>Your Cart Is Empty Please add Something</h1></div>
  }

  return (
    <div>
      {
        cart.map((item, cartIndex) => {
          return (
            <>
              <div key={cartIndex}>
                <img src={item.url} width={70} alt="" />
                <span> {item.name} </span>
                <button onClick={()=> handleDecrement(cartIndex)} >-</button>
                <span> {item.quantity} </span>
                <button onClick={()=> handleIncrement(cartIndex)} >+</button>
                <span> {item.price * item.quantity} </span>
              </div>


            </>
          )
        })
      }
      <h3>
        {cart.map(item => item.price*item.quantity  ).reduce((total, val) => total + val, 0)}

      </h3>

    </div>
  )
}

export default Cart