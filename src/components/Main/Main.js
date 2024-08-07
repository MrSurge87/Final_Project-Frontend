import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
<<<<<<< HEAD
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
=======
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import { useContext } from "react";
import { HasSearchedContext } from "../../context/HasSearchedContext";
import { SearchResultContext } from "../../context/SearchResultContext";

const Main = ({
  setSearchResults,
  handleSearch,
  onSignUp,
  handleSaveArticle,
  handleRemoveArticle,
  searchError,
  isLoading,
  signedIn,
  handleOpenSignUpModal
}) => {

  //console.log('Main: handleSearch:', handleSearch);

  const { hasSearched } = useContext(HasSearchedContext);
  const { searchResults } = useContext(SearchResultContext);
  

  return (
    <main className="main">
      <SearchForm
      
        handleSearch={handleSearch}
        setSearchResults={setSearchResults}
      />
      
      <div>
        {hasSearched && searchResults.length > 0 ? (
          <NewsCardList
            onSignUp={onSignUp}
            handleSaveArticle={handleSaveArticle}
            handleRemoveArticle={handleRemoveArticle}
            handleOpenSignUpModal={handleOpenSignUpModal}
          />
        ) : hasSearched && searchResults.length === 0 ? (
          <NothingFound />
>>>>>>> 00579ad6e93d6dc635f6883e60131bdce6620f9d
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
<<<<<<< HEAD
      </div>
      <About />
    </Main>
=======
        
      </div>
    </main>
>>>>>>> 00579ad6e93d6dc635f6883e60131bdce6620f9d
  );
};

export default Main;
