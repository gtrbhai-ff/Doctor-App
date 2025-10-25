import React, { useState } from "react";
import { useParams } from "react-router-dom";
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import p_img1 from "../../assets/p_img1.png"
import p_img2 from "../../assets/p_img2.png"
import p_img3 from "../../assets/p_img3.png"
import p_img4 from "../../assets/p_img4.png"
import p_img5 from "../../assets/p_img5.png"
import p_img6 from "../../assets/p_img6.png"
import p_img7 from "../../assets/p_img7.png"
import p_img8 from "../../assets/p_img8.png"
import p_img9 from "../../assets/p_img9.png"
import p_img10 from "../../assets/p_img10.png"
import p_img11 from "../../assets/p_img11.png"
import p_img12 from "../../assets/p_img12.png"
import { useCart } from "../Cart/Cartcontext";


const products = [
  { id: 25, name: "Fancy Ware", price: 500, imgage: p_img1, gen: "Women" },
  { id: 26, name: "T-Shirt", price: 500, imgage: p_img2, gen: "Men" },
  { id: 27, name: "Frock", price: 500, imgage: p_img3, gen: "Kids" },
  { id: 28, name: "Causual T-Shirt", price: 500, imgage: p_img4, gen: "Men" },
  { id: 29, name: "Night Ware", price: 500, imgage: p_img5, gen: "Women" },
  { id: 30, name: "Daily Ware", price: 500, imgage: p_img6, gen: "Men" },
  { id: 31, name: "Track Pants", price: 500, imgage: p_img7, gen: "Men" },
  { id: 32, name: "Fullslevees T-Shirt", price: 500, imgage: p_img8, gen: "Men" },
  { id: 33, name: "Daily Ware", price: 500, imgage: p_img9, gen: "Kids" },
  { id: 34, name: "Cargoes", price: 500, imgage: p_img10, gen: "Men" },
  { id: 35, name: "Down Shoulder", price: 500, imgage: p_img11, gen: "Men" },
  { id: 36, name: "Plain T-shirt", price: 500, imgage: p_img12, gen: "Men" },
];

function Featuredproductdetails() {

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

export default Featuredproductdetails;
