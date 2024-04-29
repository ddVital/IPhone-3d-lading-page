import React, { useState, useEffect } from 'react';
import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false); // State to manage navbar visibility

  const timeline = gsap.timeline({delay: 1});

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 400) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener('scroll', handleScroll);
    console.log(isVisible);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#navbar', {y: 0, duration: 1})
  }, [isVisible]);

  return (
    <header id="navbar" className={`w-full py-5 sm:px-10 px-5 flex justify-between items-center z-50 bg-black/75 backdrop-blur-xl absolut ${isVisible ? 'fixed -translate-y-40 border-b border-b-gray-300' : ''}`}>
      <nav className='flex w-full screen-max-width justify-between'>
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className='md:flex flex-1 justify-center hidden'>
          {navLists.map((nav, i) => (
            <div key={i} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
