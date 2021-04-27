import React, { useState } from 'react'
import { Link } from 'gatsby'
import '../sass/components/navbar.scss'

import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'

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
					<GiHamburgerMenu className='menu__open' size={32} onClick={handleToggle} />
				) : (
					<IoCloseSharp className='menu__close' size={36} onClick={handleToggle} />
				)}
			</button>
		</>
	)
}

export default Navbar
