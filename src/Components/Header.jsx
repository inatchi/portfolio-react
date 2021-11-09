import React, { useState } from 'react';
import Modal from './Modal.jsx';
import './contact-form.css';
import Map from './img/map.png';

const Header = () => {
    const [modalActive, setModalActive] = useState()
    return (
            <header className="header">
                <div className="header__logo-container">
                    <div className="header__logo">
                        <a href="#" className="header__logo-text">lia</a> 
                    </div>
                </div>
                <ul className="header__menu-container">
                    <li className="header__menu-item" data-f="all">All</li>
                    <li className="header__menu-item" data-f="about">About</li>
                    <li className="header__menu-item" data-f="projects">Projects</li>
                    <li className="header__menu-item" data-f="media">Media</li>
                </ul>
                <div className="header__contact-container">
                    <span className="contact" onClick={() => setModalActive(true)}>Contact</span>
                    
                </div>
                <Modal active={modalActive} setActive={setModalActive}>
                    <div className="container">
                        <h1 className="container__headline">Contact with me</h1>
                        <div className="container__info">
                            <div className="container__map">
                                <img src={Map} />
                            </div>
                            <div className="container__detail">
                                <div className="container__phone">
                                    <h3>My cellphone</h3>
                                    <a href="tel:+7 (914) 413 74 06">+7 (914) 413 74 06</a>
                                </div>
                                <div>
                                    <h3>My e-mail</h3>
                                    <a href="mailto:safonovanatalia117@gmail.com">safonovanatalia117@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </header>
    );
};

export default Header;