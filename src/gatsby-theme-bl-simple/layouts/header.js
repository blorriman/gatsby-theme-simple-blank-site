import React from 'react'
import { Link } from 'gatsby'
import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js'
import { IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	header: {
		paddingBottom: theme.spacing(0.25),
		margin: 0
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	title: {
		textDecoration: 'none',
		color: 'white'
	}
}))

const Header = ({ handleDrawerOpen, siteTitle }) => {
	const classes = useStyles()

	return (
		<header className={classes.header}>
			<Toolbar>
				<IconButton
					color='secondary'
					aria-label='open drawer'
					edge='start'
					onClick={handleDrawerOpen}
					className={classes.menuButton}
				>
					<Icon path={mdiMenu} title='menu' size={1} color='white' />
				</IconButton>
				<Typography component='h1' color='secondary' variant='h4' noWrap>
					<Link className={classes.title} to='/'>
						{siteTitle}
					</Link>
				</Typography>
			</Toolbar>
		</header>
	)
}

export default Header
