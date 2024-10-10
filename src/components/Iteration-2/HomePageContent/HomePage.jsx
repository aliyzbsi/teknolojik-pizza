import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast, ToastContainer } from "react-toastify";

function HomePage({ pizzaData, getAllPizzas }) {
  const history = useHistory();

  const orderPageRouter = () => {
    getAllPizzas();
    const pizzaId = 1;

    toast.success("Sipariş detayları ekranına yönlendiriliyorsunuz!", {
      position: "top-right",
      autoClose: 4000, // Mesajın görünürlük süresini uzat
    });

    // Toast mesajının görünmesi için daha uzun bir süre bekle
    setTimeout(() => {
      history.push(`/order/${pizzaId}`);
    }, 5000); // Yönlendirme için bekleme süresini uzat
  };

  return (
    <div className="flex flex-col h-screen ">
      <section
        className="bg-center bg-cover bg-no-repeat h-full"
        style={{
          backgroundImage: "url('Assets/Iteration-1-assets/home-banner.pn')",
        }}
      >
        <div className="flex flex-col items-center p-6 md:p-10 lg:p-20 ">
          <img
            src="/Iteration-1-assets/logo.svg"
            alt="home-page-logo"
            className="w-52 md:w-48 lg:w-64"
          />
          <div className="flex flex-col items-center text-center p-6 md:p-8 lg:p-12 gap-2">
            <p className="font-satisfy text-yellow-500 text-xl md:text-2xl lg:text-3xl">
              fırsatı kaçırma
            </p>
            <h1 className="font-barlow text-white text-6xl md:text-6xl lg:text-7xl ">
              KOD ACIKTIRIR <br />
              PIZZA, DOYURUR
            </h1>
          </div>
          <div>
            <button
              onClick={orderPageRouter}
              className="rounded-full font-barlow font-medium bg-yellow-400 py-2 px-6 md:px-10 lg:px-12 md:py-2.5 hover:bg-red-700 hover:text-white transition-all duration-300"
            >
              ACIKTIM
            </button>
          </div>
        </div>
      </section>

      <section className="flex w-full bg-white">
        <div className="flex items-center justify-center p-4 w-full">
          <nav className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            <Link
              to="#Ramen"
              className="flex items-center space-x-2 hover:text-red-600 transition duration-200"
            >
              <img
                src="/Iteration-2-assets/icons/1.svg"
                alt="ramen"
                className="w-6 h-6"
              />
              <span>YENİ! Kore</span>
            </Link>
            <Link
              to="#Pizza"
              className="flex items-center space-x-2 hover:text-red-600 transition duration-200"
            >
              <img
                src="/Iteration-2-assets/icons/2.svg"
                alt="pizza"
                className="w-6 h-6"
              />
              <span>Pizza</span>
            </Link>
            <Link
              to="#Burger"
              className="flex items-center space-x-2 hover:text-red-600 transition duration-200"
            >
              <img
                src="Assets/Iteration-2-assets/icons/3.svg"
                alt="burger"
                className="w-6 h-6"
              />
              <span>Burger</span>
            </Link>
            <Link
              to="#Kızartmalar"
              className="flex items-center space-x-2 hover:text-red-600 transition duration-200"
            >
              <img
                src="Assets/Iteration-2-assets/icons/4.svg"
                alt="kızartmalar"
                className="w-6 h-6"
              />
              <span>Kızartmalar</span>
            </Link>
            <Link
              to="#FastFood"
              className="flex items-center space-x-2 hover:text-red-600 transition duration-200"
            >
              <img
                src="Assets/Iteration-2-assets/icons/5.svg"
                alt="fast food"
                className="w-6 h-6"
              />
              <span>Fast Food</span>
            </Link>
            <Link
              to="#Gazlıİçecek"
              className="flex items-center space-x-2 hover:text-red-600 transition duration-200"
            >
              <img
                src="Assets/Iteration-2-assets/icons/6.svg"
                alt="gazlı içecek"
                className="w-6 h-6"
              />
              <span>Gazlı İçecek</span>
            </Link>
          </nav>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default HomePage;
