import React from 'react'
import { Helmet } from 'react-helmet'

const Layout = () => {
	return (
		<Helmet>
			<html lang='en' />
			<meta charSet='utf-8' />
			<meta name='color-scheme' content='dark light' />
			<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
			<meta
				name='description'
				content='A landing page for a fictional Travel App. Designed by Pelo Studio, coded by David Yvon'
			/>
			<title>Pelotest</title>
		</Helmet>
	)
}

export default Layout
