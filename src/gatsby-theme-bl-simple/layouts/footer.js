import React from 'react'
import { Link } from 'gatsby'
import Icon from '@mdi/react'
import {
	mdiFacebookBox,
	mdiInstagram,
	mdiLinkedinBox,
	mdiTwitterBox
} from '@mdi/js'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'

import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: grey[300],
		padding: theme.spacing(5),
		marginLeft: theme.spacing(-1),
		marginRight: theme.spacing(-1)
	},
	type: {
		fontWeight: 'fontWeightLight',
		fontSize: 12,
		color: grey[800]
	},
	followUs: {
		marginTop: theme.spacing(-3),
		fontWeight: 'fontWeightLight',
		fontSize: 12,
		color: grey[800]
	},
	button: {
		fontWeight: 'fontWeightLight',
		fontSize: 12,
		color: grey[800],
		textTransform: 'capitalize'
	},
	link: {
		textDecoration: 'none'
	}
}))

const Footer = ({ author, social }) => {
	const classes = useStyles()

	return (
		<footer className={classes.root}>
			<Grid container spacing={4}>
				<Grid item xs={12} sm={4} align='center'>
					<Link to='/contact' className={classes.link}>
						<Button color='primary' size='small' className={classes.button}>
							Contact
						</Button>
					</Link>
				</Grid>

				<Grid item xs={12} sm={4} align='center'>
					<Typography
						variant='body1'
						align='center'
						className={classes.followUs}
					>
						Follow Us
					</Typography>
					<Typography variant='body1' align='center' className={classes.type}>
						{social.facebook && (
							<a
								href={`https://facebook.com/${social.facebook}`}
								target='_blank'
								rel='noreferrer noopener'
							>
								<Icon
									path={mdiFacebookBox}
									title='Facebook'
									size={1.25}
									color={grey[600]}
								/>
							</a>
						)}
						{social.twitter && (
							<a
								href={`https://twitter.com/${social.twitter}`}
								target='_blank'
								rel='noreferrer noopener'
							>
								<Icon
									path={mdiTwitterBox}
									title='Twitter'
									size={1.25}
									color={grey[600]}
								/>
							</a>
						)}
						{social.linkedin && (
							<a
								href={`https://linkedin.com/in/${social.linkedin}`}
								target='_blank'
								rel='noreferrer noopener'
							>
								<Icon
									path={mdiLinkedinBox}
									title='Linkedin'
									size={1.25}
									color={grey[600]}
								/>
							</a>
						)}
						{social.instagram && (
							<a
								href={`https://instagram.com/${social.instagram}`}
								target='_blank'
								rel='noreferrer noopener'
							>
								<Icon
									path={mdiInstagram}
									title='Instagram'
									size={1.25}
									color={grey[600]}
								/>
							</a>
						)}
					</Typography>
				</Grid>

				<Grid item xs={12} sm={4} align='center'>
					<Typography variant='body1' className={classes.type}>
						{author} © {new Date().getFullYear()}
					</Typography>
				</Grid>
			</Grid>
		</footer>
	)
}

export default Footer
