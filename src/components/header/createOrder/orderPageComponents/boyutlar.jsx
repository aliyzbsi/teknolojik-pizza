import { FormGroup, Input, Label } from "reactstrap";

function Boyutlar({ boyutSecenekleri }) {
  return (
    <div>
      <label className="font-bold pb-4">
        Boyut Seç <span className="text-red-600">*</span>
      </label>
      {boyutSecenekleri.map((boyut, index) => (
        <FormGroup check key={index}>
          <Input
            name="boyutSecimi"
            type="radio"
            id={`boyut-${index}`}
            value={boyut}
          />
          {/* 'htmlFor' yerine 'for' kullanılmasına gerek yok */}
          <Label for={`boyut-${index}`}>{boyut}</Label>
        </FormGroup>
      ))}
    </div>
  );
}

export default Boyutlar;
