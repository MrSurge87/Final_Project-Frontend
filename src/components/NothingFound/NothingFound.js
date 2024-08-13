import "./NothingFound.css";
import NothingFoundImage from "../../images/NothingFound.svg";

const NothingFound = () => {
    return (
        <div className="nothingFound">
            <img src={NothingFoundImage} className="nothingFound__image" alt="Nothing Found" />
            <h1 className="nothingFound__header">Nothing Found</h1>
            <p className="nothingFound__text">
                Sorry, nothing matched your search keyword.
            </p>
        </div>
    );
};

export default NothingFound;