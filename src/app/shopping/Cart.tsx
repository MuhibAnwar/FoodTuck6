'use client';
import { useState } from 'react';
import Image from 'next/image';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Burger",
      price: 50,
      quantity: 1,
      total: 50,
      image: "/c1.png",
    },
    {
      id: 2,
      name: "Fresh Lime",
      price: 45,
      quantity: 1,
      total: 45,
      image: "/c2.png",
    },
    {
      id: 3,
      name: "Pizza",
      price: 80,
      quantity: 1,
      total: 80,
      image: "/c3.png",
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      price: 30,
      quantity: 1,
      total: 30,
      image: "/c4.png",
    },
    {
      id: 5,
      name: "Cheese Butter",
      price: 60,
      quantity: 1,
      total: 60,
      image: "/c5.png",
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
              total: Math.max(1, item.quantity + delta) * item.price,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.total, 0);
  const shippingCharge = 50; // Example shipping charge
  const totalAmount = cartSubtotal + shippingCharge;

  return (
    <div className="container mx-auto p-5 mt-10">
      <table className="w-full border-collapse mb-10 mx-auto">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Product</th>
            <th className="text-left py-2">Price</th>
            <th className="text-left py-2">Quantity</th>
            <th className="text-left py-2">Total</th>
            <th className="text-left py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2 flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded mr-3"
                />
                <span className="font-bold">{item.name}</span>
              </td>
              <td className="py-2 font-bold">${item.price.toFixed(2)}</td>
              <td className="py-2 flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </td>
              <td className="py-2 font-bold">${item.total.toFixed(2)}</td>
              <td className="py-2">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-black hover:underline "
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between">
        {/* Coupon Code Section */}
        <div className="w-1/2 pr-5">
          <h3 className="text-3xl font-semibold mb-3">Coupon Code</h3>
          <p className="text-sm text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Quisque diam pellentesque bibendum non.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="w-2/3 p-2 border rounded-l"
            />
            <button
              className="px-4 text-white bg-orange-500 rounded-r"
              style={{ backgroundColor: "rgba(255, 159, 13, 1)" }}
            >
              Apply
            </button>
          </div>
        </div>

        {/* Total Bill Section */}
        <div className="w-1/3 pl-5">
          <h3 className="text-3xl font-semibold mb-3">Total Bill</h3>
          <div className="border border-gray-300 p-4 rounded">
            <p className="mb-4 font-bold">Cart Subtotal: ${cartSubtotal.toFixed(2)}</p>
            <p className="mb-4">Shipping Charge: ${shippingCharge.toFixed(2)}</p>
            <p className="border-t font-bold pt-2">
              Total Amount: ${totalAmount.toFixed(2)}
            </p>
          </div>
          <button
            className="w-full px-4 py-2 mt-4 text-white rounded"
            style={{ backgroundColor: "rgba(255, 159, 13, 1)" }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
