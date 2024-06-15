import './About.css';
import {Route, Routes} from "react-router-dom"
import { Link } from 'react-router-dom';
import GitHubLogo from './img/GitHubLogo.png';
import LinkInLogo from './img/LinkInLogo.png';
import ElecGif from './img/gif.webp'

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function About (){
    useEffect(() => {
        Aos.init();
      });

    return(
        <section class="haze">
            <div class="grid">
                <div class="col-1 hide-m"></div>
                <div class="col-4 col-5-m col-3-s">
                    <h1 data-aos="fade-up" data-aos-duration="1500" >Cameron Haynes -<span class="light">Dedicated Coder and Music Lover</span></h1> 
                    <ul class="contact" data-aos="zoom-in-up" data-aos-duration="1000">
                    <li data-aos="zoom-in-up" data-aos-duration="1000" ><Link to="/contact" class="button">Get in touch</Link></li>
                    <li data-aos="zoom-in-up" data-aos-duration="1000" ><a href="https://github.com/CamH04" target="_blank" class="social"><img src={GitHubLogo}alt="GitHub" width="30px" height="30px"></img></a></li>
                    <li data-aos="zoom-in-up" data-aos-duration="1000" ><a href="https://www.linkedin.com/in/cameron-haynes-778056233/" target="_blank" class="social"><img src={LinkInLogo} alt="LinkedIn" width="30px" height="30px"></img></a></li>
                    <img data-aos="zoom-in-up" data-aos-duration="1000" class="help gif" src={ElecGif} width="150px" height="150px"></img>
                    </ul>
                </div>
                <div class="col-6 col-4-m col-3-s" data-aos="zoom-in-left" data-aos-duration="1200" >
                    <p class="big">
                    Hi! I'm Cameron, a programmer from Hampshire! I love to create and listen to music in my off time in the rare case I'm not programming.                    </p>
                    <p class="big">
                    I love experimenting with code trying to make (and break) software of all types from Websites to Operating Systems                    </p>
                    <p class="big">
                    I love creating websites which are intuitive to the user, creating a nice environment for them to explore                    </p>
                    <p class="big">
                    I'm experienced in C#, C++ and the 3 expected web dev languages (HTML/CSS/JavaScript) with React and Blazor being my Web Frameworks of choice                    </p>
                    <p class="big">
                    As well as software, i love tinkering with hardware such as Microcontrollers and even fixing broken laptops                    </p>
                    <p class="big">
                    My love of both hardware and software would eventually lead me down the path of OsDev as well as my interest in vintage computers such as early IBM and Acorn models
                    </p>
                </div>
                <div class="col-12">
                </div>
            </div>
        </section>
    );
}