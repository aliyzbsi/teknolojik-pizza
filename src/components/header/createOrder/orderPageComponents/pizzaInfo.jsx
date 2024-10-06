import axios from "axios";
import { useEffect, useState } from "react";

function PizzaInfo({
  isim,
  fiyat,
  pizzaAciklaması,
  pizzaId,
  puanOrtalaması,
  puanVerenSayisi,
}) {
  const [puan, setPuan] = useState(0);
  const [puanVerenler, setPuanVerenler] = useState(0);
  const [verilenPuan, setVerilenPuan] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/pizzas/${pizzaId}`)
      .then((response) => {
        const { puan, puanVerenler } = response.data;
        console.log(puan);
        console.log(puanVerenler);
        setPuan(puan);
        setPuanVerenler(puanVerenler);
      })
      .catch((error) => console.error("API hatası:", error));
  }, [pizzaId]);

  return (
    <div className="flex flex-col gap-4">
      <p className="font-bold text-2xl">{isim}</p>
      <div className="flex justify-between ">
        <p className="font-bold text-2xl">{fiyat}₺</p>
        <div className="flex gap-2">
          <p className="text-base">{puanOrtalaması}</p>
          <p className="text-base">{puanVerenSayisi}</p>
        </div>
      </div>
      <div>{pizzaAciklaması}</div>
    </div>
  );
}

export default PizzaInfo;
