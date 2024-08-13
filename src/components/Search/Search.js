import "./Search.css";
import { useForm } from "react-hook-form";

const Search = ({ handleSearch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSearchSubmit = ({ keyword }) => {
    handleSearch({ keyword });
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit(handleSearchSubmit)}>
      <section className="searchForm__box">
        <h1 className="searchForm__title">What's going on in the world?</h1>
        <p className="searchForm__description">
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <div className="searchForm__input">
    
          <input
            className="searchForm__bar-input"
            placeholder="Enter Topic"
            name="keyword"
            id="searchForm-item"
            {...register("keyword", { required: "Please enter a keyword" })}
           
          />
        </div>
        <button type="submit" className="searchForm__button">
          Search
        </button>
      </section>
    </form>
  );
};

export default Search;
