import { atom, selector } from "recoil";

export const configState = atom({
  key: "configState",
  default: {
    replayAmount: 100,
    shouldChange: false,
    doorAmount: 3,
  },
});

export const gameState = atom({
  key: "gameState",
  default: {
    games: 0,
    wins: 0,
  },
});

export const gameResultsState = selector({
  key: "gameResultsState",
  get: ({ get }) => {
    const { games, wins } = get(gameState);
    const percent = games > 1 ? ((wins / games) * 100).toFixed(2) : 0;

    return `${percent}%`;
  },
});
