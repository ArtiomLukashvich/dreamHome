import React from 'react'
import styled from 'styled-components'
import useEmblaCarousel from 'embla-carousel-react'
import { mediaByIndex, media } from './Media'
import Image from 'next/image'
import Title from '../Title'

const Slider = () => {
	const [viewportRef, embla] = useEmblaCarousel({
		align: 'center',
		skipSnaps: false,
		loop: true,
	})

	const SLIDE_COUNT = media.length
	const slides = Array.from(Array(SLIDE_COUNT).keys())

	const TitleText = styled.div`
		text-align: center;
		margin: 30px 0;
	`

	const SlideHeader = styled.div`
		position: absolute;
		top: 80%;
		left: 2%;
		text-align: center;
	`

	return (
		<>
			<TitleText>
				<Title>Our Projects</Title>
				<p>Other projects by us in different locations </p>
			</TitleText>
			<div className='embla'>
				<div className='embla__viewport' ref={viewportRef}>
					<div className='embla__container'>
						{slides.map(index => (
							<div className='embla__slide' key={index}>
								<div className='embla__slide__inner'>
									<a href={mediaByIndex(index).url} target='_blanc'>
										<Image
											src={mediaByIndex(index).path}
											alt='Dream House.'
											width={1500}
											height={600}
											objectFit='cover'
										/>
									</a>
									<SlideHeader>
										<Title>{mediaByIndex(index).title}</Title>
										{mediaByIndex(index).country}
									</SlideHeader>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Slider
