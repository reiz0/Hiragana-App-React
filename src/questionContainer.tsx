import { AnswerButton } from "./answerButton";

export const QuestionContainer = ({isHiragana, states}) => {
  const letters = ["あ", "い", "う", "え", "お"]
  const pronounces = ["a", "i", "u", "e", "o"]
  const changePronounceButton = () => {
    const pronounceButtonList = []
    for(let i = 1; i <= letters.length; i++){
      const pronounceIndex = Math.floor(Math.random()*pronounces.length);
      const choicePronounce = pronounces[pronounceIndex]
      pronounces.splice(pronounceIndex, 1);
      
      pronounceButtonList.push(
        <tr>
          <td>
            <AnswerButton choicePronounce={choicePronounce}/>
          </td>
        </tr>
      )
    }
    return pronounceButtonList
  }

  const questionLetter = letters[Math.floor(Math.random()*letters.length)]

  return(
    <div>
      {isHiragana ? (
        <p id="que">{questionLetter}</p>
      ) : (
        <table id="ans">
          {changePronounceButton()}
        </table>
      )}
    </div>
  )
}