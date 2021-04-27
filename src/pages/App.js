import React from 'react'
import { SliderData } from '../components/SliderData'

import ReactHelmet from '../components/ReactHelmet'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ImageSlider from '../components/ImageSlider'
import Cta from '../components/CTA'
import Footer from '../components/Footer'

const App = () => {
	return (
		<div className='app'>
			<ReactHelmet />
			<Header />
			<Hero />
			<ImageSlider slides={SliderData} />
			<Cta />
			<Footer />
		</div>
	)
}

export default App
