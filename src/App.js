import React, {useState} from 'react';
import './App.sass';
import './CommonStyles.sass';
import 'react-circular-progressbar/dist/styles.css';
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import {Redirect, Route, Switch} from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import ParticlesBackground from "./components/common/Particles/Particles";
import SkillDescr from "./components/Skills/SkillDescr/SkillDescr";
import WorkDescr from "./components/Works/WorkDescr/WorkDescr";
import Loading from "./components/common/Loading/Loading";
import {NavbarContainer} from "./components/NavbarBig/NavbarContainer";

function App(props) {
    const [preloader, hidePreloader] = useState(false)
    const [langIsEng, toggleLang] = useState(true)
    useState(() => {
        document.body.classList.add('lock')
        window.onload = () => {
            document.body.classList.remove('lock')
            hidePreloader(true)
        }
    }, [])
    const [paginator, showPaginator] = useState(false)
    const paginatorIsActive = (state) => {
        showPaginator(state)
    }

    return (
        <section className={`App ${paginator && 'lock'}`}>
            <NavbarContainer toggleLang={toggleLang} langIsEng={langIsEng}
                             paginatorIsActive={paginatorIsActive}
            />
            <div className="container">
                <Switch>
                    <Route exact path='/main' render={() => <Header langIsEng={langIsEng}/>}/>
                    <Route exact path='/about' render={() => <About langIsEng={langIsEng}/>}/>
                    <Route exact path='/skills' render={() => <Skills langIsEng={langIsEng}/>}/>
                    <Route exact path='/skills/:skill' render={() => <SkillDescr skillsData={props.skillsData}
                                                                                 paginator={paginator}
                                                                                 langIsEng={langIsEng}
                    />}/>
                    <Route exact path='/works' render={() => <Works langIsEng={langIsEng}/>}/>
                    <Route exact path='/works/:work' render={() => <WorkDescr worksData={props.worksData}
                                                                              paginator={paginator}
                                                                              langIsEng={langIsEng}
                    />}/>
                    <Route exact path='/contacts' render={() => <Contacts langIsEng={langIsEng}/>}/>
                    <Route exact path='*' render={() => <Redirect to='/main' />}/>
                </Switch>
                <ParticlesBackground/>
            </div>
            <Loading preloader={preloader}/>
        </section>
    );
}

export default App;
