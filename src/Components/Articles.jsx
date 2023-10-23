import { Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleArticle from "./SingleArticle";

function Articles() {
  const [allArticles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://nc-news-be-project-lndv.onrender.com/api/articles")
      .then((response) => {
        return response.data;
      })
      .then((body) => {
        setArticles(body.articles);
      });
  }, []);
  return (
    <div className="articles-container">
      <ul>
        {allArticles.map((article) => {
          return (
            <li className="article-name" key={article.article_id}>
              <h4>{article.title}</h4>
              <img
                src={article.article_img_url}
                alt={`an image of ${article.topic}`}
                className="article-img"
              />
              <div className="article-menu">
                <p>upvotes {article.votes}</p>
                <p>{article.topic}</p>
                <Link to={`/articles/${article.article_id}`}>Read More..</Link>
                <p>Comments</p>
              </div>
            </li>
          );
        })}
      </ul>
      <Routes>
        <Route path=":article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default Articles;
