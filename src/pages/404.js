import * as React from 'react'
import { Link } from 'gatsby'
import '../sass/components/404.scss'

import arrowIcon from '../images/arrow-icon.svg'

const PageNotFound = () => {
	return (
		<main className='error'>
			<title>Not found</title>
			<h1 className='error__heading'>404</h1>
			<h2 className='error__sub-heading'>Page not found</h2>
			<p className='error__text'>Sorry, we couldn’t find what you were looking for.</p>
			<Link className='error__link' to='/'>
				Go Home
				<img className='error__arrow-icon' src={arrowIcon} alt='' />
			</Link>
		</main>
	)
}

export default PageNotFound
