import BaseInput from "./BaseInput";
import BaseInputContainer from "./BaseInputContainer";
import BaseLabel from "./BaseLabel";

interface NumericInputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

const NumericInput = ({ label, onChange, value }: NumericInputProps) => {
  return (
    <BaseInputContainer>
      <BaseLabel htmlFor={label}>{label}</BaseLabel>
      <BaseInput id={label} type="number" value={value} onChange={onChange} min={1} max={10000000} />
    </BaseInputContainer>
  );
};

export default NumericInput;
