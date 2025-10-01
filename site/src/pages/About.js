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
                        Cameron Haynes - <span className="light">Dedicated Coder, Music and Owl Lover</span>
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
                       Hi! I'm Cameron, a programmer from Hampshire with a  passion for both software and hardware development. When I’m not coding or doing research, I enjoy creating and listening to music.
                    </p>
                    <p className="big">
                        I love experimenting with code: designing, building, and occasionally breaking, software of all kinds, from websites to operating systems.
                    </p>
                    <p className="big">
                        I love creating websites that are intuitive for users, creating pleasant environments for them to explore.
                    </p>
                    <p className="big">
                        I’m experienced in C#, C++, and the core web development languages (HTML, CSS, and JavaScript), with React being my web framework of choice.
                    </p>
                    <p className="big">
                        Beyond software, I enjoy working with hardware: tinkering with microcontrollers, repairing laptops, and exploring the intersection between hardware and software.
                    </p>
                    <p className="big">
                        This passion for both hardware and software led me into operating system development (OSDev) and further down the path of full-stack web development. As well as this i love to do research in computer science such as my first paper : A Mathematical Approach To Compilers
                    </p>
                </div>
                <div className="col-12"></div>
            </div>
        </section>
    );
}
