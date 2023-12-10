import React from "react";
import { useLocation } from "react-router-dom";

const NewsItem = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div className="main">
      <h3>
        <strong>title:</strong>
        {location.state.article.title}
      </h3>

      <p>
        <strong>Description:</strong>
        {location.state.article.description}
      </p>
      <p>
        <strong>Author:</strong>
        {location.state.article.author}
      </p>
      <p>
        <strong>publishedAt:</strong>
        {location.state.article.publishedAt}
      </p>
      <a
        href={location.state.article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </a>
    </div>
  );
};

export default NewsItem;
