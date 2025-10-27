import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div className="my-10">
      <h1 className="text-xl font-bold my-4">Find Us On</h1>
      <div className="join join-vertical w-full  ">
        <button className="btn justify-start py-7 bg-base-100   join-item"> <FaFacebook size={20} /> Facebook</button>
        <button className="btn justify-start py-7 bg-base-100   join-item"> <FaTwitter size={20} ></FaTwitter> Twitter</button>
        <button className="btn justify-start py-7 bg-base-100   join-item"><FaInstagram size={20} ></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUsOn;
