import React from "react";
import Navbar from "./Navbar";

export const NavbarContainer = ({paginatorIsActive, langIsEng, toggleLang}) => {

    const changeLang = () => {
        toggleLang(prev => !prev)
    }

    return (
        <Navbar langIsEng={langIsEng} paginatorIsActive={paginatorIsActive}
                changeLang={changeLang}
        />
    )
}