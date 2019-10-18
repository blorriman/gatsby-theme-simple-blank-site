import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from 'gatsby-theme-bl-simple/src/layouts/index'

import MyTheme from '../utils/myTheme'

const theme = MyTheme

export default ({ children, location }) => {
	let fullwidth = false
	if (location.pathname === '/') {
		fullwidth = true
	}
	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
							author
							social {
								facebook
								twitter
								linkedin
								instagram
							}
						}
					}
				}
			`}
			render={data => (
				<Layout
					theme={theme}
					siteTitle={data.site.siteMetadata.title}
					author={data.site.siteMetadata.author}
					social={data.site.siteMetadata.social}
					location={location}
					fullwidth={fullwidth}
				>
					{children}
				</Layout>
			)}
		/>
	)
}
