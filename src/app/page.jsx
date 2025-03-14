
"use client";
import React, { useEffect } from 'react'
import style from './page.module.css';
import Intro from '@/components/Intro';


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
    </div>
  )
}

export default page