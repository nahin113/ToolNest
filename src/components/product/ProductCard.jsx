import React, { use, useState } from 'react';
import ProductList from './ProductList';

const ProductCard = ({productData,cart,setCart,cartTotal,setCartTotal}) => {
    const productList = use(productData)


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] pt-[40px]'>
            {productList.map(product=> <ProductList key={product.id} product={product} cart={cart} setCart = {setCart} cartTotal = {cartTotal} setCartTotal = {setCartTotal}></ProductList>)}
        </div>
    );
};

export default ProductCard;