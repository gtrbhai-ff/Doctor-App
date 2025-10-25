import React, { useState } from "react";
import { useParams } from "react-router-dom";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import productslist from "./Products";
import "./Productdetails.css"
import { useCart } from "../Cart/Cartcontext";

function Productdetails() { // {handlecart}

  const { addToCart } = useCart(); // ✅ fixed

  const [selectedSize, setSelectedSize] = useState(""); // stores "S", "M", etc.

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const { id } = useParams();
  const idNum = Number(id);
  const product = productslist.find((p) => p.id === idNum);

  if (!product) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  return (
    <div className="details">

      <div className="subimg">
        <img src={product.imgage} alt="" />
        <img src={product.imgage} alt="" />
        <img src={product.imgage} alt="" />
      </div>

      <div className="mainimg">
        <img src={product.imgage} alt="" />
      </div>

      <div className="title">

        <h1>{product.name}</h1>

        <div className="reviews">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>

        <h2>$ {product.price}</h2>

        <p className="mt-4">This is a detailed description of {product.name}. You can add sizes, colors, and more info here.</p>

        <h3>Select Size</h3>

        <div className="size">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`size-btn ${selectedSize === size ? "active" : ""}`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="cart">
          <button onClick={() => addToCart(product)}>ADD TO CART</button>
          {/* <button onClick={() => handlecart(product.id)}>ADD TO CART</button> */}
        </div>

      </div>



    </div>

  );

}

export default Productdetails;
