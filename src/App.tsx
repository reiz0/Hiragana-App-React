import { useState } from 'react'
import './App.css'
import { QuestionContainer } from './questionContainer'
import { Check } from './check'

export type STATES = {
  totalPoint: number,
  changeTotalPoint: () => void,
  questionNum: number,
  changeQuestionNum: () => void,
  isShowCheck: boolean,
  changeIsShowCheckFalse: () => void,
  changeIsShowCheckTrue: () => void
}

function App() {
  const [totalPoint, setTotalPoint] = useState(0)
  const [questionNum, setQuestionNum] = useState(0)
  const [isShowCheck, setIsShowCheck] = useState(true)

  const states: STATES = {
    totalPoint: totalPoint,
    changeTotalPoint: () => setTotalPoint(totalPoint + 1),
    questionNum: questionNum,
    changeQuestionNum: () => setQuestionNum(questionNum + 1),
    isShowCheck: isShowCheck,
    changeIsShowCheckFalse: () => setIsShowCheck(false),
    changeIsShowCheckTrue: () => setIsShowCheck(true) 
  }

  return (
    <>
      <div id="pointContainer"><p id="totalPoint">Q.{questionNum}</p></div>
      <div id="question" className='flex justify-center items-center gap-2 w-full'>
        <QuestionContainer isHiragana={true} states={states} />
        <QuestionContainer isHiragana={false} states={states} />
      </div>

      {isShowCheck && (<Check states={states}/>)}
    </>
  )
}

export default App
