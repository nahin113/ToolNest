import { Check } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
      <div className="w-10/12 mx-auto text-center space-y-[40px] py-[120px]">
        <div className="space-y-4">
          <h1 className="text-[#101727] text-[48px] font-extrabold">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#627382] text-[16px]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="w-10/12 mx-auto grid grid-cols-3 gap-[30px]">
          <div className="starter text-left space-y-[24px] p-[24px] shadow-md bg-base-200 rounded-[16px]">
            <div>
              <h1 className="text-[24px] font-bold text-[#101727]">Starter</h1>
              <p className="text-[16px] text-[#627382]">
                Perfect for getting started
              </p>
            </div>
            <p className="text-[20px]">
              <span className="text-[#101727] font-bold text-[40px]">$0</span>
              /Month
            </p>
            <ul className="min-h-[160px] font-medium text-[#627382]">
              <li className="flex gap-2">
                <Check className="text-[#30b868]"></Check>Access to 10 free
                tools
              </li>
              <li className="flex gap-2">
                <Check className="text-[#30b868]"></Check>Basic templates
              </li>
              <li className="flex gap-2">
                <Check className="text-[#30b868]"></Check>Community support
              </li>
              <li className="flex gap-2">
                <Check className="text-[#30b868]"></Check>1 project per month
              </li>
            </ul>
            <button className="btn py-4 font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 rounded-[10000px] w-full">
              Get Started Free
            </button>
          </div>

          <div className="pro relative shadow-md text-left space-y-[24px] p-[24px] bg-base-300 rounded-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#fef3c6] px-5 py-1.5 text-xs font-bold text-[#bb4d00]  border border-[#fef3c6]">
              Most Popular
            </div>
            <div>
              <h1 className="text-[24px] font-bold">Pro</h1>
              <p className="text-[16px]">Best for professionals</p>
            </div>
            <p className="text-[20px]">
              <span className="font-bold text-[40px]">$29</span>
              /Month
            </p>
            <ul className="min-h-[160px] font-medium">
              <li className="flex gap-2">
                <Check></Check>Access to all premium tools
              </li>
              <li className="flex gap-2">
                <Check></Check>Unlimited templates
              </li>
              <li className="flex gap-2">
                <Check></Check>Priority support
              </li>
              <li className="flex gap-2">
                <Check></Check>Unlimited projects
              </li>
              <li className="flex gap-2">
                <Check></Check>Cloud sync
              </li>
              <li className="flex gap-2">
                <Check></Check>Advanced analytics
              </li>
            </ul>
            <button className="btn py-4 font-bold bg-white p-4 rounded-[10000px] w-full shadow-none">
              <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold">
                Start Pro Trial
              </p>
            </button>
          </div>

          <div className="enterprise text-left space-y-[24px] p-[24px] bg-base-200 shadow-md rounded-[16px]">
            <div>
              <h1 className="text-[24px] font-bold text-[#101727]">
                Enterprise
              </h1>
              <p className="text-[16px] text-[#627382]">
                For teams and businesses
              </p>
            </div>
            <p className="text-[20px]">
              <span className="text-[#101727] font-bold text-[40px]">$99</span>
              /Month
            </p>
            <ul className="min-h-[160px] font-medium text-[#627382]">
              <li className="flex gap-2">
                <Check className="text-[#30b868]"></Check>Everything in Pro
              </li>
              <li className="flex gap-2">
                <Check className="text-[#30b868]"></Check>Team collaboration
              </li>
              <li className="flex gap-2">
                <Check className="text-[#30b868]"></Check>Custom integrations
              </li>
              <li className="flex gap-2">
                <Check className="text-[#30b868]"></Check>Dedicated support
              </li>
              <li className="flex gap-2">
                <Check className="text-[#30b868]"></Check>SLA guarantee
              </li>
              <li className="flex gap-2">
                <Check className="text-[#30b868]"></Check>Custom branding
              </li>
            </ul>
            <button className="btn py-4 font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-4 rounded-[10000px] w-full">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    );
};

export default Pricing;