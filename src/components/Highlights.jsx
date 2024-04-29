import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

const Highlights = () => {
	
	useGSAP(() => {
		gsap.to('#title', {
			y: 0, opacity: 1
		});

		gsap.to('.link', {
			y: 0,
			opacity: 1,
			stagger: .25,
			delay: .5
		});
	}, []);

  return (
    <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
			<div className="screen-max-width">
				<div className='mb-12 w-full md:flex items-end justify-between'>
					<h1 id="title" className="section-heading">
							Get the highlights.
					</h1>
					<div className="flex flex-wrap items-end mb-10 gap-5">
						<p className="link text-xs">
							Watch the film
							<img src={watchImg} alt="watch" className='ml-2 w-4'/>
						</p>
						<p className="link text-xs">
							Watch the event
							<img src={rightImg} alt="watch" className='ml-2 w-2'/>
						</p>
					</div>
					
					<VideoCarousel />
					
				</div>
			</div>
    </section>
  )
}

export default Highlights