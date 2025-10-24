import React from "react";
import { useParams } from "react-router";

const HomePage = () => {
  // get the id form route
  const id = useParams();
  console.log(id);

  return (
    <div>
      <h1 className="font-bold">Dragon News Home</h1>
    </div>
  );
};

export default HomePage;
