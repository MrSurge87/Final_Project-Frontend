import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardsList from "../SavedNewsCardsList/SavedNewsCardsList";
import { SearchResultContext } from "../../context/SearchResultContext";
import { useState, useContext } from "react"


const SavedNews = ({ handleRemoveArticle }) => {
    
    return (
        <section className="saved-article">
            <SavedNewsHeader />
            <SavedNewsCardsList handleRemoveArticle={handleRemoveArticle} >
         
          </SavedNewsCardsList>
        
        </section>
        
    )
};

export default SavedNews;