import './Footer.css'

function Footer () {
    return (
        <div className="footer">
            <div className="footerContents">
                <span>This website is created using </span>
                <a href="https://ja.reactjs.org/" target="_blank">
                    React.js
                </a>
            </div>
            <div className="footerContents">
                <span>©︎2021 T. Odaira </span>
                <a href="https://github.com/T0-0D/my-portfolio-v2" target="_blank">
                    View repository on GitHub
                </a>
            </div>
        </div>
    );
}
export default Footer;
