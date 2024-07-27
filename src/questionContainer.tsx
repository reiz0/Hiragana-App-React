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

  const showAnswer = () => {
    states.changeIsShowCheckTrue();
  };
  return (
    <div className="grid place-items-center w-5/12 h-5/6 bg-green-400">
      {isHiragana && <h3>{getRandomElement(letters)}</h3>}
      {!isHiragana && (
        <ul className="w-4/5 h-5/6">
          {shuffle(pronounces).map((pronounce, index) => (
            <li
              key={`${pronounce}-${index}`}
              className="h-1/5 grid place-items-center"
            >
              <button className="bg-green-200 w-2/5 h-5/6" onClick={showAnswer}>
                {pronounce}{" "}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
