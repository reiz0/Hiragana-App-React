import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { STATES } from "./Quiz";

type Props = {
  states: STATES;
  changeQuestion: () => void;
  id: number;
};

export const Check = ({ states, changeQuestion, id }: Props) => {
  const { currentUser } = useContext(AuthContext);

  const nextQuestion = () => {
    states.changeQuestionNum();
    states.changeIsShowCheckFalse();
    changeQuestion();
    states.setPointerEvents("");
  };

  return (
    <>
      <div
        id="check"
        className="grid place-content-center bg-green-300 rounded-md shadow-2xl"
      >
        {states.questionNum > states.totalNum ? (
          <>
            <p className="text-center text-4xl">Your score!!!</p>
            <p className="text-center text-3xl font-bold">
              <span className="text-5xl text-green-700">
                {states.totalPoint}
              </span>
              &nbsp;/ {states.totalNum}
            </p>
            <div className="text-center">
              <button
                className="bg-green-300 m-2 w-28 rounded-xl shadow-lg border-green-800 border-2"
                onClick={states.saveScore}
              >
                <Link to={`/quiz/${id}`} className="p-2 block">
                  Again
                </Link>
              </button>
              <button
                className="bg-green-300 m-2 w-28 rounded-xl shadow-lg border-green-800 border-2"
                onClick={states.saveScore}
              >
                <Link to={`/quiz/${id + 1}`} className="p-2 block">
                  Next Level
                </Link>
              </button>
            </div>
          </>
        ) : (
          <>
            <p id="yourAnswer" className="text-4xl text-center font-bold">
              {states.yourAnswer}
            </p>
            <p id="correctAnswer" className="text-2xl text-center">
              {states.correctAnswer}
            </p>
            <div className="text-center">
              <button
                className="bg-green-300 rounded-xl m-2 p-2 w-28 shadow-lg border-green-800 border-2"
                onClick={nextQuestion}
              >
                {states.questionNum > 0 && "Next"}
                {states.questionNum < 1 && "Start"}
              </button>
            </div>
          </>
        )}
      </div>
      {states.questionNum < 1 && !currentUser && (
        <div className="text-center m-3 pt-1">
          <p className="text-red-800 text-3xl font-extrabold">
            To save your score, please login to your account
          </p>
          <p className="text-red-800">*Without logging in, you can continue</p>
        </div>
      )}
    </>
  );
};
