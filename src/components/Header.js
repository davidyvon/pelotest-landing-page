import React from 'react'
import { Link } from 'gatsby'

import Navbar from '../components/Navbar'
import logo from '../images/pelotest-logo.svg'
import '../sass/components/header.scss'

const Header = () => {
	return (
		<header className='header' data-sal='fade' data-sal-delay='1000' data-sal-duration='500'>
			<Link className='logo' to='#home'>
				<img src={logo} alt='Pelotest logo' />
			</Link>
			<Navbar />
		</header>
	)
}

export default Header
