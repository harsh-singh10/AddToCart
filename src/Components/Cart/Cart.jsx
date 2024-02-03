import React from 'react'
import './Cart.css'
function Cart({cart}) {
  return (
    <div>
         {
            cart.map((item , cartIndex)=>{
                return(
                    <div>
                        <img src={item.url} width={70} alt="" />
                         <span> {item.name} </span>
                         <button>-</button>
                         <span> {item.quantity} </span>
                         <button>+</button>
                         <span> {item.price} </span>
                    </div>
                )
            })
         }
    </div>
  )
}

export default Cart