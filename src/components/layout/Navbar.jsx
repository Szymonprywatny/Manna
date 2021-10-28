import React, {useState} from "react";
import "../../assets/styles/Navbar.scss";
import manna_logo from "../../icons/manna_logo.svg";
import {Link, NavLink, Route, Switch} from 'react-router-dom';
import {useTransition, animated} from "react-spring";
import MainArticle from "./MainArticle";


const Navbar = (props) => {

    return <div className="navbarsite">
        <div className={"navbar"}>
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
                <li className={'navbar-logo'}>
                    <Link to={"/"}><img className={'logo'} src={manna_logo}/></Link>
                </li>
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

