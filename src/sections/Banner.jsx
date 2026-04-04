import React from 'react';
import bannerImg from '../assets/banner.png'
import circleIcon from '../assets/circle.png'
import { Play } from 'lucide-react';

const Banner = () => {
    return (
      <div className="w-11/12 lg:w-8/12 mx-auto lg:flex justify-between items-center py-[85px]">
        <div className="banner-text space-y-4">
          <div className="px-4 py-2 bg-[#E1E7FF] gap-[5px] flex justify-center items-center rounded-[1000px] md:w-1/2">
            <img src={circleIcon} alt="circle icon" />
            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h1 className="text-[#101727] text-5xl  lg:text-[72px] font-extrabold">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[#627382] text-[18px]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br /> software—all in one place. Start creating faster today.{" "}
            <br /> Explore Products
          </p>
          <div className="flex items-center gap-4">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 rounded-[10000px] transition-all duration-400 hover:scale-105 active:scale-95">
              Explore Products
            </button>
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-[#9514FA] rounded-[1000px] p-4 transition-all duration-400 hover:scale-105 active:scale-95">
              <Play color="#9514FA" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="banner-img">
          <img className='w-11/12 py-8 lg:py-0' src={bannerImg} alt="banner image" />
        </div>
      </div>
    );
};

export default Banner;