import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import productImage from "../../../../../Assets/Iteration-2-aseets/pictures/form-banner.png";
function PizzaInfo({ selectedPizzaData }) {
  if (!selectedPizzaData) {
    return <div>Yükleniyor...</div>;
  }
  return (
    <div>
      <section className="flex flex-col items-center bg-mainBgColor gap-10 font-barlow">
        <img src={productImage} alt="" />
        <div className="flex lg:w-144">
          <nav>
            <Link to="/">Anasayfa</Link>
            <span>-</span>
            <Link to="/order" className="text-red-700">
              Sipariş Oluştur
            </Link>
          </nav>
        </div>
        <article className="flex flex-col lg:w-144 mb-4">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl">{selectedPizzaData.isim}</h1>
            <div className="flex justify-between">
              <p className="font-bold text-xl">{selectedPizzaData.fiyat}₺</p>
              <div className="flex gap-8">
                <p>{selectedPizzaData.puan}</p>
                <p>{selectedPizzaData.puanVerenSayisi}</p>
              </div>
            </div>
            <p>{selectedPizzaData.pizzaAciklamasi}</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default PizzaInfo;
