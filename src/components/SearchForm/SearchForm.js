import "./SearchForm.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { getSearchResults } from "../../utils/NewsApi";



const SearchForm = ({ handleSearch }) => {
  const [ isError, setIsError ] = useState(false)


  const {
    register,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm();


  const handleSearchSubmit = () => {
    const { keyword } = getValues();
    handleSearch(keyword);
  };

  const onSubmit = (data) => {
    if (!data.keyword) {
      setIsError(true);
    } else {
      setIsError(false);
      // Handle the search logic
    }
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit(handleSearchSubmit)}>
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
            placeholder={isError ? "" : "Enter Topic"}
            {...register("keyword", { required: "Please enter a keyword" })}
            aria-invalid={errors.keyword ? "true" : "false"}
          />
          <button className="searchForm__searchbar-button" type="submit" onClick={onSubmit}>
            <p className="searchForm__searchbar-button-text">Search</p>
          </button>
          {errors.keyword && (
            <p className="searchForm__invalid">{errors.keyword.message}</p>
          )}
          
        </div>
      </section>
    </form>
  );
};

export default SearchForm;
