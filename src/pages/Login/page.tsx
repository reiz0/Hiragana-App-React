import { FormEvent, useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { LoginUserType, NewUserType } from "../../types/types";
import { Link } from "react-router-dom";

export const Login = () => {
  const pathname = useLocation().pathname;
  const { login, register, currentUser } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("")

  const inputClass =
    "text-black w-full my-5 px-4 py-2 border border-green-950 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400";
  
  useEffect(() => {
    setLoading("")
  }, [pathname])

  const handleLoginUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading("pointer-events-none bg-green-100")

    if (pathname === "/login") {
      const loginUser: LoginUserType = {
        accountName,
        password,
      };
      login(loginUser);
    }

    if (pathname === "/register") {
      const newUser: NewUserType = {
        userName,
        accountName,
        password,
      };
      register(newUser);
    }
  };

  return (
    <div className="grid place-content-center">
      {currentUser && <Navigate replace to="/" />}
      <form
        method="post"
        className="bg-green-200 p-5 rounded-md"
        onSubmit={handleLoginUser}
      >
        <h1 className="text-center mb-6 test-2xl font-bold">
          {pathname === "/login" && "Login"}
          {pathname === "/register" && "Register"}
        </h1>

        {pathname === "/register" && (
          <>
            <input
              type="text"
              value={userName}
              placeholder="User Name"
              required
              className={inputClass}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
          </>
        )}

        <input
          type="text"
          value={accountName}
          placeholder="Account Name"
          required
          className={inputClass}
          onChange={(e) => setAccountName(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Password"
          required
          className={inputClass}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className={`w-full my-5 text-white py-2 rounded-md bg-green-950 ${loading}`}
        >
          {pathname === "/login" && "Login"}
          {pathname === "/register" && "Register"}
        </button>
        {pathname === "/login" && (
          <p>Don't have any account? register <Link to="/register" className="text-red-800">HERE</Link>!</p>
        )}
      </form>
    </div>
  );
};
