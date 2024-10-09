import React from "react";
import Select from "react-select";

function DoughType({ hamurOptions, hamurType, setHamurType }) {
  const options = hamurOptions.map((option) => ({
    value: option,
    label: option,
  }));

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      setHamurType(selectedOption.value);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <div className="flex flex-col  gap-4">
        <h1 className="font-semibold text-lg">
          Hamur Seç <span className="text-red-600">*</span>
        </h1>
        <Select
          value={options.find((option) => option.value === hamurType)} // Seçili hamur tipini bul
          onChange={handleChange} // Değişiklik olduğunda handleChange fonksiyonunu çağır
          options={options} // Seçenekler
          placeholder="-Hamur Kalınlığı Seç-" // Varsayılan placeholder
          className="react-select-container"
          classNamePrefix="react-select"
          styles={{
            control: (base) => ({
              ...base,
              borderColor: "#ccc",
              "&:hover": { borderColor: "#ff6347" }, // Kenar rengi değişikliği
              borderRadius: "8px",
            }),
            menu: (base) => ({
              ...base,
              zIndex: 100, // Açılır menü z-index ayarı
            }),
          }}
        />
      </div>
    </div>
  );
}

export default DoughType;
