module.exports = {
	siteMetadata: {
		title: `Gatsby Theme Test`,
		description: `This is a Gatsby site using Material-UI`,
		author: `Bob Lorriman`,
		siteUrl: `https://gatsby-theme-bl-one.netlify.com/`,
		social: {
			twitter: `blorriman`
		}
	},
	plugins: [
		'gatsby-plugin-layout',
		{
			resolve: `gatsby-theme-bl-simple`,
			options: {}
		}
	]
}
