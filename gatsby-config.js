module.exports = {
	siteMetadata: {
		title: 'Pelotest',
		// siteUrl: '',
		description: 'Pelotest landing page'
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				additionalData: '@import "./src/sass/utilities.scss";'
			}
		},
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: ['Open Sans:400,700'],
				display: 'swap'
			}
		},
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				threshold: 0.05, // Percentage of an element's area that needs to be visible to launch animation
				once: true, // Defines if animation needs to be launched once
				disable: false, // Flag for disabling animations

				// Advanced Options
				selector: '[data-sal]', // Selector of the elements to be animated
				animateClassName: 'sal-animate', // Class name which triggers animation
				disabledClassName: 'sal-disabled', // Class name which defines the disabled state
				rootMargin: '0% 50%', // Corresponds to root's bounding box margin
				enterEventName: 'sal:in', // Enter event name
				exitEventName: 'sal:out' // Exit event name
			}
		},
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png'
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'pelotest',
				short_name: 'pelotest',
				start_url: '/',
				background_color: '#212121',
				theme_color: '#c7ffad',
				display: 'standalone',
				icon: 'src/images/icon.png'
			}
		},
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			},
			__key: 'images'
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/'
			},
			__key: 'pages'
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				// host: 'https://www.site.com',
				// sitemap: 'https://www.site.com/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		}
	]
}
