import { STATES } from "./Quiz";

type Props = {
  states: STATES;
  changeQuestion: () => void;
};

export const Check = ({ states, changeQuestion }: Props) => {
  const nextQuestion = () => {
    states.changeQuestionNum();
    states.changeIsShowCheckFalse();
    changeQuestion();
  };
  return (
    <div id="check" className="grid place-content-center bg-green-300 rounded-md">
      {states.questionNum > states.totalNum ? (
        <>
          <p className="text-center text-4xl">Your score!!!</p>
          <p className="text-center text-3xl font-bold"><span className="text-5xl text-green-700">{states.totalPoint}</span>&nbsp;/ {states.totalNum}</p>
          <div>
            <button className="bg-green-300 m-2 p-2 w-28 rounded-xl shadow-lg border-green-800 border-2"><a href="/quiz">Again</a></button>
            <button className="bg-green-300 m-2 p-2 w-28 rounded-xl shadow-lg border-green-800 border-2">Next Level</button>
          </div>
        </>
      ) : (
        <>
          <p id="yourAnswer" className="text-4xl text-center font-bold">{states.yourAnswer}</p>
          <p id="correctAnswer" className="text-2xl text-center">{states.correctAnswer}</p>
          <div className="text-center">
            <button className="bg-green-300 rounded-xl m-2 p-2 w-28 shadow-lg border-green-800 border-2" onClick={nextQuestion}>
              {states.questionNum > 0 && "Next"}
              {states.questionNum < 1 && "Start"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
