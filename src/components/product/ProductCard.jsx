import React, { use } from 'react';
import ProductList from './ProductList';

const ProductCard = ({productData}) => {
    const productList = use(productData)
    return (
        <div className='grid grid-cols-3 gap-[30px]'>
            {productList.map(product=> <ProductList product={product}></ProductList>)}
        </div>
    );
};

export default ProductCard;