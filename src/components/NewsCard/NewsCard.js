import "./NewsCard.css";
import { SavedArticlesContext } from "../../context/SavedArticlesContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { CurrentPageContext } from "../../context/CurrentPageContext";
import { KeyWordContext } from "../../context/KeyWordContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RemoveBookmark from "../../images/RemoveBookmark.svg";
// import NormalBookmark from "../../images/bookmark-normal.svg";
// import HoverBookmark from "../../images/bookmark-hover.svg";
// import SavedBookmark from "../../images/bookmark-saved.svg";
// import RemoveBookmarkHover from "../../images/RemoveBookmark-hover.svg";

const NewsCard = ({
  onSignUp,
  newsData,
  handleSaveArticle,
  handleRemoveArticle,
  handleOpenSignUpModal,
}) => {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const { signedIn } = useContext(CurrentUserContext);
  const { keyword } = useContext(KeyWordContext);
  const { savedArticles } = useContext(SavedArticlesContext);
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname, setCurrentPage]);

  const formatDate = new Date(
    newsData.publishedAt || newsData.date || Date.now()
  ).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    const isSaved = savedArticles.some(
      (article) => article.id === newsData.url
    );
    setIsBookmarked(isSaved);
  }, [savedArticles, newsData.url]);

  const handleBookmarkClick = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      handleSaveArticle({ newsData, keyword, token });
      setIsBookmarked((prev) => {
        return !prev;
      });
    } else {
    }
  };

  const handleRemoveClick = () => {
    const token = localStorage.getItem("jwt");
    handleRemoveArticle({ newsData, token });
  };

  return (
    <article className="newsCard">
      {currentPage === "/saved-news" && (
        <>
          <div className="newsCard__keyword">{newsData.keyword}</div>
          <div
            className={`newsCard__popup-text ${
              isHovered ? "" : "newsCard__popup-text_hidden"
            }`}
          >
            Remove From Saved Articles
          </div>
    
            <img
              src={RemoveBookmark}
              alt="Remove bookmark"
              className="newsCard__button newsCard__button-delete"
              onClick={handleRemoveClick}
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            />
          
        </>
      )}
      .
      {signedIn && currentPage === "/" ? (
        <button
          className={`newsCard__button newsCard__button--bookmark ${
            isBookmarked
              ? "newsCard__button--marked"
              : "newsCard__button--notSignedIn"
          }`}
          onClick={handleBookmarkClick}
        ></button>
      ) : (
        !signedIn && (
          <button
            className="newsCard__button--notSignedIn"
            onClick={onSignUp}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></button>
        )
      )}
      {!signedIn && (
        <>
          <div
            className={`newsCard__popup-text ${
              isHovered ? "" : "newsCard__popup-text_hidden"
            }`}
          >
            Sign in to save articles
          </div>
          <button
            className="newsCard__button newsCard__button--notSignedIn"
            onClick={handleOpenSignUpModal}
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
        src={ newsData.image || newsData.urlToImage}
        alt={newsData.link || newsData.url}
        className="newsCard__image"
      />
      <div className="newsCard__text">
        <p className="newsCard__date-published"> {formatDate} </p>
        <h3 className="newsCard__title">{newsData.description}</h3>
        <p className="newsCard__content">{newsData.text || newsData.description}</p>
      </div>
      <div className="newsCard__source">
        
        <p>{newsData.source.name || newsData.source}</p>
      </div>
    </article>
  );
};

export default NewsCard;
