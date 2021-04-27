import React from 'react'
import { Link } from 'gatsby'
import '../sass/components/hero.scss'

import heroImage from '../images/hero-image.png'
import arrowIcon from '../images/arrow-icon.svg'

const Hero = () => {
	return (
		<section className='hero'>
			<article className='hero__content'>
				<h1 className='hero__heading'>
					<span>City</span> & Concrete
				</h1>
				<p className='hero__paragraph'>
					Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus
					commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
				</p>
				<Link className='hero__link' to='#!'>
					Let's Signup
					<img className='hero__arrow-icon' src={arrowIcon} alt='' />
				</Link>
			</article>

			<div className='hero__image-container'>
				<img className='hero__image' src={heroImage} alt='City and concrete' />
			</div>
		</section>
	)
}

export default Hero
