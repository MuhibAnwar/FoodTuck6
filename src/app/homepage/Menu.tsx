import Image from "next/image";

export default function Menu() {
  const menuItems = [
    {
      name: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: 12.95,
      image: "/m1.png", // Replace with your image path
    },
    {
      name: "Fresh Breakfast",
      description:"Lacus nisi, et ac dapibus velit in consequat.",
      price: 14.95,
      image: "/mm2.png",
    },
    {
      name: "Mild Butter",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: 12.95,
      image: "/m3.png",
    },
    {
      name: "Fresh Bread",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: 12.95,
      image: "/s3.png",
    },
    {
      name: "Glow Cheese",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: 16.95,
      image: "/m5.png",
    },
    {
      name: "Italian Pizza",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      price: 16.95,
      image: "/c1.png"
    },
   
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-8 text-center">
      <p id="qoute" className="text-sm  italic  text-yellow-500 ">Choose & enjoy</p>
        <h1 className="text-4xl font-bold text-white"><span className="text-yellow-500">Fr</span>om Our Menu</h1>
        
      </header>
      <main className="px-4 lg:px-32">
        
      <a href="/shoplist">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex  flex-wrap items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4">

                
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
              <span className="text-xl font-bold text-yellow-400">
                ${item.price}
              </span>
       
            </div>
            
          ))}
        </div>
        </a>
      </main>
    </div>
  );
}
