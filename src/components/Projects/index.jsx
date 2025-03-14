import React, {useState, useRef, useLayoutEffect} from 'react'
import style from './style.module.css';
import Image from 'next/image';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const index = () => {
    const imageContainer = useRef(null);
    const [selectedProject, setSelectedProject] = useState(0);
    const projects = [
        {
            title: "Salar de Atacama",
            src: "salar_de_atacama.jpg"
        },
        {
            title: "Miniques Lagoon",
            src: "miniques_lagoon.jpg"
        },
        {
            title: "Miscani Lake",
            src: "miscani_lake.jpeg"
        },
        {
            title: "Valle de la Muerte",
            src: "valle_de_la_muerte.jpeg"
        },
    ]


    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        ScrollTrigger.create({
            trigger: imageContainer.current,
            start: "-=100px",
            end: document.body.offsetHeight,
            pin: true
        })
      }, [])

  return (
    <div className={style.projects}>
        <div className={style.projectDescription}>
            <div ref={imageContainer} className={style.imageContainer}>
                <Image 
                    src={`/smooth-scroll/images/${projects[selectedProject].src}`}
                    fill={true}
                    alt="Image"
                />
            </div>

            <div className={style.column}>
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
            </div>
            <div className={style.column}>
                <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
            </div>
        </div>
        
        <div className={style.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={style.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
        </div>
    </div>
  )
}

export default index