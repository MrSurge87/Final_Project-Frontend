import "./NotFound.css";
import NotFoundImage from "../../images/not-found_v1.svg";

const NotFound = () => {
    return (
        <div className="not-found">
            <img scr={ NotFoundImage } className="not-found__image" alt="Not Found" />
            <h1 className="not-found__header">Nothing Found</h1>
            <p className="not-found__description">Sorry, nothing matched your search keyword.</p>
        </div>
    );
};

export default NotFound;