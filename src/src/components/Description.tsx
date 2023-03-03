import { useRecoilValue } from "recoil";
import { configState } from "../utils/recoilStates";

const Description = () => {
  const { replayAmount, shouldChange, doorAmount } =
    useRecoilValue(configState);

  return (
    <article>
      <p>
        Here's yet another demonstration of the infamous Monty Hall Problem. You
        can read about it{" "}
        <a
          href="https://en.wikipedia.org/wiki/Monty_Hall_problem"
          target="_blank"
        >
          here.
        </a>
      </p>
      <p>This play simulator operates with the following assumptions:</p>
      <ul>
        <li>The player chooses one door randomly from {doorAmount} doors</li>
        <li>
          The game host opens all but one door of the unselected, and the opened
          doors must be loosing options
        </li>
        <li>
          At this point the host provides the player with a choice, which the
          player does {shouldChange ? "" : "not "}take
        </li>
        <li>This scenario will play out {replayAmount} times</li>
      </ul>
      <p>
        You'll see the result stats below. The different playtests are added
        together and can be reset by the Reset button
      </p>
    </article>
  );
};

export default Description;
