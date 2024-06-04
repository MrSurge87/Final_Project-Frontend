import "./Footer.css";

const Footer = () => {
    return (
        <div className="Footer">
            <p className="Copyright">© Sergio A Mendoza, Powered by News Api</p>
            <div className="Footer-buttons">
                <button className="Footer-home__button" type="button">Home</button>
                <a href="https://tripleten.com/" target="_blank">
                <button className="Footer-TripleTen__button" type="button">TripleTen</button>
                </a>
                <a href="https://github.com/MrSurge87" target="_blank">
                <button className="Github__button" type="button"></button>
                </a>
                <a href="https://www.facebook.com/sergio.a.mendoza.54/" target="_blank">
                <button className="Facebook__button" type="button"></button>
                </a>
            </div>
        </div>
    )
}

export default Footer;