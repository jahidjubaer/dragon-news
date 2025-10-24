import React, { use } from "react";
import { NavLink } from "react-router";

// data import ;
const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const LeftAside = () => {
  const categoriesData = use(categoriesPromise);
  // console.log(categoriesData);

  return (
    <div>
      <h1 className="font-bold text-xl mb-6">All Category</h1>
      <div className="text-center">
        {categoriesData.map((data) => (
          <NavLink
            key={data.id}
            className="grid gird-cols-1 gap-4 mb-3  text-xl font-medium text-accent"
            // dynamic route
            to={`/category/${data.id}`}
          >
            {data.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
