import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import style from './style.module.css';


const index = () => {
    const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of the San Pedro"]
    return (
        <div className={style.description}>
            {
                phrases.map((phrase) => <AnimatedText key={phrase}>{phrase}</AnimatedText>)
            }
        </div>
    )
}

function AnimatedText({ children }) {

    const refText = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.from(refText.current, {
            scrollTrigger: {
                trigger: refText.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: true,
                // markers: true
            },
            left: "-200px",
            opacity: 0
        })
      }, [])


    return (
        <p ref={refText}>{children}</p>
    )
}

export default index