import React from 'react'
import "./Category.css"
import p_img21 from "../../assets/p_img21.png"
import p_img38 from "../../assets/p_img38.png"
import p_img2_2 from "../../assets/p_img2_2.png"
import { Link } from 'react-router-dom'



function Category() {
    return (
        <div className='category'>

            <h1>Categories</h1>

            <div className="categories">

                <Link to="/women">
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer hover:grayscale-0">
                        <img
                            className="rounded-lg"
                            src={p_img21}
                            alt="image description"
                        />
                        <figcaption className="absolute px-7 text-lg text-white bottom-5">
                            <h2>20% Off On Tank Tops</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>SHOP NOW</button>
                        </figcaption>
                    </figure>
                </Link>

                <Link to="/men">
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer hover:grayscale-0">
                        <img
                            className="rounded-lg"
                            src={p_img2_2}
                            alt="image description"
                        />
                        <figcaption className="absolute px-7 text-lg text-white bottom-5">
                            <h2>Latest Mens Ware For You</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>SHOP NOW</button>
                        </figcaption>
                    </figure>
                </Link>

                <Link to="/kids">
                    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer hover:grayscale-0">
                        <img
                            className="rounded-lg"
                            src={p_img38}
                            alt="image description"
                        />
                        <figcaption className="absolute px-7 text-lg text-white bottom-5">
                            <h2>Exclusive Offer On Kids Ware</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>SHOP NOW</button>
                        </figcaption>
                    </figure>
                </Link>

            </div>

        </div>
    )
}

export default Category
