import React from 'react'
import logo from "../../assets/logo(2).png"
import search_icon from "../../assets/search_icon.png"
import cart_icon from "../../assets/cart_icon.png"
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useCart } from '../Cart/Cartcontext'

function Navbar() {

    const { cartItems } = useCart();   // get items from context

    // total quantity (sum of all product quantities)
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} alt='' className="w-[120px] h-[30px]" />

                    </a></Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <div id="search" className="mr-10">
                        <input type='text' placeholder='search...' />
                        <img src={search_icon} alt='' />
                    </div>
                    <Link to="men"><a className="mr-5 hover:text-gray-100">Men</a></Link>
                    <Link to="women"><a className="mr-5 hover:text-gray-100">Women</a></Link>
                    <Link to="kids"><a className="mr-5 hover:text-gray-100">Kids</a></Link>
                </nav>

                <Link to="/cart">
                    <div id="cart">
                        <img src={cart_icon} alt='' />
                        <sup>{totalItems}</sup>
                        <p>Cart</p>
                    </div>
                </Link>

                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Login
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>

    )
}

export default Navbar
