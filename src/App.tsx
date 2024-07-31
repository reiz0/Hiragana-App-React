import { useState } from "react";
import "./App.css";
import { Check } from "./check";
import { getRandomElement, shuffle } from "./helpers/question";
import { QuestionContainer } from "./questionContainer";

export type STATES = {
  totalPoint: number;
  changeTotalPoint: () => void;
  questionNum: number;
  changeQuestionNum: () => void;
  isShowCheck: boolean;
  changeIsShowCheckFalse: () => void;
  changeIsShowCheckTrue: () => void;
  letters: string[];
  letter: string;
  pronounces: string[];
  shufflePronounces: string[];
  yourAnswer: string;
  setYourAnswer: (ans: string) => void;
  correctAnswer: string;
  setCorrectAnswer: (ans: string) => void;
  totalNum: number;
};

function App() {
  const [totalPoint, setTotalPoint] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);
  const [isShowCheck, setIsShowCheck] = useState(true);
  const [letters] = useState(["あ", "い", "う", "え", "お"]);
  const [letter, setLetter] = useState("あ");
  const [pronounces] = useState(["a", "i", "u", "e", "o"]);
  const [shufflePronounces, setshufflePronounces] = useState(["a", "i", "u", "e", "o"]);
  const [yourAnswer, setYourAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const states: STATES = {
    totalPoint: totalPoint,
    changeTotalPoint: () => setTotalPoint(totalPoint + 1),
    questionNum: questionNum,
    changeQuestionNum: () => setQuestionNum(questionNum + 1),
    isShowCheck: isShowCheck,
    changeIsShowCheckFalse: () => setIsShowCheck(false),
    changeIsShowCheckTrue: () => setIsShowCheck(true),
    letters: letters,
    letter: letter,
    pronounces: pronounces,
    shufflePronounces: shufflePronounces,
    yourAnswer: yourAnswer,
    setYourAnswer: (ans) => setYourAnswer(ans),
    correctAnswer: correctAnswer,
    setCorrectAnswer: (ans) => setCorrectAnswer(ans),
    totalNum: 5
  };

  const changeQuestion = () => {
    setLetter(getRandomElement(letters));
    setshufflePronounces(shuffle([...pronounces]));
  };

  return (
    <>
      {(questionNum > 0 && questionNum < states.totalNum+1) && (
        <>
          <div id="pointContainer" className="flex items-center justify-center">
            <p id="questionNum" className="mx-10">Q.{questionNum}</p>
            <p id="totalPoint" className="mx-10">{totalPoint} point</p>
          </div>
          <div
            id="question"
            className="flex justify-center items-center gap-2 w-full"
          >
            <QuestionContainer isHiragana={true} states={states} />
            <QuestionContainer isHiragana={false} states={states} />
          </div>
        </>
      )}

      {(questionNum > states.totalNum || isShowCheck) && (
        <Check states={states} changeQuestion={changeQuestion} />
      )}
    </>
  );
}

export default App;
