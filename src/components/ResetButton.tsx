import { useRecoilState } from "recoil";
import { gameState } from "../utils/recoilStates";
import BaseButton from "./BaseButton";

const ResetButton = () => {
  const [{ games }, setGame] = useRecoilState(gameState);

  const handleReset = () => {
    setGame({ games: 0, wins: 0 });
  };

  return (
    <BaseButton onClick={handleReset} disabled={games < 1}>
      Reset
    </BaseButton>
  );
};

export default ResetButton;
