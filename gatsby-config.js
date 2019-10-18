module.exports = {
	siteMetadata: {
		title: `Gatsby Theme Test`,
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
		}
	]
}
