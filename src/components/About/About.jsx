import React from "react";
import './About.sass'
import Footer from "../Footer/Footer";
import {Animated} from "react-animated-css";

const About = ({langIsEng}) => {
    return (
        <>
            <Animated animationIn="fadeInRight" isVisible={true}>
                <section className='about page-wrap'>
                    <div className="works-header">
                        <h2 className="section__title">{langIsEng ? 'About me' : 'О себе'}</h2>
                    </div>
                    <div className="about-wrap grid">
                        <div className="about-description">
                            <h2 className="about__title">
                                {langIsEng ? 'Personal data:' : 'Персональные данные:'}
                            </h2>
                            <p className="about__text">
                                {langIsEng ? 'Full name: Dolgopol Ruslan Viktorovich' :
                                    'Полное имя: Долгопол Руслан Викторович'}
                            </p>
                            <p className="about__text">
                                {langIsEng ? 'Birthday: December 12' : 'День рождения: 12 декабря'}
                            </p>
                            <p className="about__text">
                                {langIsEng ? 'Hometown: Borisov (Minsk region)' :
                                    'Родной город: Борисов (Минская область)'}
                            </p>
                        </div>
                        <a href='https://vk.com/r.dolgopol' target='_blank' className="about-avatar">
                        </a>
                        <div className="about-description">
                            <h2 className="about__title">
                                {langIsEng ? 'Education:' : 'Образование:'}
                            </h2>
                            <div className='about-description__item'>
                                <p className="about__text">
                                    {langIsEng ? 'Borisov State Polytechnic College' :
                                        'Борисовский государственный политехнический колледж'}
                                </p>
                                <p className="about__text">
                                    {langIsEng ? 'Specialty: production and technical operation of devices and apparatus' :
                                        'Специальность: производство и техническая эксплуатация приборов и аппаратов'}
                                </p>
                            </div>
                            <div>
                                <p className="about__text">
                                    {langIsEng ? 'Belarusian National Technical University' :
                                        'Белорусский национальный технический университет'}
                                </p>
                                <p className="about__text">
                                    {langIsEng ? 'Specialty: mechanical and electromechanical devices and apparatus' :
                                        'Специальность: механические и электромеханические приборы и аппараты'}
                                </p>
                                {/*<p className="about__text">*/}
                                {/*    {langIsEng ? 'Курс: 3 (заочное обучение)'}*/}
                                {/*</p>*/}
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