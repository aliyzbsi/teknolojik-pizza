import React, { useEffect, useState } from "react";

function TotalPrice({ price, selectedMalzemeler, varsayilanMalzemeler }) {
  const [adet, setAdet] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0); // Toplam fiyat için yeni state

  useEffect(() => {
    const selectedCount = selectedMalzemeler.filter(
      (malzeme) => !varsayilanMalzemeler.includes(malzeme)
    ).length;

    const bill = price * adet + selectedCount * 5;
    setTotalPrice(bill);
  }, [adet, selectedMalzemeler, price, varsayilanMalzemeler]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between mt-4 ">
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

        <div className="flex-1 flex flex-col mt-4 sm:mt-0 sm:ml-4">
          <div className="flex flex-col justify-between border border-gray-300 rounded-lg shadow-lg p-4">
            <div className="flex flex-col justify-center p-2">
              <p className="text-xl font-semibold mb-4">Sipariş Toplamı</p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between w-full">
                  <p className="text-lg font-medium">Seçimler</p>
                  <p className="text-lg font-medium">{totalPrice}₺</p>
                </div>
                <div className="text-red-700 flex justify-between w-full font-bold">
                  <p>Toplam</p>
                  <p>{totalPrice}₺</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-4 sm:mt-0">
            <button className="w-[100%] bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition duration-300">
              Sipariş Ver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalPrice;
