import React from 'react';



const AllCard = ({data}) => {

    const products=data
    return (


    <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10'>
        {
            products.map(product=>{
               console.log(product)
               return        <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <div className="flex justify-between items-start">
      <span className="text-3xl">{product.icon}</span>
      <span className="badge badge-warning badge-sm">{product.badge}</span>
    </div>
    <h2 className="text-xl font-bold mt-2">{product.title}</h2>
    <p className="text-xs text-base-content/60">
      {product.description}
    </p>
    <div className="mt-2">
      <span className="text-3xl font-bold">${product.price}</span>
      <span className="text-sm text-base-content/60">/Mo</span>
    </div>
    <ul className="mt-4 flex flex-col gap-2 text-xs">
      {product.features.map((feature) => (
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-full">Buy Now</button>
    </div>
  </div>
</div>
            })
        }


 

</div>

    );
};

export default AllCard;