
import Data from "../../../public/stages.json"


export const Menu = () => {
  return (
    <div className="py-10 flex justify-center">
      <div className="max-w-5xl">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-7 gap-x-14">
          {
            Data.map((stage) => (
              <div key={stage.id} className="bg-slate-50 rounded-md w-60 h-40">
                <a href={`/quiz/${stage.id}`} className="h-full grid place-items-center">
                  <div>
                    <h1 className="text-3xl font-bold">Level {stage.id}</h1>
                    <p className="text-2xl">{stage.letters.map((letter) => letter)}</p>
                  </div>
                </a>
              </div>
            ))
          }
        </div>

      </div>

    </div>
  );
};
