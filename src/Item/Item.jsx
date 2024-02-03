import React from 'react'
import './Item.css'
function Item( props ) {
  return (
    <div  >
         <div className="container">
           <img src={props.image}  alt="" />
            <h2>{props.name}</h2>
             <p>{props.category}</p>
             <h3>{props.new_price} </h3>
             <button>Add to Cart</button>
         </div>
    </div>
  )
}

export default Item