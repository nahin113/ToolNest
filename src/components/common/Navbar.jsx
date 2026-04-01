import { ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="w-8/12 mx-auto flex justify-between items-center">
          <div className="navbar-start">
            <h1 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-3xl">
              DigiTools
            </h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-[32px]">
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-4">
            <ShoppingCart className="btn border-none p-3"></ShoppingCart>
            <p>Login</p>
            <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 rounded-[10000px]">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
