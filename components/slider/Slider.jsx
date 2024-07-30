import React, { useCallback, useState, useEffect } from 'react'
import Image from 'next/image'
import Title from '../Title'
import useEmblaCarousel from 'embla-carousel-react'
import styled from 'styled-components'
import { mediaByIndex } from '../mainPage/otherProjects/Media'
import { PrevButton, NextButton } from './EmblaCarouselButtons'

const SlideHeader = styled.div`
	display: block;
	position: absolute;
	top: 80%;
	left: 2%;
	text-align: center;
`

const Slider = ({ SLIDE_COUNT, showHeader }) => {
	const [viewportRef, embla] = useEmblaCarousel({
		align: 'center',
		skipSnaps: false,
		loop: true,
	})
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
	const onSelect = useCallback(() => {
		if (!embla) return
		setPrevBtnEnabled(embla.canScrollPrev())
		setNextBtnEnabled(embla.canScrollNext())
	}, [embla])

	useEffect(() => {
		if (!embla) return
		embla.on('select', onSelect)
		onSelect()
	}, [embla, onSelect])

	const slides = Array.from(Array(SLIDE_COUNT).keys())

	return (
		<>
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
									{showHeader ? (
										<SlideHeader>
											<Title>{mediaByIndex(index)?.title}</Title>
											{mediaByIndex(index)?.country}
										</SlideHeader>
									) : null}
								</div>
							</div>
						))}
					</div>
				</div>
				<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
				<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
			</div>
		</>
	)
}

export default Slider
