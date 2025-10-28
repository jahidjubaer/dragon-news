import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import AuthContext from "../auth-provider/AuthContext";

const Navbar = () => {
  const { user, userSignOut } = use(AuthContext);
  
  // handleSignout
  const handleSignout = () => {
    userSignOut()
      .then(() => {
        alert("Sign-out successful.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex justify-between items-center ">
      <div></div>
      <div className="flex gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-3">
        <img
          className="w-12 rounded-full"
          src={`${user?.photoURL || userImg}`}
          alt=""
        />
        <h1 className="font-bold text-lg">{user?.displayName || ""}</h1>
        {user ? (
          <button onClick={handleSignout} className="btn btn-primary py-2 px-6">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary py-2 px-6">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
