import React, { useEffect, useState } from "react";
import axios from "axios";
import "./News.css";

const News = ({ searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const API_KEY = "05fb682c7b7e46b1879b8d52a88163b1";

  useEffect(() => {
    const fetchData = async () => {
      let url;
      if (searchQuery === "") {
        url = `https://newsapi.org/v2/top-headlines?country=us&language=en&apiKey=${API_KEY}`;
      } else {
        url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&apiKey=${API_KEY}`;
      }

      try {
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        console.log("Error fetching articles:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="news-container">
      {articles.length > 0 ? (
        <ul className="article-list">
          {articles.map((article) => (
            <li key={article.url} className="article-item">
              <h3 className="article-title">
                <a href={article.url} target="blank">
                  {article.title}
                </a>
              </h3>
              <p className="article-description">{article.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-articles">No articles found.</p>
      )}
    </div>
  );
};

export default News;
