import React from "react";

const NewsDetailsCard = () => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="lg:h-[410] p-4 ">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="w-full rounded-sm h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-start">
          <button className="btn btn-secondary">All news in this category</button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
