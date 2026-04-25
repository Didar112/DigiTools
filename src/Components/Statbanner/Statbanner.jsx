import React from 'react';

const Statbanner = () => {
    return (
        <div>
            <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-white/30">
        <div className="flex-1 text-center py-6 sm:py-0 sm:px-12">
          <p className="text-5xl font-extrabold text-white">50K+</p>
          <p className="text-white/80 mt-1">Active Users</p>
        </div>
        <div className="flex-1 text-center py-6 sm:py-0 sm:px-12">
          <p className="text-5xl font-extrabold text-white">200+</p>
          <p className="text-white/80 mt-1">Premium Tools</p>
        </div>
        <div className="flex-1 text-center py-6 sm:py-0 sm:px-12">
          <p className="text-5xl font-extrabold text-white">4.9</p>
          <p className="text-white/80 mt-1">Rating</p>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Statbanner;