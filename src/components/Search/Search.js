import "./Search.css";

const Search = () => {
  return (
    <div className="Searches">
      <h1 className="Search__title">What's going on in the world?</h1>
      <p className="Search__description">
        Find the latest news on any topic and save them in your personal account
      </p>
      <input className="Search__bar-input" placeholder="Enter Topic"></input>
      
      
    </div>
  );
};

export default Search;
