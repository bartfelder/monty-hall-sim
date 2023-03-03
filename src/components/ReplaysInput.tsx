import { useRecoilState } from "recoil";
import { configState } from "../utils/recoilStates";
import NumericInput from "./NumericInput";

const ReplaysInput = () => {
  const [config, setConfig] = useRecoilState(configState);
  const { replayAmount } = config;

  return (
    <NumericInput
      label="Number of replays"
      onChange={(e) =>
        setConfig(() => {
          return { ...config, replayAmount: parseInt(e.target.value) };
        })
      }
      value={replayAmount}
    />
  );
};

export default ReplaysInput;
