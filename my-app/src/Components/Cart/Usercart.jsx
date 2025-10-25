// import React from "react";
// import "./Usercart.css"
// import { useCart } from "./Cartcontext";

// const Usercart = () => {
//     const { cartItems, removeFromCart } = useCart(); // ✅ use correct keys

//     return (
//         <div className="cart">
//             <h2>Your Cart</h2>

//             {cartItems.length === 0 && <h2>No items in cart</h2>}

//             <div className="cart-details">
//                 {cartItems.map((item) => (
//                     <div key={item.id} className="cart-sec">
//                         <div className="cart-img">
//                             <img src={item.imgage} alt={item.name} />
//                         </div>
//                         <div>
//                             <h3>{item.name}</h3>
//                             <p>$ {item.price}.00</p>
//                             <button onClick={() => removeFromCart(item)}>Remove</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default Usercart;


import React from 'react'
import "./Usercart.css"
import { useCart } from './Cartcontext'
import { Link } from 'react-router-dom';

const Usercart = () => {

    const { cartItems, addToCart, removeFromCart } = useCart();

    function handleorder(name){
        alert(`Your  " ${name} "  is ordered sucessfully`)
    }

    return (
        <div className='cart'>
            
            <h2>Your Cart</h2>

            {cartItems.length === 0 && <h2>Cart is empty</h2>}

            <div className="cart-details">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-sec">
                        <div className="cart-img">
                            <img src={item.imgage} alt={item.name} />
                        </div>
                        <div>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <h4>Quantity : {item.quantity}</h4>
                            <button onClick={() => addToCart(item)}>+</button>
                            <button onClick={() => removeFromCart(item)}>-</button>
                            <div className="order">
                                <Link to="/"><button onClick={() => handleorder(item.name)}>Place Order</button></Link>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Usercart;
