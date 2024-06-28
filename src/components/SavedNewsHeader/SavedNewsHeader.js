import "./SavedNewsHeader.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { SavedArticlesContext } from "../../context/SavedArticlesContext";

const SavedNewsHeader = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { savedArticles } = useContext(SavedArticlesContext);

  const userArticles = savedArticles.filter(
    (article) => article.owner === currentUser._id
  );

  const keyWordArray = useArticles.map((article) => article.keyword);
  const firstLetterToCap = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getKeywordString = (keywords) => {
    if (keyWordArray.length === 0) {
      return "";
    }
    if (keyWordArray.length === 1) {
      return `${firstLetterToCap(keyWordArray[0])}`;
    }
    if (keyWordArray.length > 1) {
      const count = {};
      for (let keyword of keywords) {
        if (count[keyword]) {
          count[keyword]++;
        } else {
          count[keyword] = 1;
        }
      }

      const sortKeyWordArray = [];
      for (const item in count) {
        sortKeyWordArray.push([item, count[item]]);
      }
      sortKeyWordArray.sort((a, b) => {
        return b[1] - a[1];
      });

      if (sortKeyWordArray.length === 1) {
        return `${firstLetterToCap(sortKeyWordArray[0][0])}`;
      } else if (sortKeyWordArray.length === 2) {
        return `${firstLetterToCap(
          sortKeyWordArray[0][0]
        )} and ${firstLetterToCap(sortKeyWordArray[1][0])}`;
      } else {
        const firstKeywords = sortKeyWordArray
          .slice(0, 2)
          .map((keyword) => firstLetterToCap(keyword[0]))
          .join(", ");
          const moreCount = sortKeyWordArray.length -2;
          return `${firstKeywords}, and ${moreCount} more`;
      }
    } else {
        return null;
    }
  };

  const keywordString = getKeywordString(keyWordArray);

  return (
    <div className="saved-news">
        <div className="saved-news__container">
            <div className="saved-news__title">Saved Articles</div>
            <h1 className="saved-news__header">
                {currentUser.name}, you have {userArticles.length} saved artcile{userArticles.length !== 1 ? "s": ""}
            </h1>
            <div className="saved-news__keywords_container">
                <p className="saved-news__keywords_title">By Keywords:</p>
                <p className="saved-news__keywords">{keywordString}</p>
            </div>
        </div>
    </div>
  );

};

export default SavedNewsHeader;
