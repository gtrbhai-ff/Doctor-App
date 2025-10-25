import React from 'react'
import "./BestSellers.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png"
import p_img17 from "../../assets/p_img17.png"
import p_img18 from "../../assets/p_img18.png"
import p_img19 from "../../assets/p_img19.png"
import p_img20 from "../../assets/p_img20.png"
import p_img21 from "../../assets/p_img21.png"
import p_img22 from "../../assets/p_img22.png"
import p_img23 from "../../assets/p_img23.png"
import p_img24 from "../../assets/p_img24.png"
import { Link } from 'react-router-dom'

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



function BestSellers() {

    return (
        <section className="text-gray-600 body-font" id='bestsellers'>

            <h1>Best Sellers</h1>


            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {products.map((product) => {
                                return (
                                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                                    <Link to={`/bestsellerproduct/${product.id}`} className="block relative h-80 rounded overflow-hidden">
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
                                {/* </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-80 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img22} />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Women</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">Trendy Tops & Tees</h2>
                            <div id="star">
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                            </div>
                            <p className="mt-1">$23.00</p>
                        </div>
                    </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-80 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img23} />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Kids</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">Daily Ware</h2>
                            <div id="star">
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                            </div>
                            <p className="mt-1">$26.00</p>
                        </div>
                    </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <a className="block relative h-80 rounded overflow-hidden">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img24} />
                        </a>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Kids</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">Casual Shirts</h2>
                            <div id="star">
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                                <img src={star_icon} alt='' />
                            </div>
                            <p className="mt-1">$16.00</p>
                        </div> */}
                            {/* </div> */}

                </div>
            </div>
        </section>

    )
}

export default BestSellers
