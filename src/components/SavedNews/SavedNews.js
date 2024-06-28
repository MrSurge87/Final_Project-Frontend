import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardsList from "../"

const SavedNews = ({ handleRemoveArticle }) => {
    return (
        <section className="saved-article">
            <SavedNewsHeader />
            <SavedNewsCardsList handleRemoveArticle={handleRemoveArticle} />
        </section>
    )
};

export default SavedNews;