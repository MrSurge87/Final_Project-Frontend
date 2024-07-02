import "./NothingFound.css";
import NothingFoundImage from "../../images/NothingFound.svg";

const NothingFound = () => {
    return (
        <div className="nothing_found">
            <img src={NothingFoundImage} className="nothing_found__image" alt="Nothing Found" />
            <h1 className="nothing_found__header">Nothing Found</h1>
            <p className="nothing_found__text">
                Sorry, nothing matched your search keyword.
            </p>
        </div>
    );
};

export default NothingFound;