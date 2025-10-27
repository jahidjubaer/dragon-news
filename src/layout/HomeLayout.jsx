import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/home-layout/LeftAside";
import RightAside from "../components/home-layout/RightAside";
import FindUsOn from "../components/home-layout/FindUsOn";
import QZone from "../components/home-layout/QZone";
import addsImg from "../assets/bg.png";

const HomeLayout = () => {
  return (
    <div>
      {/* header section  */}
      <header className="my-10">
        <Header></Header>
      </header>
      {/* latest news */}
      <section className="lg:w-10/12 w-11/12 mx-auto ">
        <LatestNews></LatestNews>
      </section>
      {/* navbar */}
      <nav className="lg:w-10/12 w-11/12 mx-auto my-10">
        <Navbar></Navbar>
      </nav>
      {/* main section  */}
      <main className="lg:w-10/12 w-11/12 mx-auto grid grid-cols-12 gap-8">
        {/* left aside */}
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <aside className="col-span-3 sticky top-5 h-fit">
            <LeftAside />
          </aside>
        </Suspense>

        {/* main content */}
        <section className="news col-span-6">
          <Outlet />
        </section>

        {/* right aside */}
        <aside className="col-span-3 ">
          <RightAside />
          <FindUsOn></FindUsOn>
          <QZone></QZone>
          {/* adds */}
          <div className="my-8">
            <img className="w-full" src={addsImg} alt="" />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
