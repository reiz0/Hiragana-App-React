import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Data from "../../assets/stages.json";
import { AuthContext } from "../../context/auth.context";
import { getAllMaxScoreService } from "../../services/score.service";
import { scoreType } from "../../types/types";

export const Menu = () => {
  const { currentUser } = useContext(AuthContext);
  const [allMaxScore, setAllMaxScore] = useState<scoreType[]>([]);
  useEffect(() => {
    const getScore = async () => {
      if (currentUser) {
        const getMaxScore = await getAllMaxScoreService({
          user: currentUser._id,
        });
        getMaxScore && setAllMaxScore(getMaxScore);
      }
    };
    getScore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findMaxScore = (level: number) => {
    const isMaxScore = allMaxScore.find((score) => score.level === level);
    if (isMaxScore) {
      return `${isMaxScore.score} point`;
    } else {
      return "No Score yet";
    }
  };

  return (
    <div className="py-10 flex justify-center">
      <div className="max-w-5xl">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-7 gap-x-14">
          {Data.map((stage) => (
            <div key={stage.id} className="bg-slate-50 rounded-md w-60 h-40 text-center">
              <Link
                to={`/quiz/${stage.id}`}
                className="h-full grid place-items-center"
              >
                <div>
                  <h1 className="text-3xl font-bold">Level {stage.id}</h1>
                  <p className="text-2xl">
                    {stage.letters.map((letter) => letter)}
                  </p>
                  {currentUser && <p className="text-xl text-orange-700">{findMaxScore(stage.id)}</p>}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
