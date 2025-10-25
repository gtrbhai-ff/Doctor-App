import React from 'react'
import "./Women.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import p_img1 from "../../assets/p_img1.png"
import p_img5 from "../../assets/p_img5.png"
import p_img13 from "../../assets/p_img13.png"
import p_img44 from "../../assets/p_img44.png"
import p_img35 from "../../assets/p_img35.png"
import p_img36 from "../../assets/p_img36.png"
import p_img20 from "../../assets/p_img20.png"
import p_img51 from "../../assets/p_img51.png"
import { Link } from 'react-router-dom'

const products = [
    { id: 9, name: "Women Dress", price: 1200, imgage: p_img1, gen: "Women" },
    { id: 10, name: "Women Top", price: 800, imgage: p_img5, gen: "Women" },
    { id: 11, name: "Women Saree", price: 2000, imgage: p_img13, gen: "Women" },
    { id: 12, name: "Women Kurti", price: 1000, imgage: p_img44, gen: "Women" },
    { id: 13, name: "Women Jeans", price: 1100, imgage: p_img35, gen: "Women" },
    { id: 14, name: "Women Skirt", price: 900, imgage: p_img36, gen: "Women" },
    { id: 15, name: "Women Blouse", price: 700, imgage: p_img20, gen: "Women" },
    { id: 16, name: "Women Jacket", price: 1600, imgage: p_img51, gen: "Women" },
];

function Women() {
    return (
        <section className="text-gray-600 body-font" id="women">

            <h1>Women Products</h1>


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

export default Women
