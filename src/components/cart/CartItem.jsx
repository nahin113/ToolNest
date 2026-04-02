import React, { use } from 'react';
import CartList from './CartList';
import { toast } from 'react-toastify';
import cartImg from '../../assets/products/shopping-cart.png';
import { ShoppingCart } from 'lucide-react';

const CartItem = ({cart,setCart,cartTotal,setCartTotal}) => {
    console.log(cart)
    const handleCheckout = ()=> {
      setCart([])
      setCartTotal(0)
      toast.success("Checkout Successful")
    }
    return (
      <div className="w-10/12 mx-auto bg-base-300 rounded-[16px] p-[40px] space-y-[24px]">
        <h1 className="text-[24px] text-[#101727] font-bold">Your Cart</h1>

        {cart.length > 0 ? (
          <>
            <div className="space-y-4">
              {cart.map((cartProduct) => (
                <CartList
                  key={cartProduct.id}
                  cartProduct={cartProduct}
                  setCart={setCart}
                  cart={cart}
                />
              ))}
            </div>

            <div className="flex justify-between items-center border-t border-gray-400 pt-4">
              <p className="font-medium text-gray-700">Total</p>
              <p className="text-xl font-bold text-[#101727]">
                ${cartTotal.toFixed(2)}
              </p>
            </div>

            <button
              onClick={handleCheckout}
              className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 rounded-full border-none hover:opacity-90"
            >
              Proceed To Checkout
            </button>
          </>
        ) : (
          <div className="py-10 text-center flex justify-center items-center flex-col">
            <ShoppingCart size={200} />
            <p className="text-4xl text-gray-400 mt-2">Your Cart is Empty</p>
          </div>
        )}
      </div>
    );
};

export default CartItem;