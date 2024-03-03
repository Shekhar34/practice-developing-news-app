// components/NewsList.js
import React, { useState, useEffect } from 'react';
import Article from './Article';

const NewsList = ({ category, apiKey }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews(); // Call fetchNews inside useEffect
  }, [category, apiKey]); // Dependencies included

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
