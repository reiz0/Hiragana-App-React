import { STATES } from "./App";

type Props = {
  states: STATES;
};

export const Check = ({ states }: Props) => {
  const nextQuestion = () => {
    states.changeQuestionNum();
    states.changeIsShowCheckFalse();
  };
  return (
    <div id="check" className="grid place-content-center">
      {states.questionNum > 10 ? (
        <>
          <p>Your score!!! {states.totalPoint}</p>
          <div>
            <button>Again</button>
            <button>Back to menu</button>
            <button>Next</button>
          </div>
        </>
      ) : (
        <>
          <p id="yourAnswer"></p>
          <p id="correctAnswer"></p>
          <button className="bg-white" onClick={nextQuestion}>
            Next
          </button>
        </>
      )}
    </div>
  );
};
