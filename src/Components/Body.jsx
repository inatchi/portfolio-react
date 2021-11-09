import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header.jsx';
import { lightTheme, darkTheme, GlobalStyle } from "./Themes.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import LinkedIn from './img/linkedin.svg';
import ModalProject from './ModalProject.jsx';
import Icon from './img/link.svg';
import Me from './img/hello-me.jpeg';
import HeadHunter from './img/hh-red-large.svg';
import ModalWidjets from './ModalWidjets.jsx';
import Calendar from './widjets/calendar/calendar.jsx';

const StyledBody = styled.div`

color: ${props => props.theme.fontColor};

`

function Body() {
    const [projectActive, setProjectActive] = useState();
    const [widjetsActive, setWidjetsActive] = useState();
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <StyledBody>
            <Header />
            
            <section class="content">
            <div class="content__body">
                <div class="content__grid dropZone" data-zone="1">
                    <div class="content__grid-item intro-box about dragItem" data-item="1" draggable="true">
                        <div class="content__flex-item intro-box__img-btn">
                            <div class="content__flex-picture"></div>
                            <div class="content__flex-button">
                                <button class="more-button desktop" onClick={() => setProjectActive(true)}> More about me</button>
                                <button class="more-button mobile" onClick={() => setProjectActive(true)}> More </button>
                            </div>
                            
                        </div>
                        <div class="content__flex-item">
                            <p class="content__text-intro">I'm <strong class="content__text-name">lia</strong>, a web developer and translator from Russia, Moscow.
                            I'm interested in JavaScript, React JS, HTML, CSS, and Japanese.
                            Dreaming about California.
                        </p>
                        </div>
                        
                    </div>
                    <div data-item="2" draggable="true" class="content__grid-item map-box box-width about dragItem">
                    </div>
                    <div data-item="3"  data-zone="3" draggable="true" class="content__grid-item translation-box projects dragItem">
                        <a href="https://homerun-three.vercel.app/" className="content__visit-block">
                            <p className="content__visit">Visit Site</p>
                            <img src={Icon} />
                        </a>
                    </div>
                    
                    <div data-item="4"draggable="true" class="content__grid-item text-block media dragItem">
                        <div class="content__text-intro">
                            <p>Widjets</p>
                            <div className="content__widjets">
                                <img />
                                <img />
                                <img />
                            </div>
                            <div className="content__visit-block">
                                <p className="content__visit" onClick={() => setWidjetsActive(true)}>Open</p>
                                <img src={Icon} />
                            </div>
                        </div>
                    </div> 
                    <div data-item="5"draggable="true" class="content__grid-item blue-box media dragItem">
                        <a href="https://github.com/inatchi">
                            <FontAwesomeIcon icon={faGithub} className="text-3xl"></FontAwesomeIcon>
                        </a>
                    </div>     
                    <div data-item="6"draggable="true" class="content__grid-item work-box projects dragItem">
                        <a href="https://homerun-three.vercel.app/" className="content__visit-block">
                            <p className="content__visit">Visit Site</p>
                            <img src={Icon} />
                        </a>
                    </div>
                    <div data-item="7"draggable="true" class="content__grid-item work-box-2 another-project projects about dragItem">
                        <p class="content__text-intro">Skills and Tools</p>
                        <div class="content__skill-git">Development: JavaScript, React, HTML, CSS/SCSS, Git</div>
                    </div>
                    <div data-item="8" draggable="true" class="content__grid-item block projects interesting dragItem">
                    <div id="toggle">
                        <div
                            onClick={() => themeToggler()} 
                            class="indicator"
                            >
                            </div>
                    </div>
                    </div>  
                    
                </div>
            </div>
            <ModalProject active={projectActive} setActive={setProjectActive}>
                <div className="modal__container">
                    <div className="modal__flexbox">
                        <div className="modal__picture-container">   
                            <div className="modal__picture-me"><img src={Me} /></div>
                            <div className="modal__social-box">
                                <a href="#" className="modal__link"><img src={LinkedIn} /></a>
                                <a href="#" className="modal__link"><img src={HeadHunter} /></a>
                            </div>
                        </div>
                        <div className="modal__about-me">
                            <h3>Hi! I am Safonova Natalia. </h3>
                            <p>I graduated the university almost 3 years ago 
                                and have got the diploma of Japanese and English translator.
                                </p>
                            <p>
                                Last year I realized I want to try something else.
                                And then I found myself in web development.
                                I am absolutely into learning languages!
                            </p>
                            <p>Now I am learning JavaScript and React by myself,
                                And learning C# in programming course.</p>

                                <p>Here you can find some social media profiles and resume in Russian and English.</p>
                        </div>
                    </div>
                </div>
            </ModalProject>
            <ModalWidjets active={widjetsActive} setActive={setWidjetsActive}>
                
                <Calendar />
            </ModalWidjets>
        </section>
        </StyledBody>
    </ThemeProvider>
    );
}

export default Body;


