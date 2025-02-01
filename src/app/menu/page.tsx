import React from "react";
import Hero from "./Hero";
import Maincourse from "./Maincourse";
import Starter from "./Starter";
import Dessert from "./Dessert";
import Drinks from "./Drinks";





export default function Menu() {
    return (
        <div>
            <Hero />
            <Starter  />
            <Maincourse />
            <Dessert />
            <Drinks />
            
            <div className="items-center  mb-2">
                <p className="text-sm text-center text-gray-700">Partners & Clients</p>
                <h1 className="text-4xl font-bold text-black text-center mb-10 ">We work with the best pepole</h1>
               

            </div>
        </div>
    );
}