import { STATES } from "./Quiz";

type Props = {
  isHiragana: boolean;
  states: STATES;
};

export const QuestionContainer = ({ isHiragana, states }: Props) => {
  const showAnswer = (pronouce: string) => {
    states.setCorrectAnswer(
      `Correct answer is "${
        states.pronounces[states.letters.indexOf(states.letter)]
      }"`
    );
    if (
      states.letters.indexOf(states.letter) ===
      states.pronounces.indexOf(pronouce)
    ) {
      states.changeTotalPoint();
      states.setYourAnswer(`Correct!!`);
    } else {
      states.setYourAnswer(`Incorrect!!`);
    }
    states.changeIsShowCheckTrue();
    states.setPointerEvents("pointer-events-none");
  };

  return (
    <div className="grid place-items-center w-5/12 h-5/6 bg-slate-50 rounded-md mt-10">
      {isHiragana && (
        <>
          <div className="w-4/5 h-5/6 grid">
            <div className="flex items-center flex-col">
              <h2 className="text-4xl">Q.{states.questionNum}</h2>
              <h2 className="text-2xl py-2">How do you pronounce?</h2>
            </div>
            <h3 className="text-9xl my-5 text-center">{states.letter}</h3>
          </div>
        </>
      )}
      {!isHiragana && (
        <ul className="w-4/5 h-5/6 grid gap-3">
          {states.shufflePronounces.map((pronounce, index) => (
            <li key={`${pronounce}-${index}`}>
              <button
                className={`bg-green-300 w-full h-full rounded-xl shadow-md ${states.pointerEvents}`}
                onClick={() => showAnswer(pronounce)}
              >
                <p className="text-4xl font-bold">{pronounce}</p>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
