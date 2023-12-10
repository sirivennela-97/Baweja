import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsList from "./components/NewsList";
import NewsItem from "./components/Newsitem";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/newsitem/:id" element={<NewsItem />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
