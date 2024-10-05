import { useState } from "react";
import "./order.css";
import { FormGroup, Input, Label } from "reactstrap";

function Order() {
  const [selectedOption, setSelectedOption] = useState("");
  const [adet, setAdet] = useState(1);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      {/* Sipariş Oluştur Sayfası Header Container */}
      <section className="bg-red-700 flex flex-col items-center pt-8">
        <div className="flex flex-col items-start mx-4">
          {" "}
          {/* Kenar boşluğunu ayarla */}
          <div>
            <img src="Assets/Iteration-1-assets/logo.svg" alt="Logo" />
          </div>
          <div className="flex gap-4 py-4 justify-start text-gray-300">
            <button className="hover:text-white">Anasayfa</button>
            <span>-</span>
            <button className="text-white">Sipariş Oluştur</button>
          </div>
        </div>
      </section>

      {/* tercihler bölümü */}
      <section className="flex justify-center px-4">
        {" "}
        {/* Kenar boşluğunu ayarla */}
        <div className="w-full max-w-2xl p-8 flex flex-col gap-8">
          {" "}
          {/* Genişlik ayarlarını değiştir */}
          <p className="font-bold text-2xl">Position Absolute Acı Pizza</p>
          <div className="flex justify-between">
            <p className="font-bold text-2xl">85₺</p>
            <div className="flex gap-2">
              <p className="text-base">puan</p>
              <p className="text-base">(200)</p>
            </div>
          </div>
          <div>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="options" className="font-bold pb-4">
                Boyut Seç <span className="text-red-600">*</span>
              </label>
              <FormGroup check>
                <Input name="radio2" type="radio" id="small" />
                <Label htmlFor="small" check>
                  Küçük
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio2" type="radio" id="medium" />
                <Label htmlFor="medium" check>
                  Orta
                </Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio2" type="radio" id="large" />
                <Label htmlFor="large" check>
                  Büyük
                </Label>
              </FormGroup>
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="options" className="font-bold pb-4">
                Hamur Seç <span className="text-red-600">*</span>
              </label>
              <select
                id="options"
                value={selectedOption}
                onChange={handleSelectChange}
                className="border border-gray-300 rounded-lg p-2"
              >
                <option value="" disabled>
                  Hamur Kalınlığı
                </option>
                <option value="option1">İnce</option>
                <option value="option2">Orta</option>
                <option value="option3">Kalın</option>
              </select>
              <p className="mt-2">Selected: {selectedOption}</p>
            </div>
          </div>
          {/* malzeme seçimi */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-xl">Ek Malzemeler</p>
              <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <FormGroup check>
                <Input id="checkbox1" type="checkbox" />
                <Label check>Pepperoni</Label>
              </FormGroup>
              <FormGroup check>
                <Input id="checkbox2" type="checkbox" />
                <Label check>Jambon</Label>
              </FormGroup>
              <FormGroup check>
                <Input id="checkbox3" type="checkbox" />
                <Label check>Mantar</Label>
              </FormGroup>
              <FormGroup check>
                <Input id="checkbox4" type="checkbox" />
                <Label check>Yeşil Biber</Label>
              </FormGroup>
              <FormGroup check>
                <Input id="checkbox5" type="checkbox" />
                <Label check>Soğan</Label>
              </FormGroup>
              <FormGroup check>
                <Input id="checkbox6" type="checkbox" />
                <Label check>Zeytin</Label>
              </FormGroup>
            </div>
            <div className="flex flex-col">
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
            <div className="flex flex-col sm:flex-row justify-between mt-4 ">
              {/* Adet kontrolü */}
              <div className="flex-1 flex jus items-center gap-2">
                <button
                  onClick={() => (adet > 0 ? setAdet(adet - 1) : setAdet(adet))}
                  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-600"
                >
                  -
                </button>
                <span className="text-xl font-bold border border-gray-300 rounded-lg shadow-lg p-2 px-4">
                  {adet}
                </span>
                <button
                  onClick={() => setAdet(adet + 1)}
                  className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-600"
                >
                  +
                </button>
              </div>

              {/* Sipariş Toplamı */}
              <div className="flex-1 flex flex-col mt-4 sm:mt-0 sm:ml-4">
                <div className="flex flex-col justify-between border border-gray-300 rounded-lg shadow-lg p-4">
                  <div className="flex flex-col justify-center p-2">
                    <p className="text-xl font-semibold mb-4">
                      Sipariş Toplamı
                    </p>
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between w-full">
                        <p className="text-lg font-medium">Seçimler</p>
                        <p className="text-lg font-medium">25.00₺</p>
                      </div>
                      <div className="text-red-700 flex justify-between w-full font-bold">
                        <p>Toplam</p>
                        <p>110.50₺</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sipariş Ver Butonu */}
                <div className="flex justify-between mt-4 sm:mt-0">
                  <button className="w-[100%] bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition duration-300">
                    Sipariş Ver
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;
