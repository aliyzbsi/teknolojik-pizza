import React, { useEffect } from "react";

const images = {
  image1: "../../../../../public/assets/Iteration-2-assets/pictures/ramen1.png",
  image2: "../../../../../public/assets/Iteration-2-assets/pictures/ramen2.png",
  image3: "../../../../../public/assets/Iteration-2-assets/pictures/ramen3.png",
};

function MenuCategory({ menuItems }) {
  return (
    <div>
      <div className="flex items-center justify-center p-8">
        {menuItems.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col justify-between bg-white rounded-2xl w-full min-w-[18rem] max-w-[22rem] h-[28rem] p-4 gap-4"
              >
                <img
                  src={images[item.imageKey]}
                  className="w-full h-auto max-h-[20rem] object-cover"
                  alt={item.name}
                />
                <div className="flex flex-col gap-4">
                  <h2 className="text-black font-barlow font-semibold text-xl">
                    {item.name}
                  </h2>
                  <div className="flex justify-between">
                    <p>{item.rating}</p>
                    <p>{item.ordersCount}</p>
                    <p className="font-bold text-lg">{item.price} ₺</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Seçenekleri görmek için bir kategori seçin.</p>
        )}
      </div>
    </div>
  );
}

export default MenuCategory;
