import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

const DefaultNews = () => {
  const [news, setNews] = useState([]);
  const apiURL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f2c6d8942f074dcdac029a618851221d';

  useEffect(() => {
    const fetchDefaultNews = async () => {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const actualNews = data.articles;
        setNews(actualNews);
        console.log(actualNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchDefaultNews();
  }, []);

  return (
    <div className="container">
      <h1>Highlited News of the Day</h1>
      {news && (
        <div className="newsContainer">
          {news.map((item, index) => (
            <NewsCard key={index} result={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DefaultNews;
