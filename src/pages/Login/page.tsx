import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Login = () => {
  const pathname = useLocation().pathname;

  const [userName, setUserName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");

  const inputClass =
    "text-black w-full my-5 px-4 py-2 border border-green-950 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400";

  return (
    <div className="grid place-content-center">
      <form method="post" className="bg-green-200 p-5 rounded-md">
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
          className="w-full my-5 text-white py-2 rounded-md bg-green-950"
        >
          {pathname === "/login" && "Login"}
          {pathname === "/register" && "Register"}
        </button>
      </form>
    </div>
  );
};
