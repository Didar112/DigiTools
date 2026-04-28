import React, { use } from 'react';

import user from "../../assets/products/user.png"
import rocket from "../../assets/products/rocket.png"
import product from "../../assets/products/package.png"






const Started = () => {
    return (
      <section className='pt-30 pb-30 bg-[#F9FAFC]'>
        <div className='container  mx-auto'>

            <h2 className='font-extrabold text-[48px] text-center text-[#101727]'>Get Started in 3 Steps</h2>
            <p className='mt-3 text-center text-[16px] mb-10 text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>

            <div className='flex  m-4 md:m-0 lg:flex-row flex-col   gap-10 mt-10'>

                  {/* card desing  */}

                  <div class="flex-1 relative bg-white rounded-3xl shadow-lg p-10  flex flex-col items-center text-center">

  
  <div class="absolute top-4 right-4 w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center">
    <span class="text-white text-xs font-bold tracking-wide">01</span>
  </div>

  
  <div class="w-24 h-24 rounded-full bg-violet-100 flex items-center justify-center mb-6">
    
      <img src={user} alt="" />
    
  </div>

 
  <h2 class="text-gray-900 text-2xl font-bold mb-3 tracking-tight">Choose Products</h2>
  <p class="text-gray-400 text-sm leading-relaxed">Browse our catalog and select the tools that fit your needs.</p>

                  </div>
                  <div class="flex-1 relative bg-white rounded-3xl shadow-lg p-10  flex flex-col items-center text-center">

  
  <div class="absolute top-4 right-4 w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center">
    <span class="text-white text-xs font-bold tracking-wide">02</span>
  </div>

  
  <div class="w-24 h-24 rounded-full bg-violet-100 flex items-center justify-center mb-6">
    
      <img src={product} alt="" />
    
  </div>

 
  <h2 class="text-gray-900 text-2xl font-bold mb-3 tracking-tight">Start Creating</h2>
  <p class="text-gray-400 text-sm leading-relaxed">Download and start using your premium tools immediately.</p>

                  </div>
                  <div class="flex-1 relative bg-white rounded-3xl shadow-lg p-10  flex flex-col items-center text-center">

  
  <div class="absolute top-4 right-4 w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center">
    <span class="text-white text-xs font-bold tracking-wide">03</span>
  </div>

  
  <div class="w-24 h-24 rounded-full bg-violet-100 flex items-center justify-center mb-6">
    
      <img src={rocket} alt="" />
    
  </div>

 
  <h2 class="text-gray-900 text-2xl font-bold mb-3 tracking-tight">Create Account</h2>
  <p class="text-gray-400 text-sm leading-relaxed">Sign up for free in seconds. No credit card required to get started.</p>

                  </div>

            </div>


        </div>
      </section>
    );
};

export default Started;