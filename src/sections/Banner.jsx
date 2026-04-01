import React from 'react';
import bannerImg from '../assets/banner.png'
import circleIcon from '../assets/circle.png'
import { Play } from 'lucide-react';

const Banner = () => {
    return (
      <div className="w-8/12 mx-auto flex justify-between items-center">
        <div className="banner-text space-y-4">
          <div className="px-4 py-2 bg-[#E1E7FF] gap-[5px] flex justify-center items-center rounded-[1000px] w-1/2">
            <img src={circleIcon} alt="circle icon" />
            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h1 className="text-[#101727] text-[72px] font-extrabold">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[#627382] text-[18px]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br /> software—all in one place. Start creating faster today.{" "}
            <br /> Explore Products
          </p>
          <div className="flex items-center gap-4">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 rounded-[10000px] p-4">
              Explore Products
            </button>
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-[#9514FA] rounded-[1000px] p-4">
              <Play color="#9514FA" />
              Watch Demo
            </button>
          </div>
        </div>
        <div className="banner-img">
          <img src={bannerImg} alt="banner image" />
        </div>
      </div>
    );
};

export default Banner;