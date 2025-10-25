import React from 'react'
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import p_img3 from "../../assets/p_img3.png"
import p_img6 from "../../assets/p_img6.png"
import p_img9 from "../../assets/p_img9.png"
import p_img14 from "../../assets/p_img14.png"
import p_img16 from "../../assets/p_img16.png"
import p_img18 from "../../assets/p_img18.png"
import p_img23 from "../../assets/p_img23.png"
import p_img24 from "../../assets/p_img24.png"
import { Link } from 'react-router-dom'

const products = [
    { id: 17, name: "Kids Shirt", price: 400, imgage: p_img3, gen: "Kids" },
    { id: 18, name: "Kids T-Shirt", price: 350, imgage: p_img6, gen: "Kids" },
    { id: 19, name: "Kids Jeans", price: 600, imgage: p_img9, gen: "Kids" },
    { id: 20, name: "Kids Dress", price: 700, imgage: p_img14, gen: "Kids" },
    { id: 21, name: "Kids Shorts", price: 300, imgage: p_img16, gen: "Kids" },
    { id: 22, name: "Kids Frock", price: 800, imgage: p_img18, gen: "Kids" },
    { id: 23, name: "Kids Hoodie", price: 900, imgage: p_img23, gen: "Kids" },
    { id: 24, name: "Kids Jacket", price: 1000, imgage: p_img24, gen: "Kids" },
];

function Kids() {
    return (
        <section className="text-gray-600 body-font" id="women">

            <h1>Kids Products</h1>


            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {products.map((product) => {
                        return (
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                                <Link to={`/product/${product.id}`} className="block relative h-80 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.imgage} />
                                </Link>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.gen}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                    <div id="star">
                                        <img src={star_icon} alt='' />
                                        <img src={star_icon} alt='' />
                                        <img src={star_icon} alt='' />
                                        <img src={star_icon} alt='' />
                                        <img src={star_icon} alt='' />
                                        <img src={star_dull_icon} alt='' />
                                    </div>
                                    <p className="mt-1">${product.price}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>

    )
}

export default Kids

