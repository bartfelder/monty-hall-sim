import { useSetRecoilState, useRecoilValue } from "recoil";
import { configState, gameState } from "../utils/recoilStates";
import BaseButton from "./BaseButton";
import gameSimulator from "../utils/gameSimulator";

const PlayButton = () => {
  const setGame = useSetRecoilState(gameState);
  const { replayAmount, shouldChange, doorAmount } =
    useRecoilValue(configState);

  const handleClick = () => {
    let winCount = 0;
    for (let i = 0; i < replayAmount; i++) {
      if (gameSimulator(shouldChange, doorAmount)) {
        winCount += 1;
      }
    }
    setGame(({ games, wins }) => {
      return {
        games: games + replayAmount,
        wins: wins + winCount,
      };
    });
  };

  return <BaseButton onClick={handleClick}>Play</BaseButton>;
};

export default PlayButton;
