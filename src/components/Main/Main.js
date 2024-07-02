import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import { useContext } from "react";
import { HasSearchedContext } from "../../context/HasSearchedContext";
import { SearchResultContext } from "../../context/SearchResultContext";


const Main = (
  handleSearch,
  onSignUp,
  handleSaveArticle,
  handleRemoveArticle,
  searchError,
  isLoading
) => {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResults } = useContext(SearchResultContext);

  return (
    <main className="main">
      <SearchForm  handleSearch={handleSearch}/>
      <div>
        {hasSearched && searchResults.length > 0 ? (
          <NewsCardList
            onSignUp={onSignUp}
            handleSaveArticle={handleSaveArticle}
            handleRemoveArticle={handleRemoveArticle}
          />
        ) : hasSearched && searchResults.length === 0 ? (
          <NothingFound />
        ) : isLoading ? (
          <Preloader />
        ) : searchError === true ? (
          <p>
            Sorry, something went wrong during the request. There may be a
            connection issue or the server may be down. Please try again later.
          </p>
        ) : (
          ""
        )}
      </div>
      
    </main>
  );
};

export default Main;
