import React from "react";

const StatsEnd = () => {
  return (
    <div className="py-[120px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-center space-y-[40px]">
      <div className="space-y-4">
        <h1 className="text-white text-[40px] font-extrabold">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-white text-[16px]">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex justify-center items-center gap-[16px]">
          <button className="btn transition-all duration-400 hover:scale-105 active:scale-95 bg-white rounded-[100px] shadow-none">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Explore Products
            </span>
          </button>
          <button className=" btn transition-all duration-400 hover:scale-105 active:scale-95 bg-transparent rounded-[100px] text-white shadow-none">
            View Pricing
          </button>
        </div>
        <p className="text-white text-[16px]">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default StatsEnd;
