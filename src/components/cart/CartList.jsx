import React from "react";
import { toast } from "react-toastify";

const CartList = ({cartProduct,setCart,cart }) => {
  
  const handleRemoveCart = ()=> {
    const filterCart = cart.filter(c=> cartProduct.name != c.name)
    toast.error(`${cartProduct.name} removed from the Cart`);
    setCart(filterCart)
  }

  return (
    <div className="p-5 bg-white rounded-xl shadow-sm mb-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-100 p-[10px]">
            <img
              src={cartProduct.icon}
              alt={cartProduct.name}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="text-left">
            <h1 className="font-bold text-[#101727]">{cartProduct.name}</h1>
            <p className="text-sm text-gray-500">${cartProduct.price}</p>
          </div>
        </div>
        <button onClick={handleRemoveCart} className="btn btn-ghost text-red-500 hover:bg-red-50">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartList;
