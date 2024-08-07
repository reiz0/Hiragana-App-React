
import Data from "../../../public/stages.json"


export const Menu = () => {
  return (
    <div>
      <h1>menu</h1>
      {
        Data.map((stage) => (
          <div>
            <h1>Level {stage.id}</h1>
            <p>{stage.letters.map((letter) => letter)}</p>
          </div>
        ))
      }
    </div>
  );
};
