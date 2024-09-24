import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

export const UserProfile = () => {
  const { logout, currentUser } = useContext(AuthContext);
  console.log(currentUser);
  
  return (
    <div className="grid place-content-center">
      <div className="bg-green-200 p-5 rounded-md text-center">
        <h1>Your Profile</h1>
        <p>Account Name: {currentUser?.accountName}</p>
        <p>User Name: {currentUser?.userName}</p>
        <button
          className="w-full my-5 rounded-md bg-green-950"
          onClick={logout}
        >
          <Link to="/" className="text-white py-2 w-full block">
            Logout
          </Link>
        </button>
      </div>
    </div>
  );
};
