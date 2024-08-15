import "./SavedNewsCardsList.css";
import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";

import { SavedArticlesContext } from "../../context/SavedArticlesContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";
// import { SearchResultContext } from "../../context/SearchResultContext";

const SavedNewsCardsList = ({ handleRemoveArticle, handleOpenSignUpModal }) => {
  const { savedArticles } = useContext(SavedArticlesContext);
  const { currentUser } = useContext(CurrentUserContext);

  // const [ cardsShown, setCardsShown ] = useState(3);
  // const { searchResults } = useContext(SearchResultContext);
  // const increaseShownCards = () => {
  //   setCardsShown(cardsShown);
  // }
 
  

  return (
    <section className="savedNews__newsCards">
      <div className="savedNews__newsCards-container">
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
   
  
    </section>
    
  );
};

export default SavedNewsCardsList;
