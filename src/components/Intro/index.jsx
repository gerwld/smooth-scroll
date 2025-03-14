import React, { useLayoutEffect, useRef } from 'react'
import style from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';



const index = () => {
const backgroundImage = useRef(null);
const introImage = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top",
        end: "+=500px",
        scrub: true,
        // markers: true
      }
    });

    timeline
        .from(backgroundImage.current, {
          clipPath: "inset(10%)"
        })
        .to(introImage.current, {
          height: 200,
        }, 0)
  }, [])

  return (
    <div className={style.intro}>
      <div ref={backgroundImage} className={style.backgroundImage}>
        <Image
          src={"/smooth-scroll/images/background.jpeg"}
          fill={true}
          alt="Background Image"
        />
      </div>

      <div className={style.introContainer}>
        <div ref={introImage} data-scroll data-scroll-speed="0.3" className={style.introImage}>
          <Image
            src={"/smooth-scroll/images/intro.png"}
            fill={true}
            alt="Background Image"
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">Revolution Begins Here</h1>
      </div>
    </div>
  )
}

export default index;