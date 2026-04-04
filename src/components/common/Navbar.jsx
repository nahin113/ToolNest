import { Menu, ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = ({cart}) => {
  return (
    <div className="sticky top-0 z-1 border-b border-gray-100">
      <div className="navbar bg-base-100 shadow-sm">
        <div className=" w-full lg:w-8/12 mx-auto flex justify-between items-center">
          <div className="navbar-start">
            <div className="dropdown lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <Menu className="h-6 w-6" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 font-medium"
              >
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
            <h1 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-5xl p-4 hidden lg:block">
              DigiTools
            </h1>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-[32px] font-medium">
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
            <div className="indicator">
              {cart.length > 0 && (
                <span className="indicator-item badge badge-secondary h-5 w-5 rounded-full text-[10px] border-none bg-red-500">
                  {cart.length}
                </span>
              )}
              <button className="btn btn-ghost btn-circle">
                <ShoppingCart className="h-6 w-6"></ShoppingCart>
              </button>
            </div>
            <a className="cursor-pointer btn btn-ghost">Login</a>
            <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 rounded-[1000px] hidden lg:flex justify-center items-center transition-all duration-400 hover:scale-105 active:scale-95">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
