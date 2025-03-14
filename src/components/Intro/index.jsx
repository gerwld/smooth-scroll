import React from 'react'
import style from './style.module.css';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className={style.intro}>
      <div className={style.backgroundImage}>
        <Image
          src={"/images/background.jpeg"}
          fill={true}
          alt="Background Image"
        />
      </div>

      <div className={style.introContainer}>
        <div data-scroll data-scroll-speed="0.3" className={style.introImage}>
          <Image
            src={"/images/intro.png"}
            fill={true}
            alt="Background Image"
          />
        </div>
        <h1 data-scroll data-scroll-speed="0.7">Revolution Begins Here</h1>
      </div>
    </div>
  )
}

export default Intro