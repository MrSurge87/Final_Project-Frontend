import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SearchForm from "./components/SearchForm/SearchForm.js";

// CONTEXT IMPORTS
import { CurrentUserContext } from "./context/CurrentUserContext.js";
import { CurrentPageContext } from "./context/CurrentPageContext.js";
import { HasSearchedContext } from "./context/HasSearchedContext.js";
import { SearchResultContext } from "./context/SearchResultContext.js";
import { SavedArticlesContext } from "./context/SavedArticlesContext.js";
import { KeyWordContext } from "./context/KeyWordContext.js";

// REACT IMPORTS
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// UTILITY IMPORTS
import { checkToken, signUp, authorization } from "./utils/Auth.js";
import {
  getSavedArticles,
  addSavedArticle,
  removeSavedArticle,
} from "./utils/Api.js";
import { getSearchResults } from "./utils/NewsApi.js";

// MODAL IMPORTS
import SignInModal from "./components/SignInModal/SignInModal";
import SignUpModal from "./components/SignUpModal/SignUpModal";
import SuccessModal from "./components/SuccessModal/SuccessModal.js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";
import SavedNews from "./components/SavedNews/SavedNews.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("jwt") || "");
  const [keyword, setKeyword] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentPage, setCurrentPage] = useState({});
  const [savedArticles, setSavedArticles] = useState([]);
  const location = useLocation();
  const navigate = useNavigate("");

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleOpenSignInModal = () => {
    setActiveModal("SignIn");
  };

  const handleOpenSignUpModal = () => {
    setActiveModal("SignUp");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSuccessModal = () => {
    setActiveModal("successModal");
  };

  // Function To Register User
  const handleSignUpUser = (values) => {
    const makeRequest = () => {
      return signUp(values).then((user) => {
        if (user) {
          handleSuccessModal();
        }
      });
    };
    handleSubmit(makeRequest);
  };

  // Use Effects

  useEffect(() => {
    if (!activeModal) return;

    const handleEscapeClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [activeModal]);

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res && res.data) {
            setCurrentUser(res.data);
            setSignedIn(true);
          }
        })
        .then(() => {
          getSavedArticles(jwt).then((articles) => {
            setSavedArticles(articles);
          });
        });
    }
  }, [signedIn]);

  useEffect(() => {
    const handleOverlay = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };
    document.addEventListener("click", handleOverlay);
    return () => document.removeEventListener("click", handleOverlay);
  }, []);

  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  //Sign In User
  const signInUser = (user) => {
    setIsLoading(true);
    authorization(user)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          checkToken(res.token).then((data) => {
            setCurrentUser(data);
            setSignedIn(true);
            navigate("/profile");
          });
        }
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //Sign Out User
  const signOutUser = () => {
    setIsLoading(true);
    localStorage.removeItem("jwt");
    setSignedIn(false);
    setCurrentUser({});
    navigate("/");
  };

  //Sign Up User
  const signUpUser = (values) => {
    console.table(values);
    handleSubmit(() => signUp(values).then(() => signInUser(values)));
  };

  //Check Sign In Token
  function checkSignedIn(token) {
    return checkToken(token)
      .then((res) => {
        setSignedIn(true);
        setCurrentUser(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  //Search
  const handleSearch = ({ keyword }) => {
    setKeyword(keyword);
    setSearching(true);
    getSearchResults(keyword)
      .then((res) => {
        setSearchResults(res.articles);
        setHasSearched(true);
        setSearching(false);
        setSearchError(false);
      })
      .catch((err) => {
        console.error(err);
        setSearching(false);
        setSearchError(true);
      });
  };

  //Save Article To List
  const handleSaveArticle = ({ newsData, keyword, token }) => {
    if (!savedArticles.some((article) => article.link === newsData.url)) {
      addSavedArticle(newsData, keyword, token)
        .then((data) => {
          setSavedArticles([data.data, ...savedArticles]);
          const savedArticleId = data.data._id;
          const newArticle = { ...newsData, _id: savedArticleId };
          const newSearchResults = searchResults.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResults(newSearchResults);
        })
        .catch((err) => console.error(err));
    } else if (savedArticles.some((article) => article.link === newsData.url)) {
      removeSavedArticle(newsData, token)
        .then(() => {
          const removeNewsArticles = savedArticles.filter(
            (article) => article._id !== newsData._id
          );
          setSavedArticles(removeNewsArticles);
          const newArticle = { ...newsData, _id: "" };
          const newSearchResults = searchResults.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResults(newSearchResults);
        })
        .catch((err) => console.error(err));
    }
  };

  //Remove Article From List
  const handleRemoveArticle = ({ newsData, token }) => {
    removeSavedArticle(newsData, token).then(() => {
      const removeNewsArticles = savedArticles.filter(
        (article) => article._id !== newsData._id
      );
      setSavedArticles(removeNewsArticles);
    })
    .catch((err) => console.err(err));
  };

  return (
    <div
      className={` page ${location.pathname === "/saved-news" ? "no-bg" : ""}`}
    >
      {""}
      <CurrentPageContext.Provider
        value={{ currentPage, setCurrentPage, activeModal }}
      >
        <CurrentUserContext.Provider value={{ signedIn, currentUser }}>
          <HasSearchedContext.Provider value={{ hasSearched }}>
            <SearchResultContext.Provider value={{ searchResults }}>
              <SavedArticlesContext.Provider
                value={{ savedArticles, setSavedArticles }}
              >
                <KeyWordContext.Provider value={{ keyword, setKeyword }}>
                  <div className="App">
                    <div className="Search">
                      <Header
                        onSignIn={handleOpenSignInModal}
                        onSignUp={handleOpenSignUpModal}
                        signUpUser={signUpUser}
                        signedIn={signedIn}
                        onSignOut={signOutUser}
                      />

                      <Routes>
                        <Route exact path="/">
                          <Main
                            onSignUp={signUpUser}
                            handleSaveArticle={handleSaveArticle}
                            handleRemoveArticle={handleRemoveArticle}
                            searchError={searchError}
                            handleSearch={handleSearch}
                          />
                        </Route>

                        <ProtectedRoute path="/saved-news">
                        <SavedNews handleRemoveArticle={handleRemoveArticle} /> 
                        </ProtectedRoute>
                      </Routes>
                      <SearchForm />
                      <Footer />

                      {activeModal === "SignIn" && (
                        <SignInModal
                        isOpen={activeModal === "create"}
                          onClose={handleCloseModal}
                          signInUser={signInUser}
                          signUpUser={signUpUser}
                          openSignInModal={handleOpenSignInModal}
                          openSignUpModal={handleOpenSignUpModal}
                          isLoading={isLoading}
                          
                        />
                      )}

                      {activeModal === "SignUp" && (
                        <SignUpModal
                        isOpen={activeModal === "create"}
                          onClose={handleCloseModal}
                          signUpUser={signUpUser}
                          handleSignUpUser={handleSignUpUser}
                          onSubmit={handleOpenSignInModal}
                          openSignInModal={handleOpenSignInModal}
                          isLoading={isLoading}
                        />
                      )}
                      {activeModal === "successModal" && (
                        <SuccessModal
                          isOpen={activeModal === "create"}
                          onClose={handleCloseModal}
                          onSubmit={handleOpenSignInModal}
                        />
                      )}

                      
                    </div>

                    
                  </div>
                </KeyWordContext.Provider>
              </SavedArticlesContext.Provider>
            </SearchResultContext.Provider>
          </HasSearchedContext.Provider>
        </CurrentUserContext.Provider>
      </CurrentPageContext.Provider>
    </div>
  );
}

export default App;
