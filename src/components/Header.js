import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css'


const HeaderTitle = () => {
    return(
        <h1 className="headerLeft">
            <a href="../" className="headerTitleBig">PORTFOLIO</a>
        </h1>
    )
}


const HeaderNav = (props) => {
    return(
        <div className="headerRight">
            <ul className="headerTitleTabs-group">
                <li>
                    <a href="./"
                    className="headerTitleTabs">
                        Home
                    </a>
                    {props.page == "/" && ( // ページマーカー
                        <div class="headerTitleTabs-marker"></div>
                    )}
                </li>
                <li>
                    <a href="./Projects"
                    className="headerTitleTabs">
                        Projects
                    </a>
                    {props.page == "/Projects" && ( // ページマーカー
                        <div class="headerTitleTabs-marker"></div>
                    )}
                </li>
                <li>
                    <a href="./Activities"
                    className="headerTitleTabs">
                        Activities
                    </a>
                    {props.page == "/Activities" && ( // ページマーカー
                        <div class="headerTitleTabs-marker"></div>
                    )}
                </li>
            </ul>
        </div>
    )
}


// main関数
export default function Header () {

    const param = useLocation().pathname;
    return (
        <header id="pageHeader">
            <HeaderTitle />
            <HeaderNav page={param} />
        </header>
    );

}
