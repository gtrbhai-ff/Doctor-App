import React, { useState } from "react";
import { useParams } from "react-router-dom";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import p_img17 from "../../assets/p_img17.png"
import p_img18 from "../../assets/p_img18.png"
import p_img19 from "../../assets/p_img19.png"
import p_img20 from "../../assets/p_img20.png"
import p_img21 from "../../assets/p_img21.png"
import p_img22 from "../../assets/p_img22.png"
import p_img23 from "../../assets/p_img23.png"
import p_img24 from "../../assets/p_img24.png"
import { useCart } from "../Cart/Cartcontext";

const products = [
    { id: 37, name: "Track Pant", price: 500, imgage: p_img17, gen: "Men" },
    { id: 38, name: "Printed T-Shirt", price: 500, imgage: p_img18, gen: "Kids" },
    { id: 39, name: "Plain T-Shirt", price: 500, imgage: p_img19, gen: "Kids" },
    { id: 40, name: "Pant", price: 500, imgage: p_img20, gen: "Women" },
    { id: 41, name: "Woodie", price: 500, imgage: p_img21, gen: "Women" },
    { id: 42, name: "Loose Pant", price: 500, imgage: p_img22, gen: "Women" },
    { id: 43, name: "T-Shirt", price: 500, imgage: p_img23, gen: "Kids" },
    { id: 44, name: "Shirt", price: 500, imgage: p_img24, gen: "Kids" },
];


function Bestsellerproductdetails() {

  const { addToCart } = useCart(); // ✅ fixed

  const [selectedSize, setSelectedSize] = useState(""); // stores "S", "M", etc.

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const { id } = useParams();
  const idNum = Number(id);
  const product = products.find((p) => p.id === idNum);

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
          <button onClick={()=>addToCart(product)}>ADD TO CART</button>
        </div>

      </div>



    </div>

  );

}

export default Bestsellerproductdetails;
