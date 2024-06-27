import "./SearchForm.css";
import { useForm } from "react-hook-form";

const SearchForm = ({ handleSearch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSearchSubmit = ({ keyword }) => {
    handleSearch({ keyword });
  };

  return (
    <div className="searchForm" onSubmit={handleSubmit(handleSearchSubmit)}>
      <section className="searchForm__container">
        <h1 className="searchForm__title">What's Going On In The World?</h1>
        <p className="searchForm__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <div className="searchForm__searchbar">
          <input
            className="searchForm__searchbar-input"
            id="searchForm-search"
            type="text"
            name="keyword"
            placeholder="Enter Topic"
            {...register("keyword", { required: "Please enter a keyword" })}
          />
          {errors?.keyword && (
            <p className="searchForm__invalid">{errors.keyword.message}</p>
          )}
          <button className="searchForm__searchbar-button" type="submit">
            Search
          </button>
        </div>
      </section>
    </div>
  );
};

export default SearchForm;