'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sanityClient from '@sanity/client';


const sanity = sanityClient({
  projectId: 'pxraojki',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-31',
});



interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `*[_type == "food"]{
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": image.asset->url,
        tags
      }`;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert('Added to cart');
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const truncateDescription = (description: string) => {
    return description.length > 50
      ? `${description.substring(0, 50)}...`
      : description;
  };

  return (
    <div className="p-6">
      <h2 className="text-center mt-4 mb-4 font-bold">Products List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
        


          return (
            <a href={`/products/${product._id}`}key={product._id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
                <Image
                src={product.imageUrl}
                alt={'10'}
                /*  src={image.link || product.imageUrl}
                  alt={image.title || product.title}*/
                  className="object-cover w-full h-48"
                  width={300}
                  height={300}
                />
                <div className="mt-4">
                  <h3 className="text-lg font-bold">{product.title}</h3>
                  <p className="text-gray-500 text-sm">
                    {truncateDescription(product.description)}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-slate-600 font-bold">${product.price}</p>
                    {product.discountPercentage > 0 && (
                      <p className="text-sm text-black">{product.discountPercentage}% OFF</p>
                    )}
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs text-slate-600 bg-white rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="mt-4 w-full bg-yellow-600 text-black font-bold py-2 rounded-md"
                  onClick={(e) => {
                    e.preventDefault(); // Prevents Link navigation on button click
                    addToCart(product);
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-yellow-800">CART SUMMARY</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => {
            
              return (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white shadow-md p-4 rounded-md"
                >
                  <div>
                    <p>{item.title}</p>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <Image
src={item.imageUrl}
alt={'20'}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <a href='/checkout'>
      <button className='flex justify-center items-center mt-4 w-full bg-yellow-600 text-black font-bold py-2 rounded-md'>
        Checkout 
      </button>
      </a>
    </div>
  );
};

export default ProductCards;
