import "./NewsCard.css";
import { SavedArticlesContext } from "../../context/SavedArticlesContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { CurrentPageContext } from "../../context/CurrentPageContext";
import { KeyWordContext } from "../../context/KeyWordContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NewsCard = ({
  onSignUp,
  newsData,
  handleSaveArticle,
  handleRemoveArticle,
}) => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const { isSignedIn } = useContext(CurrentUserContext);
  const { keyword } = useContext(KeyWordContext);
  const { savedArticles } = useContext(SavedArticlesContext);
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname, setCurrentPage]);

  const formatDate = new Date(
    newsData.publishedAt || newsData.date
  ).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleBookmarkClick = () => {
    const token = localStorage.getItem("jwt");
    handleSaveArticle({ newsData, keyword, token });
  };

  const handleRemoveClick = () => {
    const token = localStorage.getItem("jwt");
    handleRemoveArticle({ newsData, token });
  };

  return (
    <div className="card">
      {currentPage === "/saved-news" && (
        <>
          <div className="card__keyword">{newsData.keyword}</div>
          <div
            className={`card__popup-text ${
              isHovered ? "" : "card__popup-text_hidden"
            }`}
          >
            Remove From Saved Articles
          </div>
          <button
            className="card__button-delete"
            onClickl={handleRemoveClick}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          ></button>
        </>
      )}

      {isSignedIn && currentPage === "/" ? (
        <button
          className={`card__button-bookmark ${
            savedArticles.some(
              (savedArtcile) => savedArticles.link === newsData.url
            )
              ? "card__button-bookmark_marked"
              : ""
          }`}
          onClick={handleBookmarkClick}
        ></button>
      ) : (
        ""
      )}

      {!isSignedIN && (
        <>
          <div
            className={`card__popup-text ${
              isHovered ? "" : "card__popup-text_hidden"
            }`}
          >
            Sign In To Save Articles
          </div>
          <button
            className="card__button-bookmark"
            onClick={onSignUp}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          ></button>
        </>
      )}

      <img
        src={newsData.image || newsData.urlToImage}
        alt={newsData.link || newsData.url}
        className="card__image"
      />
      <div className="card__text">
        <p className="card__date-published"> {formattedDate}</p>
        <h3 className="card__title">{newsData.title}</h3>
        <p className="card__content">{newsData.text || newsData.description}</p>
        {newsData.source && (
          <p className="card__source">
            {newsData.source.name || newsData.source}
          </p>
        )}
      </div>
    </div>
  );
};
