import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNews } from "../services/newsApi";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchNews = async () => {
    try {
      const articles = await getNews();
      setNews(articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <center>
        <h1>News Dashboard</h1>
      </center>
      <h2>Latest News</h2>
      <div className="container">
        {currentItems.map((article, id) => (
          <span key={id}>
            <Link
              className="link"
              to={`/newsitem/${id + indexOfFirstItem}`}
              state={{ article: article }}
            >
              <div className="newslist">
                <p>
                  <strong>Title:</strong>
                  {article.title}
                </p>
                <p>
                  <strong>Author:</strong>
                  {article.author}
                </p>
              </div>
            </Link>
          </span>
        ))}
        <div className="pagination">
          <button
            className="btn"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <button
            className="btn1"
            onClick={nextPage}
            disabled={currentPage === Math.ceil(news.length / itemsPerPage)}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
