import { useEffect, useState } from "react";
import "./order.css";
import { FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import Boyutlar from "./orderPageComponents/boyutlar";
import HamurKalinligi from "./orderPageComponents/hamurKalinligi";
import TumMalzemeler from "./orderPageComponents/tumMalzemeler";
import PizzaInfo from "./orderPageComponents/pizzaInfo";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import TotalPrice from "./orderPageComponents/totalPrice";

function Order() {
  const history = useHistory();
  const [selectedMalzemeler, setSelectedMalzemeler] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null);

  const [orderDetails, setOrderDetails] = useState({
    isim: "",
    boyut: "",
    hamurKalinligi: "",
    malzemeler: [],
    siparisNotu: "",
    adet: "",
    fiyat: 0, // Başlangıçta 0, çünkü fiyatı adetle çarpacağız
    malzemeFiyat: "",
  });

  useEffect(() => {
    getAllPizzas();
  }, []);

  const getAllPizzas = async () => {
    try {
      const response = await axios.get("http://localhost:3000/pizzas");
      console.log(response.data);
      setPizzas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => {
    history.push("/");
  };

  return (
    <div>
      <section className="bg-red-700 flex flex-col items-center pt-8">
        <div className="flex flex-col items-center mx-4">
          <div>
            <img src="Assets/Iteration-1-assets/logo.svg" alt="Logo" />
          </div>
          <div className="flex gap-4 py-4 justify-start text-gray-300">
            <button className="hover:text-white" onClick={handleChange}>
              Anasayfa
            </button>
            <span>-</span>
            <button className="text-white">Sipariş Oluştur</button>
          </div>
        </div>
      </section>

      {pizzas
        .filter((pizza) => pizza.id === 1)
        .map((pizza) => (
          <section className="flex justify-center px-4" key={pizza.id}>
            <div className="w-full max-w-2xl p-8 flex flex-col gap-8">
              <PizzaInfo
                isim={pizza.isim}
                fiyat={pizza.fiyat}
                pizzaAciklaması={pizza.pizzaAciklaması}
                pizzaId={pizza.id}
                puanOrtalaması={pizza.puan}
                puanVerenSayisi={pizza.puanVerenSayisi}
              />

              <div className="flex items-center justify-between">
                <Boyutlar boyutSecenekleri={pizza.boyutSecenekleri} />
                <HamurKalinligi hamurSecenekleri={pizza.hamurSecenekleri} />
              </div>

              <div className="flex flex-col gap-10">
                <TumMalzemeler
                  selectedMalzemeler={selectedMalzemeler}
                  tumMalzemeler={pizza.tumMalzemeler}
                  varsayilanMalzemeler={pizza.varsayilanMalzemeler}
                  setSelectedMalzemeler={setSelectedMalzemeler}
                />
                <div className="flex flex-col">
                  <FormGroup>
                    <Label htmlFor="isim">İsim</Label>
                    <Input id="name" />
                  </FormGroup>
                  <FormGroup className="flex flex-col gap-2">
                    <Label htmlFor="notes" className="font-bold text-xl">
                      Sipariş Notu
                    </Label>
                    <Input
                      id="notes"
                      name="text"
                      type="textarea"
                      placeholder="Siparişine eklemek istediğin bir not var mı ?"
                    />
                  </FormGroup>
                </div>
                <div className="border border-x-slate-500"></div>
                <TotalPrice
                  price={pizza.fiyat}
                  selectedMalzemeler={selectedMalzemeler}
                  varsayilanMalzemeler={pizza.varsayilanMalzemeler}
                />
              </div>
            </div>
          </section>
        ))}
    </div>
  );
}

export default Order;
