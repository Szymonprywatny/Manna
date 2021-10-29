import React, {useState} from "react";
import "../../assets/styles/Navbar.scss";
import manna_logo from "../../icons/manna_logo.svg";
import menu from "../../icons/menu.svg";
import {Link, NavLink, Route, Switch} from 'react-router-dom';



const Navbar = (props) => {

    return <div className="navbarsite">
        <div className={"navbar"}>
            <img className={'menu-bar'} src={menu} alt={'menu'}/>

            <div className={'mobile-menu'}>
                <ul>
                    <li><NavLink
                        exact to={""}
                        className={"nav-item"}
                        activeClassName={"nav-item-active"}
                        onClick={() => props.onEvent("MAIN_ARTICLE")}>
                        Strona Główna
                        </NavLink></li>
                    <li><NavLink
                        to={"/Menu"}
                        className={"nav-item"}
                        activeClassName={"nav-item-active"}
                        onClick={() => props.onEvent("MENU")}>
                        Menu
                    </NavLink></li>
                    <li><NavLink
                        to={"/Gallery"}
                        className={"nav-item"}
                        activeClassName={"nav-item-active"}
                        onClick={() => props.onEvent("GALLERY")}>
                        Galeria
                    </NavLink></li>
                    <li><NavLink
                        to={"/Events"}
                        className={"nav-item"}
                        activeClassName={"nav-item-active"}
                        onClick={() => props.onEvent("EVENTS")}>
                        Event z Manną
                    </NavLink></li>
                </ul>
            </div>

            <ul>
                <li className={"text-menu"}>
                    <NavLink
                        exact to={""}
                        className={"nav-item"}
                        activeClassName={"nav-item-active"}
                        onClick={() => props.onEvent("MAIN_ARTICLE")}>
                             Strona Główna
                    </NavLink>
                </li>
                <li className={"text-menu"}>
                    <NavLink
                        to={"/Menu"}
                        className={"nav-item"}
                        activeClassName={"nav-item-active"}
                        onClick={() => props.onEvent("MENU")}>
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
                        onClick={() => props.onEvent("GALLERY")}>
                           Galeria
                    </NavLink>
                </li>
                <li className={"text-menu"}>
                    <NavLink
                        to={"/Events"}
                        className={"nav-item"}
                        activeClassName={"nav-item-active"}
                        onClick={() => props.onEvent("EVENTS")}>
                            Event z Manną
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
}

export default Navbar;

