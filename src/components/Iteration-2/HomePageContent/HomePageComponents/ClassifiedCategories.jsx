import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import MenuCategory from "./MenuCategory";
import axios from "axios";
import { Button } from "reactstrap";

function ClassifiedCategories() {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Pizza");

  const getMenuItems = async (category) => {
    try {
      const response = await axios.get("http://localhost:3000/menuItems");
      const filteredItems = response.data.filter(
        (item) => item.category === category
      );
      setMenuItems(filteredItems);
      setActiveCategory(category);
    } catch (error) {
      console.error("Veri alınırken hata oluştu:", error);
    }
  };
  useEffect(() => {
    getMenuItems(activeCategory);
  }, []);

  return (
    <div>
      <section className="flex flex-col items-center ">
        <h1 className="font-barlow text-center font-semibold text-5xl">
          Acıktıran Kodlara Doyuran Lezzetler
        </h1>
        <div className="flex items-center justify-center p-4 w-full">
          <nav className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            <button
              id="Ramen"
              onClick={() => getMenuItems("Ramen")}
              className="flex items-center space-x-2 p-3 px-4 rounded-3xl cursor-pointer hover:text-white hover:bg-black transition duration-200"
            >
              <img
                src="Assets/Iteration-2-aseets/icons/1.svg"
                alt="ramen"
                className="w-6 h-6"
              />
              <span>Ramen</span>
            </button>

            <button
              onClick={() => getMenuItems("Pizza")}
              className="flex items-center space-x-2 p-3 px-4 rounded-3xl cursor-pointer hover:text-white hover:bg-black transition duration-200"
            >
              <img
                src="Assets/Iteration-2-aseets/icons/2.svg"
                alt="pizza"
                className="w-6 h-6"
              />
              <span>Pizza</span>
            </button>

            <button
              onClick={() => getMenuItems("Burger")}
              className="flex items-center space-x-2 p-3 px-4 rounded-3xl cursor-pointer hover:text-white hover:bg-black transition duration-200"
            >
              <img
                src="Assets/Iteration-2-aseets/icons/3.svg"
                alt="burger"
                className="w-6 h-6"
              />
              <span>Burger</span>
            </button>

            <button
              onClick={() => getMenuItems("French fries")}
              className="flex items-center space-x-2 p-3 px-4 rounded-3xl cursor-pointer hover:text-white hover:bg-black transition duration-200"
            >
              <img
                src="Assets/Iteration-2-aseets/icons/4.svg"
                alt="kızartmalar"
                className="w-6 h-6"
              />
              <span>French fries</span>
            </button>

            <button
              onClick={() => getMenuItems("Fast Food")}
              className="flex items-center space-x-2 p-3 px-4 rounded-3xl cursor-pointer hover:text-white hover:bg-black transition duration-200"
            >
              <img
                src="Assets/Iteration-2-aseets/icons/5.svg"
                alt="fast food"
                className="w-6 h-6"
              />
              <span>Fast Food</span>
            </button>

            <button
              onClick={() => getMenuItems("Soft drinks")}
              className="flex items-center space-x-2 p-3 px-4 rounded-3xl cursor-pointer hover:text-white hover:bg-black transition duration-200"
            >
              <img
                src="Assets/Iteration-2-aseets/icons/6.svg"
                alt="gazlı içecek"
                className="w-6 h-6"
              />
              <span>Soft drinks</span>
            </button>
          </nav>
        </div>
      </section>

      <MenuCategory menuItems={menuItems} />
    </div>
  );
}

export default ClassifiedCategories;
