import { useState } from 'react'
import './App.css'
import { QuestionContainer } from './questionContainer'

type STATES = {
  totalPoint: number,
  changeTotalPoint: () => void,
  questionNum: number,
  changeQuestionNum: () => void
}

function App() {
  const [totalPoint, setTotalPoint] = useState(0)
  const [questionNum, setQuestionNum] = useState(0)

  function changeTotalPoint() {
    setTotalPoint(1)
  }
  function changeQuestionNum() {
    setQuestionNum(1)
  }

  const states: STATES = {
    totalPoint: totalPoint,
    changeTotalPoint: changeTotalPoint,
    questionNum: questionNum,
    changeQuestionNum: changeQuestionNum
  }

  return (
    <>
      <div id="pointContainer"><p id="totalPoint"></p></div>
      <div id="question">
        <QuestionContainer isHiragana={true} states={states} />
        <QuestionContainer isHiragana={false} states={states} />
      </div>

      {totalPoint < 1 && (
        <div id="check">
          <div>
            <div><p id="yourAnswer"></p></div>
            <div><p id="correctAnswer"></p></div>
            <div><p>Your score!!!</p><p id="result"></p></div>
            <button id="next">start!!!</button>   
          </div>
        </div>
      )}
      
    </>
  )
}

export default App
