import React, { useEffect, useState } from "react";
import "./header.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  const history = useHistory();

  return (
    <div className=" flex flex-col  h-screen">
      <div
        className="bg-center bg-cover bg-no-repeat h-full"
        style={{
          backgroundImage: "url('Assets/Iteration-1-assets/home-banner.png')",
        }}
      >
        <div className="flex flex-col items-center justify-center m-10 p-6 gap-10">
          <img src="Assets/Iteration-1-assets/logo.svg" alt="" />

          <p className="text-white text-7xl leading-tight-1 text-center font-sans">
            KOD ACIKTIRIR <br />
            PİZZA, DOYURUR
          </p>
          <button
            onClick={() => history.push("/order")}
            className="rounded-full font-barlow font-medium bg-yellow-400 py-2.5 px-12 hover:bg-red-700 hover:text-white"
          >
            ACIKTIM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
