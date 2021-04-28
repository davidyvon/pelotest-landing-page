import React from 'react'
import { Link } from 'gatsby'
import '../sass/components/CTA.scss'

import mockupImage from '../images/iphone-mockup.png'
import arrowIcon from '../images/arrow-icon.svg'

const CTA = () => {
	return (
		<section className='cta' data-sal='slide-up' data-sal-delay='500' data-sal-duration='500'>
			<div className='cta__image-container'>
				<img className='cta__image' src={mockupImage} alt='App on mobile phone' />
			</div>

			<article className='cta__content'>
				<h3 className='cta__heading'>Discover our brand new city travel app</h3>
				<p className='cta__paragraph'>
					Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus
					commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
				</p>
				<Link className='cta__link' to='#!'>
					Download The App
					<img className='cta__arrow-icon' src={arrowIcon} alt='' />
				</Link>
			</article>
		</section>
	)
}

export default CTA
