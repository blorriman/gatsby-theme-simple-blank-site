import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import {
	Button,
	Container,
	Grid,
	Grow,
	makeStyles,
	Typography
} from '@material-ui/core'
import { cyan, indigo, lightBlue } from '@material-ui/core/colors'

import MyTheme from '../utils/myTheme'
const theme = MyTheme

const useStyles = makeStyles(theme => ({
	backgroundImage: {
		marginTop: theme.spacing(-2),
		width: '100%',
		height: '65vh',
		backgroundPosition: 'top left',
		// backgroundPosition: 'bottom center',
		backgroundRepeat: 'repeat-y',
		backgroundSize: 'cover'
	},
	backgroundGrid: {
		minHeight: '65vh'
	},
	mainDiv: {
		minHeight: '35vh',
		backgroundColor: theme.palette.primary.main,
		// backgroundColor: cyan[500],
		paddingTop: theme.spacing(5),
		paddingBottom: theme.spacing(5)
	},
	button: {
		margin: theme.spacing(1)
	}
}))

export default ({ data }) => {
	const classes = useStyles()
	const imageData = data.file.childImageSharp.fluid
	return (
		<>
			<BackgroundImage
				Tag='section'
				className={classes.backgroundImage}
				fluid={imageData}
				backgroundColor={`#040e18`}
			>
				<Grid
					container
					direction='column'
					justify='center'
					alignItems='center'
					className={classes.backgroundGrid}
				>
					<Grid item xs={12} sm={10} justify='center'>
						<Typography variant='h2' align='center' gutterBottom>
							Hello Gatsby
						</Typography>
					</Grid>
				</Grid>
			</BackgroundImage>

			<div className={classes.mainDiv}>
				<Container component='main' maxWidth='md'>
					<Grow in={true} timeout={800}>
						<>
							<Typography
								variant='h4'
								style={{ color: indigo[500] }}
								gutterBottom
							>
								Homepage in a user's site
							</Typography>
							<Typography
								variant='body1'
								color='textPrimary'
								gutterBottom
								style={{ color: 'white' }}
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
								velit explicabo aspernatur ea! Sequi veniam, laudantium minus
								eaque repellat deleniti saepe deserunt veritatis omnis impedit.
								Voluptas aperiam maiores similique sed?
							</Typography>

							<center>
								<Link to='/about' style={{ textDecoration: 'none' }}>
									<Button
										variant='contained'
										color='secondary'
										size='large'
										className={classes.button}
									>
										Learn More
									</Button>
								</Link>
							</center>
						</>
					</Grow>
				</Container>
			</div>
		</>
	)
}

export const query = graphql`
	query {
		file(name: { eq: "sean-o-KMn4VEeEPR8-unsplash" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 1920) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
