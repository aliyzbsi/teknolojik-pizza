import React from "react";

function PizzaSizes({ pizzaSizes, selectedSize, setSelectedSize }) {
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div>
      <section className="flex justify-center gap-10 font-barlow mt-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg">
            Boyut Seç <span className="text-red-600">*</span>
          </h1>
          <div className="flex flex-col items-center md:flex-row gap-4">
            {" "}
            {/* Mobilde alt alta, büyük ekranda yan yana */}
            {pizzaSizes.map((item, index) => (
              <button
                key={index}
                className={`flex items-center bg-mainBgColor text-black font-mono text-lg border-0 rounded-3xl py-2 px-3 cursor-pointer shadow-md relative ${
                  selectedSize === item ? "bg-selectedColor text-black" : ""
                }`}
                onClick={() => handleSizeSelect(item)} // Butona tıklandığında boyutu seç
              >
                <span>{item}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PizzaSizes;
