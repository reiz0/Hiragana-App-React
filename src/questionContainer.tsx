export const QuestionContainer = ({isHiragana}) => {
  return(
    <div>
      {isHiragana ? (
        <p id="que">あ</p>
      ) : (
        <table id="ans">a</table>
      )}
    </div>
  )
}