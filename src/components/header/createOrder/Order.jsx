import { useEffect, useState } from "react";
import "./order.css";
import { Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";

import Boyutlar from "./orderPageComponents/boyutlar";
import HamurKalinligi from "./orderPageComponents/hamurKalinligi";
import TumMalzemeler from "./orderPageComponents/tumMalzemeler";
import PizzaInfo from "./orderPageComponents/pizzaInfo";

import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import TotalPrice from "./orderPageComponents/totalPrice";
import { toast } from "react-toastify";
import OrderHeader from "./orderPageComponents/orderHeader";

const errorMessages = {
  musteriIsim: "İsminiz 3 harften kısa olamaz !",
};

function Order() {
  const { id } = useParams();
  const history = useHistory();
  const [pizzaIsmi, setPizzaIsmi] = useState("");
  const [selectedMalzemeler, setSelectedMalzemeler] = useState([]);
  const [hamurKalinligi, setHamurKalinligi] = useState();
  const [boyut, setBoyut] = useState();
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(errorMessages);
  const [musteriIsim, setMusteriIsım] = useState("");
  const [siparisNotu, setSiparisNotu] = useState("");
  const [adet, setAdet] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0); // Toplam fiyat için yeni state
  const [isNewOrder, setIsNewOrder] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    isim: "",
    boyut: "",
    hamurKalinligi: "",
    malzemeler: [],
    siparisNotu: "",
    adet: "",
    fiyat: 0,
    musteriIsim: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isNewOrder) {
      // Eğer yeni sipariş değilse
      siparisVerSubmit();
    }
  };
  const siparisVerSubmit = async () => {
    const yeniSiparis = {
      isim: pizzaIsmi,
      hamurKalinligi: hamurKalinligi,
      boyut: boyut,
      malzemeler: selectedMalzemeler,
      musteriIsim: musteriIsim,
      siparisNotu: siparisNotu,
      fiyat: totalPrice,
      adet: adet,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/orders",
        yeniSiparis
      );
      setOrderDetails(response.data);
      toast.success("Sipariş detayları ekranına yönlendiriliyorsunuz!", {
        position: "top-right",
        autoClose: 3000, // 3 saniye sonra kapanır
      });

      // 3 saniye sonra yönlendirme
      setTimeout(() => {
        history.push("/siparis-detaylari"); // Yönlendirmek istediğin sayfa
      }, 3000);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    console.log(orderDetails);
  }, [orderDetails]);
  useEffect(() => {
    setIsNewOrder(true);
  }, [adet]);

  useEffect(() => {
    if (musteriIsim && musteriIsim.length < 4) {
      setError({ ...error, musteriIsim: errorMessages.musteriIsim });
    } else {
      setError((prevError) => ({ ...prevError, musteriIsim: "" }));
    }
  }, [musteriIsim]);

  useEffect(() => {
    getAllPizzas();
  }, [id]);
  const getAllPizzas = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/pizzas/${id}`);
      console.log(response.data);
      setPizza(response.data);
      setPizzaIsmi(response.data.isim);
    } catch (error) {
      console.log(error);
    }
  };

  const musteriChange = (event) => {
    const value = event.target.value;
    setMusteriIsım(value);

    if (value.length < 3) {
      setError({ ...error, musteriIsim: errorMessages.musteriIsim });
    } else {
      setError({ ...error, musteriIsim: "" });
    }
  };

  return (
    <div>
      <OrderHeader />
      <Form onSubmit={handleSubmit}>
        {!pizza ? (
          <p>Yükleniyor...</p>
        ) : (
          <section className="flex justify-center px-4" key={pizza.id}>
            <div className="w-full max-w-2xl p-8 flex flex-col gap-8">
              <PizzaInfo
                isim={pizza.isim}
                fiyat={pizza.fiyat}
                pizzaAciklamasi={pizza.pizzaAciklamasi}
                pizzaId={pizza.id}
                puanOrtalaması={pizza.puan}
                puanVerenSayisi={pizza.puanVerenSayisi}
              />

              <div className="flex items-center justify-between">
                <Boyutlar
                  boyutSecenekleri={pizza.boyutSecenekleri}
                  boyut={boyut}
                  setBoyut={setBoyut}
                />
                <HamurKalinligi
                  hamurSecenekleri={pizza.hamurSecenekleri}
                  hamurKalinligi={hamurKalinligi}
                  setHamurKalinligi={setHamurKalinligi}
                />
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
                    <Input
                      id="name"
                      placeholder="İsminizi Giriniz"
                      value={musteriIsim}
                      onChange={musteriChange}
                      invalid={!!error.musteriIsim}
                    />
                    {error.musteriIsim && (
                      <FormFeedback>{error.musteriIsim}</FormFeedback>
                    )}
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
                      value={siparisNotu}
                      onChange={(e) => setSiparisNotu(e.target.value)}
                    />
                  </FormGroup>
                </div>
                <div className="border border-x-slate-500"></div>
                <TotalPrice
                  price={pizza.fiyat}
                  selectedMalzemeler={selectedMalzemeler}
                  varsayilanMalzemeler={pizza.varsayilanMalzemeler}
                  adet={adet}
                  setAdet={setAdet}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  siparisVerSubmit={siparisVerSubmit}
                  musteriIsim={musteriIsim}
                  boyut={boyut}
                  hamurKalinligi={hamurKalinligi}
                />
              </div>
            </div>
          </section>
        )}
      </Form>
    </div>
  );
}

export default Order;
