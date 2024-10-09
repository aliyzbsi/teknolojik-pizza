import React, { useEffect, useState } from "react";
import Header from "../Header";
import PizzaInfo from "./orderPizzaPageAltComponents/PizzaInfo";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import PizzaSizes from "./orderPizzaPageAltComponents/PizzaSizes";
import DoughType from "./orderPizzaPageAltComponents/DoughType";
import AdditionalIngredients from "./orderPizzaPageAltComponents/AdditionalIngredients";

function OrderMain() {
  const { pizzaId } = useParams();
  const [selectedPizzaData, setSelectedPizzaData] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [hamurType, setHamurType] = useState("");
  const [selectedMalzemeler, setSelectedMalzemeler] = useState([]);
  const [orderForm, setOrderForm] = useState({
    isim: "",
    boyut: "",
    hamurKalinligi: "",
    malzemeler: [],
    siparisNotu: "",
    adet: "",
    fiyat: 0,
    musteriIsim: "",
  });

  const selectedPizza = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/pizzas/${pizzaId}`
      );
      setSelectedPizzaData(response.data);
    } catch (error) {
      console.error("Yüklenirken hata oluştu : ", error);
    }
  };

  useEffect(() => {
    selectedPizza();
  }, []);

  useEffect(() => {
    setOrderForm((prevForm) => ({
      ...prevForm,
      boyut: selectedSize,
      hamurKalinligi: hamurType,
    }));
  }, [selectedSize, hamurType]);

  if (!selectedPizzaData) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <Header />
      <PizzaInfo selectedPizzaData={selectedPizzaData} />
      <div className="flex flex-wrap justify-center gap-4 p-4 lg:w-144 mx-auto">
        <div className="flex-1 min-w-200">
          <PizzaSizes
            pizzaSizes={selectedPizzaData.boyutSecenekleri}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        </div>
        <div className="flex-1 min-w-200">
          <DoughType
            hamurOptions={selectedPizzaData.hamurSecenekleri}
            hamurType={hamurType}
            setHamurType={setHamurType}
          />
        </div>
      </div>
      <AdditionalIngredients
        selectedMalzemeler={selectedMalzemeler}
        setSelectedMalzemeler={setSelectedMalzemeler}
        tumMalzemeler={selectedPizzaData.tumMalzemeler}
        varsayilanMalzemeler={selectedPizzaData.varsayilanMalzemeler}
      />
    </div>
  );
}

export default OrderMain;
