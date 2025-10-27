import React from "react";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className=" min-h-screen">
      <div className="w-11/12 lg:w-10/12 mx-auto mt-4">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="flex justify-center my-15">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
