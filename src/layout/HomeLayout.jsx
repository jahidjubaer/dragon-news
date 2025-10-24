import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/home-layout/LeftAside";
import RightAside from "../components/home-layout/RightAside";

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
      <main className="lg:w-10/12 w-11/12 mx-auto grid grid-cols-12  gap-8">
        {/* left aside */}
        {/* suspense for categories data load  */}
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <aside className="col-span-3 ">
            <LeftAside></LeftAside>
          </aside>
        </Suspense>
        {/* why outlet . bz it can be change ;  */}
        <section className="news col-span-6">
          <Outlet></Outlet>
        </section>
        {/* right aside */}
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
