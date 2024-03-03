// components/Article.js
import React from "react";

const Article = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="card" >
      <img src={urlToImage} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Article;
