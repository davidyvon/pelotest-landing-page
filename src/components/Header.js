import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/pelotest-logo.svg'
import '../sass/components/header.scss'

const Header = () => {
	return (
		<header className='header'>
			<Link className='logo' to='#home'>
				<img src={logo} alt='Pelotest logo' />
			</Link>
		</header>
	)
}

export default Header
