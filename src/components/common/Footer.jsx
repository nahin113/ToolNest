import React from "react";

const Footer = () => {
  return (
    <div className="pt-[120px] pb-[30px] bg-[#101727] text-[#fafafa]">
      <div className="footer-start w-8/12 mx-auto flex justify-between items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">DigiTools</h1>
          <p className="text-[16px]">
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>
        <div className="space-y-4">
          <h1 className="text-[20px] font-bold">Product</h1>
          <p>Features</p>
          <p>Pricing</p>
          <p>Templates</p>
          <p>Integrations</p>
        </div>
        <div className="space-y-4">
          <h1 className="text-[20px] font-bold">Company</h1>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Press</p>
        </div>
        <div className="space-y-4">
          <h1 className="text-[20px] font-bold">Resources</h1>
          <p>Documentation</p>
          <p>Help Center</p>
          <p>Community</p>
          <p>Contact</p>
        </div>
        <div className="space-y-4">
          <h1 className="text-[20px] font-bold">Social Links</h1>
          <div className="links flex justify-center items-center gap-[12px]">
            <div className="rounded-full w-[40px] p-[12px] bg-white">
              <a className="flex justify-center items-center" href="">
                <i className="fa-brands fa-square-instagram text-[#101727]"></i>
              </a>
            </div>
            <div className="rounded-full w-[40px] p-[12px] bg-white">
              <a className="flex justify-center items-center" href="">
                <i className="fa-brands fa-square-facebook text-[#101727]"></i>
              </a>
            </div>
            <div className="rounded-full w-[40px] p-[12px] bg-white">
              <a className="flex justify-center items-center" href="">
                <i className="fa-brands fa-x-twitter text-[#101727]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="divider w-8/12 mx-auto bg-gray-500 h-px mt-[80px] mb-[30px]"></div>
      <div className="footer-end w-8/12 mx-auto flex justify-between items-center">
        <p className="flex-1">&copy; 2026 Digitools. All rights reserved.</p>
        <ul className="flex justify-between items-center gap-[32px]">
          <li>Privacy Policy </li>
          <li>Terms of Service</li>
          <li>Cookies</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
