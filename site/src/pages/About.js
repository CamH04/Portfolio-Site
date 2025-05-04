import './About.css';
import { Link } from 'react-router-dom';
import GitHubLogo from './img/GitHubLogo.png';
import LinkInLogo from './img/LinkInLogo.png';
import ElecGif from './img/gif.webp';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section className="haze">
            <div className="grid">
                <div className="col-1 hide-m"></div>
                <div className="col-4 col-5-m col-3-s">
                    <h1 data-aos="fade-up" data-aos-duration="1500">
                        Cameron Haynes - <span className="light">Dedicated Coder and Music Lover</span>
                    </h1>
                    <ul className="contact" data-aos="zoom-in-up" data-aos-duration="1000">
                        <li data-aos="zoom-in-up" data-aos-duration="1000">
                            <Link to="/contact" className="button">Get in touch</Link>
                        </li>
                        <li data-aos="zoom-in-up" data-aos-duration="1000">
                            <Link to="/photography" className="button">Photos</Link>
                        </li>
                        <li data-aos="zoom-in-up" data-aos-duration="1000">
                            <a href="https://github.com/CamH04" target="_blank" rel="noreferrer" className="social">
                                <img src={GitHubLogo} alt="GitHub" width="30px" height="30px" />
                            </a>
                        </li>
                        <li data-aos="zoom-in-up" data-aos-duration="1000">
                            <a href="https://www.linkedin.com/in/cameron-haynes-778056233/" target="_blank" rel="noreferrer" className="social">
                                <img src={LinkInLogo} alt="LinkedIn" width="30px" height="30px" />
                            </a>
                        </li>
                        <img
                            data-aos="zoom-in-up"
                            data-aos-duration="1000"
                            className="help gif"
                            src={ElecGif}
                            width="150px"
                            height="150px"
                            alt="spinningGif"
                        />
                    </ul>
                </div>
                <div className="col-6 col-4-m col-3-s" data-aos="zoom-in-left" data-aos-duration="1200">
                    <p className="big">
                        Hi! I'm Cameron, a programmer from Hampshire! I love to create and listen to music in my free time—
                        on the rare occasion I'm not programming.
                    </p>
                    <p className="big">
                        I enjoy experimenting with code—trying to make (and break) software of all types, from websites to operating systems.
                    </p>
                    <p className="big">
                        I love creating websites that are intuitive for users, crafting pleasant environments for them to explore.
                    </p>
                    <p className="big">
                        I'm experienced in C#, C++, and the three expected web development languages (HTML/CSS/JavaScript),
                        with React being my strongest web framework.
                    </p>
                    <p className="big">
                        In addition to software, I love tinkering with hardware such as microcontrollers and even fixing broken laptops.
                    </p>
                    <p className="big">
                        My passion for both hardware and software eventually led me down the path of OS development (OsDev), and deep into the Fullstack Web Development rabbit hole
                    </p>
                </div>
                <div className="col-12"></div>
            </div>
        </section>
    );
}
