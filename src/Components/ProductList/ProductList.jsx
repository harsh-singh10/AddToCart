import React from 'react'
import './ProductList.css'
function ProductList({ product, addToCart }) {
    return (
        <div className='parent'>
            {
                product.map((item) => {
                    return (
                        <div  >
                            <div className="container">
                                <img src={item.url} alt="" />
                                <h2>{item.name}</h2>
                                <p>{item.seller}</p>
                                <h3>{item.price} </h3>
                                <button onClick={()=> addToCart(item)} >Add to Cart</button>
                            </div>
                        </div>
                    )
                })



            }
        </div>
    )
}

export default ProductList