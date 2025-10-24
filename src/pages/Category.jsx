import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const Category = () => {
  // get the id form route
  const { id } = useParams();

  //   Data load ;
  const newsData = useLoaderData();

  const [category, setCategory] = useState([]);
  //   console.log(category);

  //   useEffect ;
  useEffect(() => {
    if (id == "0") {
      setCategory(newsData);
      return;
    } else if (id == "1") {
      const filteredData = newsData.filter(
        (data) => data.others.is_today_pick === true
      );
      setCategory(filteredData);
      return;
    } else {
      const filteredData = newsData.filter((data) => data.category_id == id);
      setCategory(filteredData);
      return;
    }
  }, [id, newsData]);

  return (
    <div>
      {category.map((news) => (
        <NewsCard key={news.id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
