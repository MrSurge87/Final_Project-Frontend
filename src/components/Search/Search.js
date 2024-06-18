import "./Search.css";

const Search = () => {
  return (
    <div className="Searches">
      <div className="Search__box">
        <h1 className="Search__title">What's going on in the world?</h1>
        <p className="Search__description">
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <div className="Search__input">
          <input
            className="Search__bar-input"
            placeholder="Enter Topic"
          ></input>
          <button type="button" className="search-button">
            {" "}
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
