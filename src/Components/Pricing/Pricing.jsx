import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  return (
    <section className="pt-30 pb-30 ">
      <div className="container mx-auto">

        <h2 className="font-extrabold text-[48px] text-center text-[#101727]">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-3 text-center text-[16px] mb-10 text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="flex m-4 md:m-0 lg:flex-row flex-col gap-10 mt-10 items-stretch">

    
          <div className="flex-1 relative bg-[#F9FAFC] rounded-3xl shadow-lg p-10 flex flex-col">
            <h3 className="text-2xl font-bold text-[#101727]">Starter</h3>
            <p className="text-sm mt-1 mb-6 text-[#627382]">Perfect for getting started</p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-[#101727]">$0</span>
              <span className="text-sm ml-1 text-[#627382]">/Month</span>
            </div>
            <ul className="flex flex-col gap-3 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-violet-600" /><span className="text-[#627382]">Access to 10 free tools</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-violet-600" /><span className="text-[#627382]">Basic templates</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-violet-600" /><span className="text-[#627382]">Community support</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-violet-600" /><span className="text-[#627382]">1 project per month</span></li>
            </ul>
            <button className="w-full py-3 rounded-full font-semibold text-sm bg-violet-600 text-white hover:bg-violet-700 cursor-pointer">
              Get Started Free
            </button>
          </div>

      
          <div className="flex-1 relative bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl shadow-lg p-10 flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="badge rounded-full bg-[#FEF3C6] text-[#BB4D00] text-[14px] font-semibold px-4 py-3">Most Popular</div>
            </div>
            <h3 className="text-2xl font-bold text-white">Pro</h3>
            <p className="text-sm mt-1 mb-6 text-violet-200">Best for professionals</p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-white">$29</span>
              <span className="text-sm ml-1 text-violet-200">/Month</span>
            </div>
            <ul className="flex flex-col gap-3 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-white" /><span className="text-white">Access to all premium tools</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-white" /><span className="text-white">Unlimited templates</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-white" /><span className="text-white">Priority support</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-white" /><span className="text-white">Unlimited projects</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-white" /><span className="text-white">Cloud sync</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-white" /><span className="text-white">Advanced analytics</span></li>
            </ul>
            <button className="w-full py-3 rounded-full font-semibold text-sm bg-white text-violet-600 hover:bg-violet-50 cursor-pointer">
              Start Pro Trial
            </button>
          </div>

      
          <div className="flex-1 relative bg-[#F9FAFC] rounded-3xl shadow-lg p-10 flex flex-col">
            <h3 className="text-2xl font-bold text-[#101727]">Enterprise</h3>
            <p className="text-sm mt-1 mb-6 text-[#627382]">For teams and businesses</p>
            <div className="mb-6">
              <span className="text-5xl font-extrabold text-[#101727]">$99</span>
              <span className="text-sm ml-1 text-[#627382]">/Month</span>
            </div>
            <ul className="flex flex-col gap-3 mb-10 flex-1">
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-violet-600" /><span className="text-[#627382]">Everything in Pro</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-violet-600" /><span className="text-[#627382]">Team collaboration</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-violet-600" /><span className="text-[#627382]">Custom integrations</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-violet-600" /><span className="text-[#627382]">Dedicated support</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-violet-600" /><span className="text-[#627382]">SLA guarantee</span></li>
              <li className="flex items-center gap-3 text-sm"><FaCheck className="shrink-0 text-violet-600" /><span className="text-[#627382]">Custom branding</span></li>
            </ul>
            <button className="w-full py-3 rounded-full font-semibold text-sm bg-violet-600 text-white hover:bg-violet-700 cursor-pointer">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;