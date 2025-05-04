import './Home.css';
import Gif1 from './img/DeGif.gif';
import Gif2 from './img/FiddlesticksGif.gif';
import CV from './img/UpdatedCV.pdf';
import AlbaOSLOGO from './img/albaoslogo.png';
import EDI from './img/EDI.gif';
import apic from './img/albasoftware.png';
import articles from './img/articles.png';
import NHS from './img/NHS.png';

import React, { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    const projref = useRef();

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section>
            <div className="grid intro">
                <div className="col-1 hide-m"></div>
                <div className="col-11 col-6-m col-3-s center">
                    <div className="text-to-center" data-aos="fade-up" data-aos-duration="1500">
                        <p className="name-text">Cameron Haynes - Programmer</p>
                        <h1 className="name-text2">I like to code things</h1>
                        <p className="text-to-center">
                            <span onClick={() => {
                                projref.current?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}>Projects</span>
                        </p>
                    </div>
                </div>
            </div>

            <section className="lower">
                <div className="Buttons" data-aos="zoom-in-up" data-aos-duration="1000">
                    <a href="https://www.linkedin.com/in/cameron-haynes-778056233/">
                        <button type="button" className="LinkedIn">
                            <span className="Button-Text LinkedIn">LinkedIn</span>
                        </button>
                    </a>
                    <a href={CV}>
                        <button type="button" className="Cv">
                            <span className="Button-Text Cv">CV</span>
                        </button>
                    </a>
                    <a href="https://github.com/CamH04">
                        <button type="button" className="Github">
                            <span className="Button-Text Github">GitHub</span>
                        </button>
                    </a>
                </div>
            </section>

            <section ref={projref} id="project-section" className="projects">
                <h1 className="name-text2 title-text" data-aos="fade-up" data-aos-duration="1500">Projects</h1>

                <div className="project grid center gap">
                    <div className="col-3 col-6-m col-3-s center">
                        <h2 data-aos="zoom-in-right" data-aos-duration="1000">
                            <a href="https://github.com/CamH04/AlbaOS">AlbaOS: A hobby OS developed by me</a>
                        </h2>
                    </div>
                    <a href="https://github.com/CamH04/AlbaOS" className="col-8 col-6-m col-3-s project-image GOTOTHERIGHTIBEG" data-aos="zoom-in-left" data-aos-duration="1000">
                        <img id="ui" src={AlbaOSLOGO} width="480" height="270" alt="AlbaOS logo" />
                    </a>
                </div>

                <div data-aos="fade-up" data-aos-duration="2000">
                    <div className="project grid center gap">
                        <a href="https://github.com/CamH04/Enterprise-Project-Group-9" className="col-8 col-6-m col-3-s project-image">
                            <img id="ui" src={NHS} width="480" height="270" alt="EDI project" data-aos="zoom-in-right" data-aos-duration="1000" />
                        </a>
                        <div className="col-3 col-6-m col-3-s center">
                            <h2 data-aos="zoom-in-left" data-aos-duration="1000">
                                <a href="https://github.com/CamH04/Enterprise-Project-Group-9/">
                                    NHS Gateshead X My-Software Mental Health App
                                </a>
                            </h2>
                        </div>
                    </div>

                    <div className="project grid center gap">
                        <div className="col-3 col-6-m col-3-s center">
                            <h2 data-aos="zoom-in-right" data-aos-duration="1000">
                                <a href="https://albasoftware.netlify.app/">
                                    EDI App for the Durham Constabulary, developed alongside ANS and Microsoft using Microsoft PowerApps
                                </a>
                            </h2>
                        </div>
                        <a href="https://albasoftware.netlify.app/" className="col-8 col-6-m col-3-s project-image GOTOTHERIGHTIBEG" data-aos="zoom-in-left" data-aos-duration="1000">
                            <img id="ui" src={EDI} width="480" height="270" alt="AlbaSoftware preview" />
                        </a>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="2000">
                    <div className="project grid center gap">
                        <a href="https://albasoftware-articles.netlify.app/" className="col-8 col-6-m col-3-s project-image">
                            <img id="ui" src={articles} width="480" height="270" alt="EDI project" data-aos="zoom-in-right" data-aos-duration="1000" />
                        </a>
                        <div className="col-3 col-6-m col-3-s center">
                            <h2 data-aos="zoom-in-left" data-aos-duration="1000">
                                <a href="https://albasoftware-articles.netlify.app/">
                                    Alba Articles: Self written articles about computer science
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="project grid center gap">
                    <div className="col-3 col-6-m col-3-s center">
                        <h2 data-aos="zoom-in-right" data-aos-duration="1000">
                            <a href="https://cool-seahorse-c97407.netlify.app">
                                A website for an artist called "Fiddlesticks_" and his music project
                            </a>
                        </h2>
                    </div>
                    <a href="https://cool-seahorse-c97407.netlify.app" className="col-8 col-6-m col-3-s project-image GOTOTHERIGHTIBEG" data-aos="zoom-in-left" data-aos-duration="1000">
                        <img id="ui" src={Gif2} width="480" height="270" alt="Fiddlesticks music website" />
                    </a>
                </div>


           <div data-aos="fade-up" data-aos-duration="2000">
                    <div className="project grid center gap">
                        <a href="https://albasoftware.netlify.app/" className="col-8 col-6-m col-3-s project-image">
                            <img id="ui" src={apic} width="480" height="270" alt="EDI project" data-aos="zoom-in-right" data-aos-duration="1000" />
                        </a>
                        <div className="col-3 col-6-m col-3-s center">
                            <h2 data-aos="zoom-in-left" data-aos-duration="1000">
                                <a href="https://albasoftware.netlify.app/">
                                    AlbaSoftware: The Hub For My Personal Software Experiments
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>

            </section>
        </section>
    );
}
