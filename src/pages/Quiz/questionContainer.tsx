import { STATES } from "./Quiz";

type Props = {
  isHiragana: boolean;
  states: STATES;
};

export const QuestionContainer = ({ isHiragana, states }: Props) => {
  const showAnswer = (e) => {
    states.setCorrectAnswer(`Correct answer is ${states.letter}`);
    if (
      states.letters.indexOf(states.letter) ===
      states.pronounces.indexOf(e.target.textContent)
    ) {
      states.changeTotalPoint();
      states.setYourAnswer(`Correct!!`);
    } else {
      states.setYourAnswer(`Your Answer is ${e.target.textContent}`);
    }
    states.changeIsShowCheckTrue();
  };

  return (
    <div className="grid place-items-center w-5/12 h-5/6 bg-green-400">
      {isHiragana && <h3>{states.letter}</h3>}
      {!isHiragana && (
        <ul className="w-4/5 h-5/6">
          {states.shufflePronounces.map((pronounce, index) => (
            <li
              key={`${pronounce}-${index}`}
              className="h-1/5 grid place-items-center"
            >
              <button className="bg-green-200 w-2/5 h-5/6" onClick={showAnswer}>
                {pronounce}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
