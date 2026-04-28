import React from 'react';
import NoData from '../NoData/NoData';

const Cart = ({ setAddedcart, addedCart }) => {

  let total = 0;
  for (let item of addedCart) {
    total = total + item.price;
  }

  const handleRemove = (id) => {
    setAddedcart(addedCart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setAddedcart([])
  };

  if (addedCart.length === 0) return <NoData />;

  return (
    <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-bold mb-4">Your Cart</h2>

      {addedCart.map(item => (
        <div key={item.id} className="flex items-center gap-3 bg-base-200 rounded-xl px-4 py-3 mb-3">
          <div className="w-10 h-10 bg-base-100 border border-base-300 rounded-lg flex items-center justify-center text-xl">
            {item.icon}
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">{item.title}</p>
            <p className="text-xs text-base-content/60">${item.price}</p>
          </div>
          <button
            type="button"
            onClick={() => handleRemove(item.id)}
            className="text-xs font-medium text-error hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex justify-between items-center mt-4 mb-3">
        <span className="text-sm text-base-content/60">Total:</span>
        <span className="text-xl font-bold">${total}</span>
      </div>

      <button
        type="button"
        onClick={handleCheckout}
        className="btn btn-primary btn-block rounded-full"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;