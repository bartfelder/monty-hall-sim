import { useRecoilState } from "recoil";
import { configState } from "../utils/recoilStates";
import NumericInput from "./NumericInput";

const DoorsInput = () => {
  const [config, setConfig] = useRecoilState(configState);
  const { doorAmount } = config;

  return (
    <NumericInput
      label="Number of doors"
      onChange={(e) =>
        setConfig(() => {
          return { ...config, doorAmount: parseInt(e.target.value) };
        })
      }
      value={doorAmount}
    />
  );
};

export default DoorsInput;
