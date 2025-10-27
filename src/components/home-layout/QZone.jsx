import React from "react";
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playgroundImg from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-4 rounded-lg ">
      <h1 className="text-xl font-bold">Q Zone</h1>
      <div className="space-y-8 flex flex-col items-center my-6">
        <img className="w-full" src={swimmingImg} alt="" />
        <img className="w-full" src={classImg} alt="" />
        <img className="w-full" src={playgroundImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
