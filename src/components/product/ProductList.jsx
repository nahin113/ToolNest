import { Check } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductList = ({product,cart,setCart,cartTotal, setCartTotal}) => {
    
    const inCart = cart.some(item => item.name === product.name);

    const handleCart = () => {
        if (inCart) return;
        toast.success(`${product.name} added to Cart`);
        setCart([...cart,product])
        const total = cartTotal + Number(product.price);
        setCartTotal(total)
      };

    const productState = ()=> {
      if(product.tag === 'Popular') return "bg-[#e1e7ff] text-[#4f39f6]";
      else if(product.tag === 'New') return "bg-[#dbfce7] text-[#0a883e]";
      else return "bg-[#fef3c6] text-[#bb4d00]";
    }

    return (
      <div>
        <div className="w-full rounded-[16px] border border-gray-100 bg-white p-6 shadow-md space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-50 bg-[#F9FAFB] p-3 text-3xl">
              <img src={product.icon} alt={product.name} />
            </div>
            {product.tag && (
              <span className={`rounded-full px-4 py-1 text-sm font-medium ${productState()}`}>
                {product.tag}
              </span>
            )}
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-bold text-[#101727]">
              {product.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#627382]">
              {product.description}
            </p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-[#101727]">
              ${product.price}
            </span>
            <span className="text-[#627382] text-sm">
              /{product.period === "monthly" ? "Mo" : "One-Time"}
            </span>
          </div>
          <ul className="space-y-4">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-[#627382]"
              >
                <Check className="h-5 w-5 text-green-500"></Check>
                <span className="text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          <button
          disabled={inCart}
            onClick={handleCart}
            className={`flex items-center justify-center gap-2 w-full rounded-full py-4 text-center font-bold text-white transition-all duration-300
    ${
      inCart
        ? "bg-emerald-500 shadow-emerald-100"
        : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 shadow-md"
    }`}
          >
            {inCart ? (
              <>
                <Check></Check>
                <span>Added to Cart!</span>
              </>
            ) : (
              "Buy Now"
            )}
          </button>
        </div>
      </div>
    );
};

export default ProductList;