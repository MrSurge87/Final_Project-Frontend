import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardsList from "../SavedNewsCardsList/SavedNewsCardsList";

import { useContext, useState} from "react";
import {SearchResultContext} from "../../context/SearchResultContext";

const SavedNews = ({ handleRemoveArticle }) => {

    const { searchResults} = useContext(SearchResultContext);
    const [cardsShown, setCardsShown] = useState(3);

    const increaseShownCards = () => {
        setCardsShown(cardsShown);
      }
    
    return (
        <section className="saved-article">
            <SavedNewsHeader />
            <SavedNewsCardsList handleRemoveArticle={handleRemoveArticle} >
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
          </SavedNewsCardsList>
        
        </section>
        
    )
};

export default SavedNews;