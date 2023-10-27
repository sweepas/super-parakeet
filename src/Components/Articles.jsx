import { Link, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../api/api";
import Sortby from "./Sortby";

function Articles() {
  const [allArticles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState(undefined);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic, sortOption).then((body) => {
      setArticles(body.articles);
      setLoading(false);
    });
  }, [topic, sortOption]);

  function handleSortby(sortby) {
    setSortOption(sortby);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="articles-container">
      {<Sortby update={handleSortby} />}
      <ul>
        {allArticles.map((article) => {
          return (
            <li className="article-name" key={article.article_id}>
              <h4>{article.title}</h4>
              <p>{article.created_at}</p>
              <img
                src={article.article_img_url}
                alt={`an image of ${article.topic}`}
                className="article-img"
              />
              <div className="article-menu">
                <p>upvotes {article.votes}</p>
                <p>{article.topic}</p>
                <Link to={`/articles/${topic}/${article.article_id}`}>
                  Read More
                </Link>
                <p>Comments</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Articles;
