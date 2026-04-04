import React, { Suspense, useState } from 'react';
import ProductCard from './ProductCard';
import CartItem from '../cart/CartItem';

const Product = ({cart,setCart}) => {

    const fetchProduct = async ()=> {
        const res = await fetch('/data.json')
        return res.json()
    }

    const [isActive, setIsActive] = useState(true);
    const [cartTotal,setCartTotal] = useState(0)

    const setActive = (val)=> {
        if(val=='Products') setIsActive(true)
        else setIsActive(false)
    }

    const productData = fetchProduct()

    return (
      <div className="w-full lg:w-8/12 mx-auto text-center space-y-4 py-[120px]">
        <h1 className="text-[48px] font-extrabold text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="flex justify-center items-center w-[240px] mx-auto rounded-[100px] bg-base-200">
          <button
            onClick={() => {
              setActive("Products");
            }}
            className={`btn rounded-[1000px] py-[14px] px-[24px] w-1/2 border-none ${
              isActive &&
              "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => {
              setActive("Cart");
            }}
            className={`btn rounded-[1000px] py-[14px] px-[24px] w-1/2 border-none ${
              isActive === false
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : ""
            }`}
          >
            Cart({cart.length})
          </button>
        </div>
        <Suspense
          fallback={
            <div className="h-[300px] w-full flex items-center justify-center">
              <span className="loading loading-spinner w-20 h-20 text-[#9514Fa]"></span>
            </div>
          }
        >
          {isActive ? (
            <ProductCard
              productData={productData}
              cart={cart}
              setCart={setCart}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
            ></ProductCard>
          ) : (
            <CartItem
              cart={cart}
              setCart={setCart}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
            ></CartItem>
          )}
        </Suspense>
      </div>
    );
};

export default Product;