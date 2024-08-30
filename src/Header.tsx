import { useContext } from "react";
import { CiLogin } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "./context/auth.context";

export const Header = () => {
  const pathname = useLocation().pathname;
  const {currentUser} = useContext(AuthContext)

  return (
    <header className="flex items-center justify-between">
      <h1 className="font-bold text-4xl mx-5">
        <Link to="/">HIRAGANA APP</Link>
      </h1>

      {pathname !== "/login" && !currentUser && (
        <Link to="/login">
          <CiLogin className="text-4xl mr-2 text-green-950 font-bold" />
        </Link>
      )}
      {currentUser && (
        <Link to="/profile">
        <div className="mr-2 text-center">
          <FaRegUserCircle className="text-4xl text-green-950 font-bold" />
          <p>{currentUser.userName}</p>
        </div>
        </Link>
      )}
    </header>
  );
};
