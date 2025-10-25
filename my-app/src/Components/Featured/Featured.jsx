import React from 'react'
import "./Featured.css"
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
import { Link } from 'react-router-dom'

const products = [
  { id: 25, name: "Fancy Ware", price: 500, imgage: p_img1 , gen : "Women"},
  { id: 26, name: "T-Shirt", price: 500, imgage: p_img2 , gen : "Men"},
  { id: 27, name: "Frock", price: 500, imgage: p_img3 , gen : "Kids"},
  { id: 28, name: "Causual T-Shirt", price: 500, imgage: p_img4 , gen : "Men"},
  { id: 29, name: "Night Ware", price: 500, imgage: p_img5 , gen : "Women"},
  { id: 30, name: "Daily Ware", price: 500, imgage: p_img6 , gen : "Men"},
  { id: 31, name: "Track Pants", price: 500, imgage: p_img7 , gen : "Men"},
  { id: 32, name: "Fullslevees T-Shirt", price: 500, imgage: p_img8 , gen : "Men"},
  { id: 33, name: "Daily Ware", price: 500, imgage: p_img9 , gen : "Kids"},
  { id: 34, name: "Cargoes", price: 500, imgage: p_img10 , gen : "Men"},
  { id: 35, name: "Down Shoulder", price: 500, imgage: p_img11 , gen : "Men"},
  { id: 36, name: "Plain T-shirt", price: 500, imgage: p_img12 , gen : "Men"},
];


function Featured() {
  return (
    <section className="text-gray-600 body-font" id="featured">

      <h1>Featured Products</h1>


      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            return (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                <Link to={`/featuredproduct/${product.id}`} className="block relative h-80 rounded overflow-hidden">
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
          {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-80 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img2} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Champs Tees</h2>
              <div id="star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
              </div>
              <p className="mt-1">$18.00</p>
            </div>
          </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-80 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img3} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Kids</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Chic Casuals</h2>
              <div id="star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
              </div>
              <p className="mt-1">$14.00</p>
            </div>
          </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-80 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img4} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Tiny Trendsetters</h2>
              <div id="star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
              </div>
              <p className="mt-1">$20.00</p>
            </div>
          </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-80 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img5} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Women</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Everyday Essentials</h2>
              <div id="star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
              </div>
              <p className="mt-1">$19.00</p>
            </div>
          </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-80 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img6} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Kids</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Trendy Tops & Tees</h2>
              <div id="star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
              </div>
              <p className="mt-1">$23.00</p>
            </div>
          </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-80 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img7} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">jeans</h2>
              <div id="star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
              </div>
              <p className="mt-1">$26.00</p>
            </div>
          </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-80 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img8} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">T-Shirts</h2>
              <div id="star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
              </div>
              <p className="mt-1">$16.00</p>
            </div>
          </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-80 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img9} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Kids</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Nightwear</h2>
              <div id="star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
              </div>
              <p className="mt-1">$19.00</p>
            </div>
          </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-80 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img10} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Cargoes</h2>
              <div id="star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
              </div>
              <p className="mt-1">$20.00</p>
            </div>
          </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-80 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img11} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Down Shoulders</h2>
              <div id="star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
              </div>
              <p className="mt-1">$18.00</p>
            </div>
          </div><div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-80 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p_img12} />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Men</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">Cozy Cubs Nightwear</h2>
              <div id="star">
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
              </div>
              <p className="mt-1">$22.00</p>
            </div>
          </div> */}

        </div>
      </div>
    </section>

  )
}

export default Featured
