import './Photography.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

import img1 from './img/grid/img1.jpg';
import img2 from './img/grid/img2.jpg';
import img3 from './img/grid/img3.jpg';

import img4 from './img/grid/img6.jpg';
import img5 from './img/grid/img4.jpg';
import img6 from './img/grid/img5.jpg';

import img7 from './img/grid/img7.jpg';
import img8 from './img/grid/img8.jpg';
import img9 from './img/grid/img9.jpg';
export default function Photography(){
    useEffect(() => {
        Aos.init();
      });



    return(
        <section class="photo-grid" data-aos="zoom-in" data-aos-duration="1000">
            <div class="header">
                <h1>Some Photos I've Taken</h1>
                <p>"volare sicut tyto noctua , to fly like a nightingale"</p>

            </div>
            <div class="row" data-aos="fade-up" data-aos-duration="2000">
                <div class="column" data-aos="zoom-in-right" data-aos-duration="2000">
                    <img src={img1} alt="cphoto"></img>
                    <img src={img2} alt="cphoto"></img>
                    <img src={img3} alt="cphoto"></img>
                </div>
                <div class="column" data-aos="zoom-in" data-aos-duration="2000">
                    <img src={img5} alt="cphoto"></img>
                    <img src={img6} alt="cphoto"></img>
                    <img src={img4} alt="cphoto"></img>
                </div>
                <div class="column"data-aos="zoom-in-left" data-aos-duration="2000">
                    <img src={img7} alt="cphoto"></img>
                    <img src={img8} alt="cphoto"></img>
                    <img src={img9} alt="cphoto"></img>
                </div>
            </div>
        </section>
    );
}

