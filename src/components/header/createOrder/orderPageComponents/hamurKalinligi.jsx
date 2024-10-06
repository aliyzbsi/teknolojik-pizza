import React, { useEffect, useState } from "react";
import Select from "react-select";

const errorMessage = "Hamur Seçimi Yapmak Zorunludur !";

function HamurKalinligi({
  hamurSecenekleri,
  hamurKalinligi,
  setHamurKalinligi,
}) {
  const [error, setError] = useState("");

  useEffect(() => {
    if (!hamurKalinligi && hamurSecenekleri.length > 0) {
      setError(errorMessage);
    } else {
      setError("");
    }
  }, [hamurSecenekleri, hamurKalinligi, setHamurKalinligi]);

  const handleSelectChange = (selectedOption) => {
    setHamurKalinligi(selectedOption.value);
    console.log("hamur kalınlığı: ", selectedOption.value);
  };

  // Select için seçenekleri dönüştürme
  const options = hamurSecenekleri.map((hamur) => ({
    value: hamur,
    label: hamur,
  }));

  return (
    <div className="flex flex-col items-center">
      <label htmlFor="options" className="font-bold pb-4">
        Hamur Seç <span className="text-red-600">*</span>
      </label>

      <Select
        id="options"
        value={options.find((option) => option.value === hamurKalinligi)} // Seçilen değeri bulma
        onChange={handleSelectChange}
        options={options}
        placeholder="Seçiniz..."
        className="w-full "
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}

export default HamurKalinligi;
