import './App.css'
import { QuestionContainer } from './questionContainer'

function App() {

  return (
    <>
      <div id="pointContainer"><p id="totalPoint"></p></div>
      <div id="question">
        <QuestionContainer isHiragana={true}/>
        <QuestionContainer isHiragana={false} />
      </div>

      <div id="check">
          <div>
              <div><p id="yourAnswer"></p></div>
              <div><p id="correctAnswer"></p></div>
              <div><p>Your score!!!</p><p id="result"></p></div>
              <button id="next">start!!!</button>   
          </div>
      </div>
    </>
  )
}

export default App
