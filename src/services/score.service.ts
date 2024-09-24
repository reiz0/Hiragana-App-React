import { getAllMaxScoreType, storeScoreType } from "../types/types";

export const storeNewScoreService = async (payload: storeScoreType) => {
  const response = await fetch(
    "https://hiragana-app-backend-reiz0s-projects.vercel.app/quiz/storeNewScore",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!response) {
    throw new Error("error while store score");
  }

  const hiraganaScore = await response.json();
  return hiraganaScore;
};

export const getAllMaxScoreService = async (payload: getAllMaxScoreType) => {
  const response = await fetch(
    "https://hiragana-app-backend-reiz0s-projects.vercel.app/quiz/getAllMaxScore",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!response) {
    throw new Error("error while get max score");
  }

  const allMaxScore = await response.json()
  return allMaxScore
};
