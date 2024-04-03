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
                    Hi! I'm Cameron, a programmer from Hampshire, who is currently based in Sunderland. I love to create and listen to music in my off time.
                    </p>
                    <p class="big">
                    I started programming in senior school and even back then I was programming heavily in my spare time. I learnt more and more, leading to where I am now. I love to experiment with code and build a large variety of projects using any tech I can get my hands on.
                    </p>
                    <p class="big">
                    I love creating websites which is intuitive to the user, creating a nice environment for them to use
                    </p>
                    <p class="big">
                    I'm experienced in C# and the 3 expected languages (HTML/CSS/JavaScript) with React and Blazor being my Web Frameworks of choice
                    </p>
                    <p class="big">
                    Tinkering around with software is fun, but I also love to experiment with hardware and electronics using Ardunio's and Esp's
                    </p>
                </div>
                <div class="col-12">
                </div>
            </div>
        </section>
    );
}