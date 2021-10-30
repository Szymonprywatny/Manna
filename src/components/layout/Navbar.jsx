import React, {useState} from "react";
import "../../assets/styles/Navbar.scss";
import manna_logo from "../../icons/manna_logo.svg";
import menu from "../../icons/menu.svg";
import xmenu from "../../icons/x-menu2.svg";
import {useTransition, animated} from "react-spring";
import {Link, NavLink, Route, Switch} from 'react-router-dom';


const Navbar = (props) => {
    const width = window.screen.width;
    const [isVisible, setIsVisible] = useState(false);
    const transition = useTransition(isVisible, {
        // from: {opacity: 0, transform: "translate(-100%, 0%)"},
        // enter: {opacity: 1, transform: "translate(0%, 0)"},
        // leave: {opacity: 0, transform: "translate(-100%, 0%)"}
        from: {opacity: 1, x: -width},
        enter: {opacity: 1, x: 0},
        leave: {opacity: 1, x: -width}
    })

    return <div className={"navbar"}>

        <img className={'menu-bar'} src={menu} alt={'menu'} onClick={() => {
            setIsVisible(v => !v);
        }}/>

        {transition((style, item) =>
            item ? <animated.div style={style} className="mobile-menu">

                <img className={'x-menu'} src={xmenu} alt={'x-menu'} onClick={() => {
                    setIsVisible(v => !v);
                }}/>

                <ul>
                    <li><NavLink
                        exact to={""}
                        className={"nav-item"}
                        activeClassName={"nav-item-active"}
                        onClick={() => {
                            // props.onEvent("MAIN_ARTICLE");
                            setIsVisible(v => !v);
                        }}>
                        Strona Główna
                    </NavLink></li>
                    <li><NavLink
                        to={"/Menu"}
                        className={"nav-item"}
                        activeClassName={"nav-item-active"}
                        onClick={() => {
                            // props.onEvent("MENU");
                            setIsVisible(v => !v);
                        }}>
                        Menu
                    </NavLink></li>
                    <li><NavLink
                        to={"/Gallery"}
                        className={"nav-item"}
                        activeClassName={"nav-item-active"}
                        onClick={() => {
                            // props.onEvent("GALLERY");
                            setIsVisible(v => !v);
                        }}>
                        Galeria
                    </NavLink></li>
                    <li><NavLink
                        to={"/Events"}
                        className={"nav-item"}
                        activeClassName={"nav-item-active"}
                        onClick={() => {
                            // props.onEvent("EVENTS");
                            setIsVisible(v => !v);
                        }}>
                        Event z Manną
                    </NavLink></li>
                </ul>
            </animated.div> : '')}


        {/*<div className={'normal-menu'}>*/}
        {/*<div className={'normalmenu'}>*/}
        <ul>
            <li className={"text-menu"}>
                <NavLink
                    exact to={""}
                    className={"nav-item"}
                    activeClassName={"nav-item-active"}
                    // onClick={() => props.onEvent("MAIN_ARTICLE")}
                >
                    Strona Główna
                </NavLink>
            </li>
            <li className={"text-menu"}>
                <NavLink
                    to={"/Menu"}
                    className={"nav-item"}
                    activeClassName={"nav-item-active"}
                    // onClick={() => props.onEvent("MENU")}
                >
                    Menu
                </NavLink>
            </li>
            {/*<li className={'navbar-logo'}>*/}
            <Link to={"/"}><img className={'logo'} src={manna_logo} alt={'logo'}/></Link>
            {/*</li>*/}
            <li className={"text-menu"}>
                <NavLink
                    to={"/Gallery"}
                    className={"nav-item"}
                    activeClassName={"nav-item-active"}
                    // onClick={() => props.onEvent("GALLERY")}
                >
                    Galeria
                </NavLink>
            </li>
            <li className={"text-menu"}>
                <NavLink
                    to={"/Events"}
                    className={"nav-item"}
                    activeClassName={"nav-item-active"}
                    // onClick={() => props.onEvent("EVENTS")}
                >
                    Event z Manną
                </NavLink>
            </li>
        </ul>
        {/*</div>*/}
    </div>

}

export default Navbar;

