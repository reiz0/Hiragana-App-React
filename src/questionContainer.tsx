import { useState } from "react";
import { STATES } from "./App";
import { getRandomElement, shuffle } from "./helpers/question";

type Props = {
  isHiragana: boolean;
  states: STATES;
};

export const QuestionContainer = ({ isHiragana, states }: Props) => {
  const [letters] = useState(["あ", "い", "う", "え", "お"]);
  const [pronounces] = useState(["a", "i", "u", "e", "o"]);

  return (
    <div className="grid place-items-center w-5/12 bg-green-300">
      {isHiragana && <h3>{getRandomElement(letters)}</h3>}
      {!isHiragana && (
        <ul className="w-4/5 h-5/6">
          {shuffle(pronounces).map((pronounce, index) => (
            <li key={`${pronounce}-${index}`} className="h-1/5 grid place-items-center">
              <button className="bg-green-700 w-2/5 h-5/6">{pronounce}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
