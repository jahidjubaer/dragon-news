import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>

      {/* real time date update using date-fns */}
      <p className="font-semibold text-accent">
        <span className="font-bold text-black">
          {format(new Date(), "EEEE,")}
        </span>
        {format(new Date(), " MMMM dd, YYY || kk:mm:ss bbb")}
      </p>
    </div>
  );
};

export default Header;
