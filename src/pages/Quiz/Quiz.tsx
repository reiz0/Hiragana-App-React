import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../assets/stages.json";
import { AuthContext } from "../../context/auth.context";
import { getRandomElement, shuffle } from "../../helpers/question";
import { storeNewScoreService } from "../../services/score.service";
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
  pointerEvents: string;
  setPointerEvents: (events: string) => void;
  saveScore: () => void;
};

export const Quiz = () => {
  const { currentUser } = useContext(AuthContext);
  const isId = useParams().id;

  let id = isId ? parseInt(isId) : 0;

  const isLetters = Data.find((element) => element.id === id)?.letters;
  const letters = isLetters ? isLetters : [];
  !isLetters && (id = 0);

  const isPronounces = Data.find((element) => element.id === id)?.pronounces;
  const pronounces = isPronounces ? isPronounces : [];
  !isPronounces && (id = 0);

  const [totalPoint, setTotalPoint] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);
  const [isShowCheck, setIsShowCheck] = useState(true);
  const [letter, setLetter] = useState("");
  const [shufflePronounces, setshufflePronounces] = useState([...pronounces]);
  const [yourAnswer, setYourAnswer] = useState(`Level ${id}`);
  const [correctAnswer, setCorrectAnswer] = useState(
    `${letters.map((e) => `${e}`).join("")}`
  );
  const [pointerEvents, setPointerEvents] = useState("");

  const resetAll = () => {
    setTotalPoint(0);
    setQuestionNum(0);
    setIsShowCheck(true);
    setshufflePronounces([...pronounces]);
    setYourAnswer(`Level ${id}`);
    setCorrectAnswer(`${letters.map((e) => `${e}`).join("")}`);
    setPointerEvents("");
  }
  const saveScore = async () => {
    if (currentUser) {
      await storeNewScoreService({
        level: id,
        user: currentUser._id,
        score: totalPoint,
        quiz: "hiragana"
      });
    }
    resetAll()
  };
  useEffect(()=>{
    resetAll()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  const states: STATES = {
    totalPoint,
    changeTotalPoint: () => setTotalPoint(totalPoint + 1),
    questionNum,
    changeQuestionNum: () => setQuestionNum(questionNum + 1),
    isShowCheck,
    changeIsShowCheckFalse: () => setIsShowCheck(false),
    changeIsShowCheckTrue: () => setIsShowCheck(true),
    letters,
    letter,
    pronounces,
    shufflePronounces,
    yourAnswer,
    setYourAnswer: (ans) => setYourAnswer(ans),
    correctAnswer,
    setCorrectAnswer: (ans) => setCorrectAnswer(ans),
    totalNum: 10,
    pointerEvents,
    setPointerEvents: (events) => setPointerEvents(events),
    saveScore,
  };

  const changeQuestion = () => {
    setLetter(getRandomElement(letters));
    setshufflePronounces(shuffle([...pronounces]));
  };

  return (
    <>
      {id === 0 && (
        <div>
          <h1>This ID is not available.</h1>
          <h3>
            I am sorry but please press HIRAGANA APP logo and go back to main
            page.
          </h3>
        </div>
      )}

      {id !== 0 && questionNum > 0 && questionNum < states.totalNum + 1 && (
        <div id="quizContainer" className="grid">
          <div
            id="question"
            className="flex justify-center items-center gap-2 w-full"
          >
            <QuestionContainer isHiragana={true} states={states} />
            <QuestionContainer isHiragana={false} states={states} />
          </div>
          <div className=" grid justify-center">
            <div className="h-20 w-72 bg-slate-50 rounded-md flex justify-center items-center">
              <p id="totalPoint" className="text-3xl font-bold">
                <span className="text-5xl text-green-700">{totalPoint}</span>
                &nbsp;/ {states.totalNum} point
              </p>
            </div>
          </div>
        </div>
      )}

      {id !== 0 && (questionNum > states.totalNum || isShowCheck) && (
        <Check states={states} changeQuestion={changeQuestion} id={id} />
      )}
    </>
  );
};
