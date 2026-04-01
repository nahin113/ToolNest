import { Check } from 'lucide-react';
import React from 'react';

const ProductList = ({product}) => {
    console.log(product)
    return (
      <div>
        <div className="w-full max-w-sm rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-50 bg-[#F9FAFB] p-3 text-3xl">
              <img src={product.icon} alt={product.name} />
            </div>
            {product.tag && (
              <span className="rounded-full bg-orange-50 px-4 py-1 text-sm font-medium text-orange-500 capitalize">
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
            <span className="text-[#627382] text-sm italic lowercase">
              /{product.period === "monthly" ? "mo" : "yr"}
            </span>
          </div>
          <ul className="space-y-4">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-[#627382]"
              >
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-4 text-center font-bold text-white transition-opacity hover:opacity-90">
            Buy Now
          </button>
        </div>
      </div>
    );
};

export default ProductList;