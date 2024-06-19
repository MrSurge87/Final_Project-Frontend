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
      <section className="Search__box">
        <h1 className="Search__title">What's going on in the world?</h1>
        <p className="Search__description">
          Find the latest news on any topic and save them in your personal
          account
        </p>
        <div className="Search__input">
          <input
            className="Search__bar-input"
            placeholder="Enter Topic"
            name="keyword"
            id="searchForm-item"
            {...register("keyword", { required: "Please enter a keyword" })}
          />
          {errors?.keyword && (
            <p className="searchForm__invalid">{errors.keyword.message}</p>
          )}
        </div>
        <button type="submit" className="search-button">
          Search
        </button>
      </section>
    </form>
  );
};

export default Search;
