import './Contact.css';

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Contact (){
    useEffect(() => {
        Aos.init();
      });

    return(
        <section>
            <script src="./sc"></script>
            <div class="grid">
            <div class="col-7 col-6-m col-3-s">
                <h1 data-aos="fade-up" data-aos-duration="1500" >Hello!</h1>
                <p class="big" data-aos="zoom-in-up" data-aos-duration="1000" >
                I would love to hear from you! If you wish to contact me you can use the options below. I've put a lot of effort into this site. I hope you enjoy it as much as i do!
                </p>
            </div>
            <div class="col-5 hide-m"></div>
            <div class="col-4 col-3-m col-3-s" data-aos="zoom-in-up" data-aos-duration="1000" >
                <p class="light">Send me an email</p>
                <p class="big"><a href="mailto:wouterdebres@gmail.com">cameronahaynes04@gmail.com</a></p>
            </div>
            <div class="col-5 col-3-m col-3-s" data-aos="zoom-in-up" data-aos-duration="1000" >
                <p class="light">Connect on LinkedIn</p>
                <p class="big"><a href="https://www.linkedin.com/in/cameron-haynes-778056233/">linkedin.com/cameron-haynes/</a></p>
            </div>
            
            </div>
        </section>
    );
}