const path = require(`path`)

module.exports = {
	siteMetadata: {
		title: `Gatsby Theme Site`,
		description: `This is a Gatsby site using Material-UI`,
		author: `Bob Lorriman`,
		siteUrl: `https://gatsby-theme-bl-one.netlify.com/`,
		social: {
			twitter: `blorriman`,
			facebook: 'bob.lorriman',
			linkedin: 'blorriman',
			instagram: 'boblorriman'
		}
	},
	plugins: [
		'gatsby-plugin-layout',
		{
			resolve: `gatsby-plugin-material-ui`,
			options: {
				stylesProvider: {
					injectFirst: true
				}
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-theme-bl-simple`,
			options: {}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: path.join(__dirname, `src`, `images`)
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Theme Site`,
				short_name: `GatsbyThemeSite`,
				start_url: `/`,
				background_color: `#00BCD4`,
				theme_color: `#00BCD4`,
				display: `minimal-ui`,
				icon: `src/images/BL-grey.png` // This path is relative to the root of the site.
				// crossOrigin: `use-credentials`,
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`
	]
}
