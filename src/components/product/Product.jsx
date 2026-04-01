import React, { Suspense } from 'react';
import ProductCard from './ProductCard';

const Product = () => {

    const fetchProduct = async ()=> {
        const res = await fetch('/data.json')
        return res.json()
    }

    const productData = fetchProduct()

    return (
      <div className="w-8/12 mx-auto text-center space-y-4">
        <h1 className="text-[48px] font-extrabold text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className="flex justify-center items-center w-[240px] mx-auto rounded-[100px] bg-base-200">
          <button className="btn rounded-[1000px] py-[14px] px-[24px] w-1/2 border-none">
            Products
          </button>
          <button className="btn rounded-[1000px] py-[14px] px-[24px] w-1/2 border-none">
            Cart(2)
          </button>
        </div>
        <Suspense fallback="<span className='loading loading-spinner loading-lg flex justify-center items-center h-[300px]'></span>">
            <ProductCard productData={productData}></ProductCard>
        </Suspense>
      </div>
    );
};

export default Product;