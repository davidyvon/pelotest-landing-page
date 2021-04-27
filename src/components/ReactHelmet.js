import React from 'react'
import { Helmet } from 'react-helmet'

const ReactHelmet = () => {
	return (
		<Helmet>
			<html lang='en' />
			<meta charSet='utf-8' />
			<meta name='color-scheme' content='dark light' />
			<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
			<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
			<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
			<meta name='description' content='Pelotest Landing Page' />
			<title>Pelotest</title>
		</Helmet>
	)
}

export default ReactHelmet
