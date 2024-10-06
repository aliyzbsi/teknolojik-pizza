import React, { useState } from "react";

function HamurKalinligi({ hamurSecenekleri }) {
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
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
        {hamurSecenekleri.map((hamur, index) => (
          <option key={index} name="hamurSecimi" value={hamur}>
            {hamur}
          </option>
        ))}
      </select>
      <p className="mt-2">Selected: {selectedOption}</p>
    </div>
  );
}

export default HamurKalinligi;
