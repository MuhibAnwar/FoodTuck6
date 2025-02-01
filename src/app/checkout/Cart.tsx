"use client";
import React, { useState } from "react";



const Cart = () => {
  const [isSameAsShipping, setShipping] = useState(false);

  const handleCheckboxChange = () => {
    setShipping(!isSameAsShipping);
  };

 

  return (
    <div className="flex flex-col lg:flex-row p-6 lg:p-20 gap-10" style={{ fontFamily: "sans-serif" }}>
      {/* Shipping Address Section */}
      <div className="flex flex-col flex-1">
        <h2 className="text-xl lg:text-2xl font-semibold mb-6">Shipping Address</h2>
        <form className="mb-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 p-2 text-[16px] border border-[#ddd]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 p-2 text-[16px] border border-[#ddd]"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 p-2 text-[16px] border border-[#ddd]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 p-2 text-[16px] border border-[#ddd]"
            />
          </div>
       
         
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
           
            <input
              type="text"
              placeholder="District"
              className="flex-1 p-2 text-[16px] border border-[#ddd]"
            />
          </div>
          <input
            type="text"
            placeholder="Full Address"
            className="w-full p-2 text-[16px] mb-4 border border-[#ddd]"
          />
          <br/>
          <h2 className="text-2xl text-black text-bold">Billing address</h2>
          <br/>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              checked={isSameAsShipping}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label>Same as shipping</label>
          </div>
        </form>
        <div className="flex justify-between">
        <a href="/shoplist"><button className="px-4 py-2 bg-[#ddd] border cursor-pointer">
            Back to Cart
          </button>
          </a>
          <button
  className="px-4 py-2 bg-[#ffa500] text-white border cursor-pointer"
  onClick={() => {
    alert('ORDER CONFIRMED'); 
  }}
>
  Proceed to Shipping
</button>
        </div>
      </div>

    
    
    </div>
  );
};

export default Cart;
