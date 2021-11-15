import './Header.css'

// 要素を分割して関数として定義
const HeaderTitle = () => {
    return(
    <h1>
        <a href="../" className="titleBig">My Portfolio</a>
    </h1>
    )
}

const HeaderNav = () => {
    return(
        <nav>
            <ul className="titlePages-group">
                <li>
                    <a href="./"
                    className="titlePages">
                        Home
                    </a>
                </li>
                <li>
                    <a href="./Product"
                    className="titlePages">
                        Product
                    </a>
                </li>
                <li>
                    <a href="./Music"
                    className="titlePages">
                        Music
                    </a>
                </li>
            </ul>
        </nav>
    )
}

// 上記で定義した関数をHeaderに組み込んでexport
function Header () {
    return (
        <header>
            <HeaderTitle />
            <HeaderNav />
        </header>
    );
}
export default Header;
