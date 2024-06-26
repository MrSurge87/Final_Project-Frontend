import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useContext, useState } from "react";
import { SearchResultContext } from "../../context/SearchResultContext";
import { HasSearchedContext } from "../../context/HasSearchedContext";

const NewsCardsList = ({ handleSaveArticle, handleRemoveArticle, onSignUp }) => {
  const [cardsShown, setCardShown] = useState(3);
  const { searchResults } = useContext(SearchResultContext);
  const { hasSearched } = useContext(HasSearchedContext);

  const increaseShownCards = () => {
    setCardsShown(cardsShown);
  };

  return (
    <section className="newsCards__section">
      {hasSearched ? (
        <>
          <h2 className="newsCards__title">Search Results</h2>
          <div className="newsCards__container">
            {searchResults.slice(0, cardsShown).map((result) => {
              return (
                <NewsCard
                  newsData={result}
                  key={result.url}
                  handleSaveArtcile={handleSaveArticle}
                  handleRemovearticle={handleRemoveArticle}
                  onSignUp={onSignUp}
                />
              );
            })}
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
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default NewsCardsList;