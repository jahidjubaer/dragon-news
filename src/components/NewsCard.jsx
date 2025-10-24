import React from "react";
import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details,  } =
    news;

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl mb-6">
      {/* Header with author info and actions */}
      <div className="flex bg-base-200 rounded-t-xl items-center justify-between p-4 pb-2">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-20 h-20 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-xl">{author.name}</h3>
            <p className=" text-gray-500">
              {formatDate(author.published_date)}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-ghost btn-sm btn-square">
            <FaBookmark size={24} className="text-gray-600" />
          </button>
          <button className="btn btn-ghost btn-sm btn-square">
            <FaShareAlt size={24}  className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 py-4">
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full object-cover "
        />
      </figure>

      {/* Description */}
      <div className="px-4 py-3">
        <p className="text-gray-600 text-xl leading-relaxed">
          {details.substring(0, 250)}...
        </p>
        <button className="text-orange-500 font-semibold text-xl mt-2 hover:underline">
          Read More
        </button>
      </div>

      {/* Footer with rating and views */}
      <div className="px-4 pb-4 flex items-center justify-between border-t-2 border-base-300 pt-3 mt-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${
                index < Math.floor(rating.number)
                  ? "text-orange-500"
                  : "text-gray-300"
              } text-xl`}
            />
          ))}
          <span className="ml-2 text-gray-700 font-semibold">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          < FaEye  size={24}/>
          <span className="text-xl font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
