import "./NewsCard.css";
import { SavedArticlesContext } from "../../context/SavedArticlesContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { CurrentPageContext } from "../../context/CurrentPageContext";
import { KeyWordContext } from "../../context/KeyWordContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NormalBookmark from "../../images/bookmark-normal.svg";
import HoverBookmark from "../../images/bookmark-hover.svg";
import SavedBookmark from "../../images/bookmark-saved.svg";
import RemoveBookmark from "../../images/RemoveBookmark.svg";
import RemoveBookmarkHover from "../../images/RemoveBookmark-hover.svg";

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
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname, setCurrentPage]);

  if (newsData) {
    const publishedAt = newsData.publishedAt || "No Date Available";
    const formatDate = new Date(
      newsData.publihsedAt || newsData.date || Date.now()
    ).toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } else {
    console.error("newsData is undefined");
  }


  const handleBookmarkClick = () => {
    const token = localStorage.getItem("jwt");
    handleSaveArticle({ newsData, keyword, token });
    setIsBookmarked(!isBookmarked);
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
            onClick={handleRemoveClick}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          ></button>
        </>
      )}
      .

      {isSignedIn && currentPage === "/" ? (
        <button
          className={`card__button-bookmark ${
            savedArticles.some(
              (savedArtcile) => savedArticles.link === newsData.url
            )
              ? <img src={SavedBookmark}/>
              : ""
          }`}
          onClick={!isBookmarked ? handleBookmarkClick : handleRemoveClick}
        ></button>
      ) : (
        ""
      )}

        
    

      {!isSignedIn && (
        <>
        
          <button
            className="card__button-bookmark-notSignedIn"
            onClick={onSignUp}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
          </button>
        </>
      )}

      <img
        src={newsData.image || newsData.urlToImage}
        alt={newsData.link || newsData.url}
        className="card__image"
      />
      <div className="card__text">
        <p className="card__date-published"> { newsData.formatDate} </p>
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

export default NewsCard;