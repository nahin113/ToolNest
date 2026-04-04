import React from 'react';
import userImg from '../assets/user.png'
import cubeImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const Steps = () => {
    return (
      <div className="py-[60px] lg:py-[120px] bg-base-300">
        <div className="lg:w-8/12 mx-auto text-center space-y-[40px]">
          <div className='space-y-[16px]'>
            <h1 className="text-[#101727] text-[48px] font-extrabold">
              Get Started in 3 Steps
            </h1>
            <p className="text-[#627382] text-[16px]">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
            <div className="relative w-full rounded-[16px] p-[24px] shadow-md bg-white">
              <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#4F39F6] to-[#9514FA] text-xs font-bold text-white shadow-sm">
                01
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-[16px] py-[90px] ">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F5F3FF]">
                  <img src={userImg} alt="user image" />
                </div>
                <h3 className=" text-2xl font-bold text-[#101727]">
                  Create Account
                </h3>
                <p className="text-[16px] text-[#627382]">
                  Sign up for free in seconds. No credit card <br /> required to
                  get started.
                </p>
              </div>
            </div>
            <div className="relative w-full rounded-[16px] p-[24px] shadow-md bg-white">
              <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#4F39F6] to-[#9514FA] text-xs font-bold text-white shadow-sm">
                02
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-[16px] pt-[90px]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F5F3FF]">
                  <img src={cubeImg} alt="user image" />
                </div>
                <h3 className=" text-2xl font-bold text-[#101727]">
                  Choose Products
                </h3>
                <p className="text-[16px] text-[#627382]">
                  Browse our catalog and select the tools <br /> that fit your
                  needs.
                </p>
              </div>
            </div>
            <div className="relative w-full rounded-[16px] p-[24px] shadow-md bg-white">
              <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#4F39F6] to-[#9514FA] text-xs font-bold text-white shadow-sm">
                03
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-[16px] pt-[90px]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F5F3FF]">
                  <img src={rocketImg} alt="user image" />
                </div>
                <h3 className=" text-2xl font-bold text-[#101727]">
                  Start Creating
                </h3>
                <p className="text-[16px] text-[#627382]">
                  Download and start using your premium <br /> tools
                  immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Steps;