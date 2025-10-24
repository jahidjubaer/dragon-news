import React from "react";
import { NavLink } from "react-router";
import userImg from "../assets/user.png"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
      <div></div>
      <div className="flex gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3">
        <img src={userImg} alt="" />
        <button className="btn btn-primary py-2 px-6">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
