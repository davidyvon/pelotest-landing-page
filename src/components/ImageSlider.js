import React, { useState } from 'react'
import { SliderData } from './SliderData'
import '../sass/components/imageSlider.scss'

import arrowLeft from '../images/arrow-left.svg'
import arrowRight from '../images/arrow-right.svg'

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0)
	const length = slides.length
	const data = SliderData

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<section className='image-slider' data-sal='slide-up' data-sal-delay='500' data-sal-duration='800'>
			{data.map((slide, index) => {
				return (
					<div className={index === current ? 'slide active' : 'slide'} key={index}>
						{index === current && (
							<div className='image-slider__container'>
								<img className='image-slider__icon-container' src={slide.icon} alt='' />
								<h2 className='image-slider__heading'>{slide.heading}</h2>
								<p className='image-slider__paragraph'>{slide.paragraph}</p>
								<img
									className='image-slider__arrow image-slider__arrow--left'
									alt='Previous slide'
									src={arrowLeft}
									onClick={prevSlide}
									onKeyDown={prevSlide}
									role='presentation'
								/>
								<img
									className='image-slider__arrow image-slider__arrow--right'
									alt='Next slide'
									src={arrowRight}
									onClick={nextSlide}
									onKeyDown={nextSlide}
									role='presentation'
								/>
							</div>
						)}
					</div>
				)
			})}
		</section>
	)
}

export default ImageSlider
