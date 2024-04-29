import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])
  useGSAP(() => {
    gsap.to('.hero-title', {
      opacity: 1,
      duration: 1,
      delay: 2,
      y: 0
    });

    gsap.to('#cta', {
      y: 0,
      delay: 2,
      opacity: 1,
    })
  },[]);

  return (
    <section className='w-full bg-black relative py-16'>
        <div className="h-5/6 w-full flex-center flex-col">
            <p className='hero-title translate-y-10'>iPhone 15 pro</p>
            <div className='md:w-10/12 w-9/12'>
              <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
                <source src={videoSrc} type='video/mp4'/>
              </video>
            </div>
        </div>

        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 m-5">
          <a href="#highlights" className='btn'>Buy</a>
          <p>From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Hero