import { useRecoilState } from "recoil";
import { configState } from "../utils/recoilStates";
import BaseInput from "./BaseInput";
import BaseInputContainer from "./BaseInputContainer";
import BaseLabel from "./BaseLabel";

const ShouldChangeCheckbox = () => {
  const [config, setConfig] = useRecoilState(configState);
  const { shouldChange } = config;

  return (
    <BaseInputContainer>
      <BaseLabel>Should change doors after reveal</BaseLabel>
      <BaseInput
        checked={shouldChange}
        type="checkbox"
        onChange={(e) =>
          setConfig(() => {
            return { ...config, shouldChange: e.target.checked };
          })
        }
      />
    </BaseInputContainer>
  );
};

export default ShouldChangeCheckbox;
