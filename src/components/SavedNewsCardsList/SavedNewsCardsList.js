import "./SavedNewsCardsList.css";
import { useContext, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

import { SavedArticlesContext } from "../../context/SavedArticlesContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { SearchResultContext } from "../../context/SearchResultContext";

const SavedNewsCardsList = ({ handleRemoveArticle, handleOpenSignUpModal }) => {
  const { savedArticles } = useContext(SavedArticlesContext);
  const { currentUser } = useContext(CurrentUserContext);

  const [ cardsShown, setCardsShown ] = useState(3);
  const { searchResults } = useContext(SearchResultContext);
  const increaseShownCards = () => {
    setCardsShown(cardsShown);
  }
 
  

  return (
    <section className="savedNews__newsCards">
      <div className="savedNews__newsCards_container">
        {savedArticles
          .filter((article) => article.owner === currentUser._id)
          .map((article) => (
            <NewsCard
              newsData={article}
              key={article.link}
              handleRemoveArticle={handleRemoveArticle}
              handleOpenSignUpModal={handleOpenSignUpModal}
            />
          ))}
         
       
      </div>
      <button
            className={`newsCards__button ${
              cardsShown >= searchResults.length
                ? "newsCards__button_hidden"
                : ""
            }`}
            onClick={increaseShownCards}
          >
            Show More
          </button>
  
    </section>
    
  );
};

export default SavedNewsCardsList;
