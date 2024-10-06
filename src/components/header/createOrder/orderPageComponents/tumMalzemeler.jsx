import { useState, useEffect } from "react";
import { FormGroup, Input, Label } from "reactstrap";

function TumMalzemeler({
  tumMalzemeler,
  varsayilanMalzemeler,
  selectedMalzemeler,
  setSelectedMalzemeler,
}) {
  useEffect(() => {
    setSelectedMalzemeler(varsayilanMalzemeler);
  }, [varsayilanMalzemeler]);

  const handleCheckboxChange = (event, eklenenMalzeme) => {
    if (event.target.checked) {
      if (selectedMalzemeler.length >= 4 && selectedMalzemeler.length <= 10) {
        setSelectedMalzemeler([...selectedMalzemeler, eklenenMalzeme]);
      } else {
        alert("En az 4, en fazla 10 malzeme seçebilirsiniz.");
      }
    } else {
      setSelectedMalzemeler(
        selectedMalzemeler.filter((item) => item !== eklenenMalzeme)
      );
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <p className="font-bold text-xl">Ek Malzemeler</p>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {tumMalzemeler.map((malzeme, index) => (
          <FormGroup check key={index}>
            <Input
              id={`malzeme-${index}`}
              type="checkbox"
              checked={selectedMalzemeler.includes(malzeme)}
              onChange={(e) => handleCheckboxChange(e, malzeme)}
            />
            <Label check>{malzeme}</Label>
          </FormGroup>
        ))}
      </div>
    </div>
  );
}

export default TumMalzemeler;
