import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import PreLoader from "../Preloader/Preloader";
import NewsCardList from "../NewCardList/NewCardList";
import NotFound from "../NotFound/NotFound";

import { useContext } from "react";
import { hasSearchedContext } from "../../context/HasSearchedContext";
import { SearchResultContext } from "../../context/SearchResultContext";

const Main = ({
  isLoading,
  handleSearch,
  onSignUp,
  searchError,
  handleSaveArticle,
  handleRemoveArticle,
}) => {
  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResult } = useContext(SearchResultContext);

  return (
    <Main className="main">
      <SearchForm handleSearch={handleSearch} />
      <div>
        {hasSearched && searchResult.length > 0 ? (
          <NewCardsList
            onSignUp={onSignUp}
            handleSaveArticle={handleSaveArticle}
            handleRemoveArticle={handleRemoveArticle}
          />
        ) : hasSearched && searchResults.length === 0 ? (
          <NotFound />
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
      <About />
    </Main>
  );
};

export default Main;
