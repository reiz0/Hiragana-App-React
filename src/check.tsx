import { STATES } from "./App";

type Props = {
  states: STATES;
  changeQuestion: () => void;
};

export const Check = ({ states, changeQuestion }: Props) => {
  const nextQuestion = () => {
    states.changeQuestionNum();
    states.changeIsShowCheckFalse();
    changeQuestion()
  };
  return (
    <div id="check" className="grid place-content-center">
      {states.questionNum > states.totalNum ? (
        <>
          <p>Your score!!! {states.totalPoint} / {states.totalNum}</p>
          <div>
            <button className="bg-white m-2">Again</button>
            <button className="bg-white m-2">Back to menu</button>
            <button className="bg-white m-2">Next</button>
          </div>
        </>
      ) : (
        <>
          <p id="yourAnswer">{states.yourAnswer}</p>
          <p id="correctAnswer">{states.correctAnswer}</p>
          <button className="bg-white" onClick={nextQuestion}>
            {states.questionNum > 0 && "Next"}
            {states.questionNum < 1 && "Start"}
          </button>
        </>
      )}
    </div>
  );
};
