import React from "react";
import NewsDetailsCard from "../components/news-layout/NewsDetailsCard";
import Header from "../components/Header";
import RightAside from "../components/home-layout/RightAside";
import FindUsOn from "../components/home-layout/FindUsOn";
import QZone from "../components/home-layout/QZone";
import { Outlet } from "react-router";

const NewsLayout = () => {
  return (
    <div className="w-11/12 lg:w-10/12  mx-auto py-6">
      <header>
        <Header></Header>
      </header>
      <div className="grid grid-cols-12 mt-10 gap-10">
        <div className="col-span-9">
          <h1 className="my-2 font-bold text-2xl">The Dragon News</h1>
          <Outlet></Outlet>
        </div>
        <aside className="col-span-3">
          <RightAside></RightAside>
          <FindUsOn></FindUsOn>
          <QZone></QZone>
        </aside>
      </div>
    </div>
  );
};

export default NewsLayout;
