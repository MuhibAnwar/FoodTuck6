'use client';


import ProductCards from "@/components/Products/page";

const Product = () => {
  



  return (
    <div className="bg-white min-h-screen mt-20">
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
        {/* Products Grid */}
        <ProductCards  />

  
       
      </div>
    </div>
  );
};

export default Product;
