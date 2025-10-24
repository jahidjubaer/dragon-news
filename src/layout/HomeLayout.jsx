import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      {/* header section  */}
      <header className="my-10">
        <Header></Header>
      </header>
      {/* latest news */}
      <section className="lg:w-10/12 w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </section>
      {/* navbar */}
      <nav className="lg:w-10/12 w-11/12 mx-auto my-10">
        <Navbar></Navbar>
      </nav>
      <main>
        <section className="left-bar"></section>
        <section className="news">
          {/* why outlet . bz it can be change ;  */}
          <Outlet></Outlet>
        </section>
        <section className="right-bar"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
