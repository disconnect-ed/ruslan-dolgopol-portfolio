import React from "react";
import './Navbar.sass'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome, faCheck, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUser, faAddressCard } from '@fortawesome/free-regular-svg-icons'
import logo from '../../assets/img/logo-white.png'
import {NavLink} from "react-router-dom";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

const Navbar = ({paginatorIsActive}) => {



    return (
        <nav className='navbar'>
            <NavLink to='/' className="navbar__logo">
                <img src={logo} alt="Ruslan Dolgopol"/>
            </NavLink>
            <ul className="navbar-links">
                <li className='navbar-link'>
                    <NavLink to="/main">
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink>
                    <span className='navbar-link__title'>Главная</span>
                </li>
                <li className='navbar-link'>
                    <NavLink to="/about">
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                    <span className='navbar-link__title'>О себе</span>
                </li>
                <li className='navbar-link'>
                    <NavLink to="/skills">
                        <FontAwesomeIcon icon={faCheck} />
                    </NavLink>
                    <span className='navbar-link__title'>Навыки</span>
                </li>
                <li className='navbar-link'>
                    <NavLink to="/works">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </NavLink>
                    <span className='navbar-link__title'>Работы</span>
                </li>
                <li className='navbar-link'>
                    <NavLink to="/contacts">
                        <FontAwesomeIcon icon={faAddressCard} />
                    </NavLink>
                    <span className='navbar-link__title'>Контакты</span>
                </li>
            </ul>
            <NavbarMenu paginatorIsActive={paginatorIsActive} />
        </nav>
    )
}

export default Navbar