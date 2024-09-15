import './Photography.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Photography(){
    useEffect(() => {
        Aos.init();
      });



    return(
        <section>
            <div>
                <h1>its working</h1>
            </div>
        </section>
    );
}

