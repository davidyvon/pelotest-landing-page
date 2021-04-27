import React from 'react'

import ReactHelmet from '../components/ReactHelmet'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Cta from '../components/CTA'
import Footer from '../components/Footer'
class App extends React.Component {
	render() {
		return (
			<div className='app'>
				<ReactHelmet />
				<Header />
				<Hero />
				<Cta />
				<Footer />
			</div>
		)
	}
}

export default App
