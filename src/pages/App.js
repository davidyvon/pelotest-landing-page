import React from 'react'

import ReactHelmet from '../components/ReactHelmet'
import Header from '../components/Header'

class App extends React.Component {
	render() {
		return (
			<div className='app'>
				<ReactHelmet />
				<Header />
			</div>
		)
	}
}

export default App
