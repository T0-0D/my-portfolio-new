import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css'


const HeaderTitle = () => {
    return(
    <h1>
        <a href="../" className="titleBig">PORTFOLIO</a>
    </h1>
    )
}


const HeaderNav = (props) => {
    return(
        <nav>
            <ul className="titlePages-group">
                <li>
                    <a href="./"
                    className="titlePages">
                        Home
                    </a>
                    {props.page == "/" && ( // ページマーカー
                        <div class="circle"></div>
                    )}
                </li>
                <li>
                    <a href="./Projects"
                    className="titlePages">
                        Projects
                    </a>
                    {props.page == "/Projects" && ( // ページマーカー
                        <div class="circle"></div>
                    )}
                </li>
                <li>
                    <a href="./Activities"
                    className="titlePages">
                        Activities
                    </a>
                    {props.page == "/Activities" && ( // ページマーカー
                        <div class="circle"></div>
                    )}
                </li>
            </ul>
        </nav>
    )
}


// main関数
export default function Header () {

    const param = useLocation().pathname;
    return (
        <header>
            <HeaderTitle />
            <HeaderNav page={param} />
        </header>
    );

}
