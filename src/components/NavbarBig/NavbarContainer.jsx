import React from "react";
import Navbar from "./Navbar";

export const NavbarContainer = ({paginatorIsActive, langIsEng, toggleLang}) => {

    const handlerToggleLang = () => {
        toggleLang(prev => !prev)
    }

    return (
        <Navbar langIsEng={langIsEng} paginatorIsActive={paginatorIsActive}
                handlerToggleLang={handlerToggleLang}
        />
    )
}