import React from "react";

const Footer = () => {
  return (
    <div className="pt-[60px] lg:pt-[120px] pb-[30px] bg-[#101727] text-[#fafafa]">
      <div className="footer-start w-11/12 lg:w-8/12 mx-auto grid md:grid-cols-3 lg:grid-cols-6 gap-[47.5px] space-y-10 lg:space-y-0">
        <div className="space-y-4 col-span-2">
          <h1 className="text-3xl font-bold">DigiTools</h1>
          <p className="text-[16px]">
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>
        <ul className="space-y-4">
          <li className="text-[20px] font-bold">
            <a className="cursor-pointer">Product</a>
          </li>
          <li>
            <a className="cursor-pointer">Features</a>
          </li>
          <li>
            <a className="cursor-pointer">Pricing</a>
          </li>
          <li>
            <a className="cursor-pointer">Templates</a>
          </li>
          <li>
            <a className="cursor-pointer">Integrations</a>
          </li>
        </ul>
        <ul className="space-y-4">
          <li className="text-[20px] font-bold">
            <a className="cursor-pointer">Company</a>
          </li>
          <li>
            <a className="cursor-pointer">About</a>
          </li>
          <li>
            <a className="cursor-pointer">Blog</a>
          </li>
          <li>
            <a className="cursor-pointer">Careers</a>
          </li>
          <li>
            <a className="cursor-pointer">Press</a>
          </li>
        </ul>
        <ul className="space-y-4">
          <li className="text-[20px] font-bold">
            <a className="cursor-pointer">Resources</a>
          </li>
          <li>
            <a className="cursor-pointer">Documentation</a>
          </li>
          <li>
            <a className="cursor-pointer">Help Center</a>
          </li>
          <li>
            <a className="cursor-pointer">Community</a>
          </li>
          <li>
            <a className="cursor-pointer">Contact</a>
          </li>
        </ul>
        <div className="space-y-4">
          <h1 className="text-[20px] font-bold">Social Links</h1>
          <div className="links flex justify-left items-center gap-[12px]">
            <div className="rounded-full w-[40px] p-[12px] bg-white cursor-pointer">
              <a className="flex justify-center items-center" href="">
                <i className="fa-brands fa-square-instagram text-[#101727]"></i>
              </a>
            </div>
            <div className="rounded-full w-[40px] p-[12px] bg-white cursor-pointer">
              <a className="flex justify-center items-center" href="">
                <i className="fa-brands fa-square-facebook text-[#101727]"></i>
              </a>
            </div>
            <div className="rounded-full w-[40px] p-[12px] bg-white cursor-pointer">
              <a className="flex justify-center items-center" href="">
                <i className="fa-brands fa-x-twitter text-[#101727]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="divider lg:w-8/12 mx-auto bg-gray-500 h-px mt-[80px] mb-[30px]"></div>
      <div className="footer-end w-11/12 lg:w-8/12 mx-auto flex justify-between items-center">
        <p className="flex-1">&copy; 2026 Digitools. All rights reserved.</p>
        <ul className="flex justify-between items-center gap-[32px]">
          <li>
            <a className="cursor-pointer">Privacy Policy</a>
          </li>
          <li>
            <a className="cursor-pointer">Terms of Service</a>
          </li>
          <li>
            <a className="cursor-pointer">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
