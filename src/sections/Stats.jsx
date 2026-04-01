import React from 'react';

const Stats = () => {
    return (
      <div className="px-[200px] py-[60px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center items-center">
        <div className='space-x-3 px-[124.33px]'>
          <h1 className="font-extrabold text-[#ffffff] text-[60px]">50K+</h1>
          <p className="text-[24px] font-regular text-[#ffffff] ">Active Users</p>
        </div>
        <div className="divider divider-horizontal divider-start before:bg-white after:bg-white opacity-100"></div>
        <div className='space-x-3 px-[124.33px]'>
          <h1 className="font-extrabold text-[#ffffff] text-[60px]">200+</h1>
          <p className="text-[24px] font-regular text-[#ffffff] ">Premium Tools</p>
        </div>
        <div className="divider divider-horizontal divider-start before:bg-white after:bg-white opacity-100"></div>
        <div className='space-x-3 px-[124.33px]'>
          <h1 className="font-extrabold text-[#ffffff] text-[60px]">4.9</h1>
          <p className="text-[24px] font-regular text-[#ffffff] text-center">Rating</p>
        </div>
      </div>
    );
};

export default Stats;