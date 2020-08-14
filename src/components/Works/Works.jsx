import React from "react";
import './Works.sass'
import Footer from "../Footer/Footer";
import worksData from "../../data/worksData";
import WorksCard from "./WorksCard/WorksCard";
import {Animated} from "react-animated-css";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Works = () => {
    return (
        <>
            <Animated animationIn="fadeInRight" isVisible={true}>
                <section className='works page-wrap'>
                    <div className="works-header">
                        <h2 className="section__title">Мои работы</h2>
                    </div>
                    <div className="works-wrap grid">
                        {
                            worksData.map(result => {
                                return <WorksCard img={result.img} name={result.name}
                                                  key={result.path}
                                                  path={result.path}
                                                  level={result.level}/>
                            })
                        }
                    </div>
                    <div className="works-footer">
                        <a target='_blank' href='https://github.com/disconnect-ed' className="works__button">
                            <FontAwesomeIcon icon={faGithub} /> ВСЕ РАБОТЫ</a>
                    </div>
                </section>
                <Footer/>
            </Animated>
        </>
    )
}

export default Works