import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardsList from "../SavedNewsCardsList/SavedNewsCardsList";

const SavedNews = ({ handleRemoveArticle }) => {
  return (
    <section className="savedArticle">
      <SavedNewsHeader />
      <SavedNewsCardsList handleRemoveArticle={handleRemoveArticle} />
    </section>
  );
};

export default SavedNews;
