import { useRecoilValue } from "recoil";
import { gameResultsState, gameState } from "../utils/recoilStates";

const Stats = () => {
  const { games, wins } = useRecoilValue(gameState);
  const winPercent = useRecoilValue(gameResultsState);

  return (
    <article>
      <p>
        Games played: {games}
        <br />
        Games won: {wins}
        <br />
        Percent of winning games per total games played: {winPercent}
      </p>
    </article>
  );
};

export default Stats;
