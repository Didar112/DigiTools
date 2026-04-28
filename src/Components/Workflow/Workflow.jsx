import React from 'react';

const Workflow = () => {
    return (

        <section className='pt-30 pb-30 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
        <div className='mx-auto p-5 md:p-0'>

            <h3 className='font-extrabold text-white text-[40px] text-center'>Ready to Transform Your Workflow?</h3>
            <p className='text-center mt-2 text-white font-[50] text-[16px]'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>

            <div className=' flex items-center justify-center gap-4 mt-8'>
                <button className='btn btn-regular rounded-full text-[#9514FA]'>
                    Explore Products
                </button>
                <button className='btn btn-primary border border-white btn-outline rounded-full text-white'>
                    View Pricing
                </button>
            </div>

            <p className='mt-4 text-center text-white'><small>14-day free trial • No credit card required • Cancel anytime</small></p>

            
        </div>
        </section>
    );
};

export default Workflow;