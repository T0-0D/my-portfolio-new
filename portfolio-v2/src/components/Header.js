import './Header.css'

function Header () {
    return (
        <header>
            <h1 className = "title">
                <a href="" className="title-a">OD's Portfolio</a>
            </h1>
            <nav>
                <ul className="menu-group">
                    <li>
                        <a href="https://rico-notes.com/programming/html/header-design/"
                        className="menu-item">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href=""
                        className="menu-item">
                            Learning
                        </a>
                    </li>
                    <li>
                        <a href=""
                        className="menu-item">
                            Music
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;