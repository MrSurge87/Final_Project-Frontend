import "./SavedNewsCardsList.css";
import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";

import { SavedArticlesContext } from "../../context/SavedArticlesContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const SavedNewsCardsList = ({ handleRemoveArticle }) => {
  const { savedArticles } = useContext(SavedArticlesContext);
  const { currentUser } = useContext(CurrentUserContext);

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
            />
          ))}
      </div>
    </section>
  );
};

export default SavedNewsCardsList;
