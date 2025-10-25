import React from 'react'
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import p_img2 from "../../assets/p_img2.png"
import p_img7 from "../../assets/p_img7.png"
import p_img8 from "../../assets/p_img8.png"
import p_img4 from "../../assets/p_img4.png"
import p_img11 from "../../assets/p_img11.png"
import p_img12 from "../../assets/p_img12.png"
import p_img15 from "../../assets/p_img15.png"
import p_img46 from "../../assets/p_img46.png"
import { Link } from 'react-router-dom'

const products = [
    { id: 1, name: "Men Shirt", price: 500, imgage: p_img2, gen: "Men" },
    { id: 2, name: "Men T-Shirt", price: 600, imgage: p_img7, gen: "Men" },
    { id: 3, name: "Men Jeans", price: 1200, imgage: p_img8, gen: "Men" },
    { id: 4, name: "Men Jacket", price: 1800, imgage: p_img4, gen: "Men" },
    { id: 5, name: "Men Hoodie", price: 1500, imgage: p_img11, gen: "Men" },
    { id: 6, name: "Men Shorts", price: 700, imgage: p_img12, gen: "Men" },
    { id: 7, name: "Men Kurta", price: 1000, imgage: p_img15, gen: "Men" },
    { id: 8, name: "Men Blazer", price: 2500, imgage: p_img46, gen: "Men" },
];


function Men() {
    return (
        <section className="text-gray-600 body-font" id="women">

            <h1>Men Products</h1>


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

export default Men
