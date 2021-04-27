import React from 'react'

import ReactHelmet from '../components/ReactHelmet'
import Header from '../components/Header'
import Hero from '../components/Hero'

class App extends React.Component {
	render() {
		return (
			<div className='app'>
				<ReactHelmet />
				<Header />
				<Hero />
			</div>
		)
	}
}

export default App
