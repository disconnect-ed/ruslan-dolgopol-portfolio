import React from "react";
import './About.sass'
import Footer from "../Footer/Footer";
import {Animated} from "react-animated-css";

const About = () => {
    return (
        <>
            <Animated animationIn="fadeInRight" isVisible={true}>
                <section className='about page-wrap'>
                    <div className="works-header">
                        <h2 className="section__title">О себе</h2>
                    </div>
                    <div className="about-wrap grid">
                        <div className="about-description">
                            <h2 className="about__title">Персональные данные:</h2>
                            <p className="about__text">
                                Полное имя: Долгопол Руслан Викторович
                            </p>
                            <p className="about__text">
                                День рождения: 12 декабря 1998 г.
                            </p>
                            <p className="about__text">
                                Родной город: Борисов (Минская область)
                            </p>
                        </div>
                        <a href='https://vk.com/r.dolgopol' target='_blank' className="about-avatar">
                        </a>
                        <div className="about-description">
                            <h2 className="about__title">Образование:</h2>
                            <div className='about-description__item'>
                                <p className="about__text">
                                    Борисовский государственный политехнический колледж
                                </p>
                                <p className="about__text">
                                    Специальность: производство и техническая эксплуатация приборов и аппаратов
                                </p>
                            </div>
                            <div>
                                <p className="about__text">
                                    Белорусский национальный технический университет
                                </p>
                                <p className="about__text">
                                    Специальность: механические и электромеханические приборы и аппараты
                                </p>
                                <p className="about__text">
                                    Курс: 3 (заочное обучение)
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </Animated>
        </>
    )
}

export default About