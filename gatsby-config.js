module.exports = {
	siteMetadata: {
		title: 'Pelotest',
		// siteUrl: '',
		description: `Pelotest landing page`
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				additionalData: `@import "./src/sass/utilities.scss";`
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Open Sans\:400,700`],
				display: 'swap'
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
			resolve: `gatsby-plugin-manifest`,
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
		}
	]
}
