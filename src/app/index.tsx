import React from "react";

const HomePage: React.FC = () => {
  return (
    <div id="menu" className="max-w-6xl mx-auto p-6 bg-white shadow-md">
      {/* Header Section */}
      <header
        className="text-center text-white py-16"
        style={{
          backgroundImage: "url('/menu-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold">Our Menu</h1>
      </header>

      {/* Starter Menu Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2">
          Starter Menu
        </h2>
        <ul className="mt-4 space-y-4">
          <li className="flex justify-between border-b pb-2">
            <span>Alder Grilled Chipotle Salmon</span>
            <span className="text-orange-500 font-bold">$25</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>Garlic and Cheese Tart</span>
            <span className="text-orange-500 font-bold">$20</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>Tomato-Basil Pizza Flatbread</span>
            <span className="text-orange-500 font-bold">$18</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>Spicy Vegan Potato Curry</span>
            <span className="text-orange-500 font-bold">$15</span>
          </li>
        </ul>
      </section>

      {/* Main Course Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold border-b-2 border-gray-200 pb-2">
          Main Course
        </h2>
        <ul className="mt-4 space-y-4">
          <li className="flex justify-between border-b pb-2">
            <span>Garlic Big Breakfast Combo</span>
            <span className="text-orange-500 font-bold">$35</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>Cashew Chicken with Stir-Fry</span>
            <span className="text-orange-500 font-bold">$32</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>Vegetables & Green Salad</span>
            <span className="text-orange-500 font-bold">$25</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>Spicy Vegan Potato Curry</span>
            <span className="text-orange-500 font-bold">$15</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
