'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sanityClient from '@sanity/client';
import Hero from './Hero';

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
    alert('Added to WIshlist');
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
    <><Hero /><div className="p-6">

      <h2 className="text-center text-4x1 mt-4 mb-4 font-bold">Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          
         
          return (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                className="object-cover w-full h-48"
                width={300}
                height={300} />
              <div className="mt-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-500 text-sm">
                  {truncateDescription(product.description)}
                </p>

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
                onClick={() => addToCart(product)}
              >
                ADD TO WISHLIST
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-yellow-800">WISHLIST</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => {
            
             
              return (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white shadow-md p-4 rounded-md"
                >

                  <Image
                    src={item.imageUrl}
                    alt={`${item.title}`}
                    width={100}
                    height={100}
                    className="rounded-md" />
                </li>

              );
            })}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}




      </div>
    </div></>
  );
};

export default ProductCards;
