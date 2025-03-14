
"use client";
import React, { useEffect } from 'react'
import style from './page.module.css';
import Intro from '@/components/Intro';
import Description from '@/components/Description';
import Projects from '@/components/Projects';


const page = () => {
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <div className={style.main}>
      <Intro/>
      <Description/>
      <Projects/>
    </div>
  )
}

export default page