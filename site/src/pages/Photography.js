import './Photography.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

import img1 from './img/grid/test1.jpg';
import img2 from './img/grid/test2.jpg';
import img3 from './img/grid/test3.jpg';

export default function Photography(){
    useEffect(() => {
        Aos.init();
      });



    return(
        <section class="photo-grid" data-aos="zoom-in" data-aos-duration="1000">
            <div class="header">
                <h1>Some Photos I've Taken</h1>
                <p>"volare sicut tyto noctua , to fly like a nightingale"</p>



                <p>"PLACEHOLDERS FOR NOW WHILE PAGE IS UNDER CONSTRUCTION!, THESE ARE NOT MY PHOTOS"</p>

            </div>
            <div class="row" data-aos="fade-up" data-aos-duration="2000">
                <div class="column" data-aos="zoom-in-right" data-aos-duration="2000">
                    <img src={img1} alt="cphoto"></img>
                    <img src={img2} alt="cphoto"></img>
                    <img src={img3} alt="cphoto"></img>
                </div> 
                <div class="column" data-aos="zoom-in" data-aos-duration="2000">
                    <img src={img2} alt="cphoto"></img>
                    <img src={img3} alt="cphoto"></img>
                    <img src={img1} alt="cphoto"></img>
                </div> 
                <div class="column"data-aos="zoom-in-left" data-aos-duration="2000">
                    <img src={img1} alt="cphoto"></img>
                    <img src={img3} alt="cphoto"></img>
                    <img src={img2} alt="cphoto"></img>
                </div> 
            </div>
        </section>
    );
}

