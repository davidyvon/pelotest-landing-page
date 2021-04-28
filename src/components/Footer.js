import React from 'react'
import { Link } from 'gatsby'
import '../sass/components/footer.scss'

import logo from '../images/pelotest-logo.svg'

const Footer = () => {
	return (
		<footer className='footer' data-sal='fade' data-sal-delay='500' data-sal-duration='500'>
			<Link className='footer__logo' to='#home'>
				<img src={logo} alt='Pelotest logo' />
			</Link>

			<nav className='footer__nav'>
				<Link className='footer__link' to='#!'>
					Discover Trip
				</Link>

				<Link className='footer__link' to='#!'>
					About Us
				</Link>

				<Link className='footer__link' to='#!'>
					Our Documentation
				</Link>

				<Link className='footer__link' to='#!'>
					Become A Partner
				</Link>

				<Link className='footer__link' to='#!'>
					Conditions Of Usage
				</Link>
			</nav>
		</footer>
	)
}

export default Footer
