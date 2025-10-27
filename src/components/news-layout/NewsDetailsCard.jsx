import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

const NewsDetailsCard = () => {
  const { id } = useParams();
  // console.log(id);
  const newsData = useLoaderData();
  // console.log(newsData);
  const [news, setNews] = useState({});

  useEffect(() => {
    const cardNews = newsData.find((news) => news.id === id);
    setNews(cardNews);
  }, [newsData, id]);

  const { title, thumbnail_url, details } = news;

  const navigate = useNavigate();

  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="lg:h-[350px] p-4 ">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-sm h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{title}</h2>
        <p className="text-xl my-4 text-accent">{details}</p>
        <div className="card-actions justify-start">
          <button onClick={() => navigate(-1)} className="btn btn-secondary">
            All news in this category
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
