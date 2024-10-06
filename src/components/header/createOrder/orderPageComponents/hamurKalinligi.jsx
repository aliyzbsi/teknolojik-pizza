import React, { useEffect } from "react";

function HamurKalinligi({
  hamurSecenekleri,
  hamurKalinligi,
  setHamurKalinligi,
}) {
  // Varsayılan olarak ilk hamur seçeneğini ayarla
  useEffect(() => {
    if (!hamurKalinligi) {
      setHamurKalinligi(hamurSecenekleri[0]);
    }
  }, [hamurSecenekleri, hamurKalinligi, setHamurKalinligi]);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setHamurKalinligi(value);
    console.log("hamur kalınlığı: ", value);
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="options" className="font-bold pb-4">
        Hamur Seç <span className="text-red-600">*</span>
      </label>
      <select
        id="options"
        value={hamurKalinligi}
        onChange={handleSelectChange}
        className="border border-gray-300 rounded-lg p-2"
      >
        {hamurSecenekleri.map((hamur, index) => (
          <option key={index} value={hamur}>
            {hamur}
          </option>
        ))}
      </select>
    </div>
  );
}

export default HamurKalinligi;
