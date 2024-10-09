import React from "react";

function Recommended() {
  return (
    <div>
      <div>
        <section className="  mt-10">
          <div className="flex flex-col md:flex-row justify-center gap-4 p-4">
            <div className="relative">
              <img
                src="Assets/Iteration-2-aseets/cta/kart-1.png"
                className="rounded-2xl w-full md:w-80 lg:w-128"
                alt="ozel-lezzetus"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-start rounded-2xl p-4 gap-4">
                <h1 className="font-quattrocento text-white text-4xl md:text-5xl lg:text-7xl">
                  Özel <br /> Lezzetus
                </h1>
                <p className="font-barlow text-white text-center text-sm md:text-base lg:text-lg font-bold">
                  Position: Absolute Acı Burger
                </p>
                <button className="font-barlow bg-white text-red-700  hover:text-blue-700 rounded-3xl p-2 px-4 mt-2">
                  Sipariş Ver
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <img
                  src="Assets/Iteration-2-aseets/cta/kart-2.png"
                  className="rounded-2xl w-full md:w-80 lg:w-128"
                  alt="hackathlon-menu"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center  rounded-2xl p-4 gap-4">
                  <h1 className="font-barlow text-white font-bold text-3xl md:text-4xl lg:text-4xl">
                    Hackathlon <br />
                    Burger Menü
                  </h1>
                  <button className="font-barlow bg-white text-red-700  hover:text-blue-700  rounded-3xl p-2 px-4 ">
                    Sipariş Ver
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="Assets/Iteration-2-aseets/cta/kart-3.png"
                  className="rounded-2xl w-full md:w-80 lg:w-128"
                  alt="npm-gibi-kurye"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-25 rounded-2xl p-4 gap-4">
                  <h1 className="font-barlow text-white text-3xl md:text-4xl lg:text-4xl font-bold">
                    <span className="text-red-700">Çoooook</span> hızlı <br />{" "}
                    npm gibi kurye
                  </h1>
                  <button className="font-barlow bg-white text-red-700  hover:text-blue-700 rounded-3xl p-2 px-4 mt-2">
                    Sipariş Ver
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-6">
            <p className="text-red-700 font-satisfy text-3xl">
              en çok paketlenen menüler
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Recommended;
