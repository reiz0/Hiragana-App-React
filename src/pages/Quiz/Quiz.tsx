import { useState } from "react";
import { getRandomElement, shuffle } from "../../helpers/question";
import { Check } from "./check";
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

export const Quiz = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);
  const [isShowCheck, setIsShowCheck] = useState(true);
  const [letters] = useState(["あ", "い", "う", "え", "お"]);
  const [letter, setLetter] = useState("あ");
  const [pronounces] = useState(["a", "i", "u", "e", "o"]);
  const [shufflePronounces, setshufflePronounces] = useState([
    "a",
    "i",
    "u",
    "e",
    "o",
  ]);
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
    totalNum: 5,
  };

  const changeQuestion = () => {
    setLetter(getRandomElement(letters));
    setshufflePronounces(shuffle([...pronounces]));
  };

  return (
    <>
      {questionNum > 0 && questionNum < states.totalNum + 1 && (
        <div id="quizContainer" className="grid">
          <div
            id="question"
            className="flex justify-center items-center gap-2 w-full"
          >
            <QuestionContainer isHiragana={true} states={states} />
            <QuestionContainer isHiragana={false} states={states} />
          </div>
          <div className=" grid justify-center">
            <div className="text-3xl font-bold h-20 w-72 bg-slate-50 rounded-md flex justify-center items-center">
              <p id="totalPoint">
                <span className="text-5xl text-green-700">{totalPoint}</span>&nbsp;/ {states.totalNum} point
              </p>
            </div>
          </div>
        </div>
      )}

      {(questionNum > states.totalNum || isShowCheck) && (
        <Check states={states} changeQuestion={changeQuestion} />
      )}
    </>
  );
};
