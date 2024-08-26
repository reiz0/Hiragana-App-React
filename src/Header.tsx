import { CiLogin } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const pathname = useLocation().pathname;

  return (
    <header className="flex items-center justify-between">
      <h1 className="font-bold text-4xl mx-5">
        <Link to="/">HIRAGANA APP</Link>
      </h1>

      {pathname !== "/login" && (
        <Link to="/login">
          <CiLogin className="text-4xl mr-2 text-green-950 font-bold" />
        </Link>
      )}
      {pathname === "/register" && <Link to="/register"></Link>}
    </header>
  );
};
