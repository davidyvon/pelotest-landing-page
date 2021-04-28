import React, { useState } from 'react'
import { Link } from 'gatsby'
import '../sass/components/navbar.scss'

import open from '../images/menu-open.png'
import close from '../images/menu-close.png'

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false)

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen)
	}

	const closeMenu = () => {
		setNavbarOpen(!navbarOpen)
	}

	return (
		<>
			<div className={`nav-container ${navbarOpen ? ' active' : ''}`}>
				<nav className='nav'>
					<ul className='nav__list'>
						<li className='nav__item'>
							<Link className='nav__link' to='#!' onClick={closeMenu}>
								Become A Partner
							</Link>
						</li>
						<li className='nav__item'>
							<Link className='nav__link' to='#!' onClick={closeMenu}>
								Discover Trip
							</Link>
						</li>
						<li className='nav__item'>
							<Link className='nav__link' to='#!' onClick={closeMenu}>
								About Us
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<button className='menu'>
				{!navbarOpen ? (
					<img src={open} alt='menu__open' onClick={handleToggle} />
				) : (
					<img src={close} alt='menu__close' onClick={handleToggle} />
				)}
			</button>
		</>
	)
}

export default Navbar
