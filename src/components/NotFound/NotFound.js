import "./NotFound.css";
import NotFoundImage from "../../images/not-found_v1.svg";

const NotFound = () => {
    return (
        <div className="notFound">
            <img scr={ NotFoundImage } className="notFound__image" alt="Not Found" />
            <h1 className="notFound__header">Nothing Found</h1>
            <p className="notFound__description">Sorry, nothing matched your search keyword.</p>
        </div>
    );
};

export default NotFound;