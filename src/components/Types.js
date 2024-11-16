import Image from "next/image";
import React from "react";

const data = [
  {
    name: "Food courts & canteens",
    icon: "/media/types/food_courts_canteens.png",
  },
  {
    name: "Cafe",
    icon: "/media/types/cafe.png",
  },
  {
    name: "Fine dine",
    icon: "/media/types/fine_dine.png",
  },
  {
    name: "Bar & Brewery",
    icon: "/media/types/bar_brewery.png",
  },
  {
    name: "Pizzeria",
    icon: "/media/types/pizzeria.png",
  },
  {
    name: "QSR",
    icon: "/media/types/qsr.png",
  },
  {
    name: "Large chains",
    icon: "/media/types/large_chains.png",
  },
  {
    name: "Bakery",
    icon: "/media/types/bakery.png",
  },
  {
    name: "Cloud kitchens",
    icon: "/media/types/cloud_kitchens.png",
  },
];

const Types = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 container ">
        {data.map((data, index) => (
          <div className="p-4 border border-orange-200 rounded-[2rem] max-w-[350px] mx-auto bg-[#FAF5F0] shadow-orange-glow">
            <h3 className="text-center font-semibold text-lg mb-2">
              {data.name}
            </h3>
            <Image
              src={data.icon}
              alt={data.name}
              width={350}
              height={350}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Types;
