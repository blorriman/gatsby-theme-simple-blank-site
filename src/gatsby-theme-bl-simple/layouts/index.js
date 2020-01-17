import React, { useState } from 'react'
import Icon from '@mdi/react'
import { mdiChevronLeftCircle } from '@mdi/js'
import {
	AppBar,
	Container,
	Divider,
	Drawer,
	Grid,
	Hidden,
	IconButton,
	makeStyles
} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import './styles.css'

import Header from './header'
import Footer from './footer'
import SideNav from './sideNav'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
	main: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: 'calc(100vh - 175px)',
		marginLeft: theme.spacing(-1),
		marginRight: theme.spacing(-1),
		marginTop: theme.spacing(-1),
		paddingTop: theme.spacing(2)
	},
	toolbar: theme.mixins.toolbar,
	appBar: {
		boxShadow: theme.shadows[1]
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	drawerPaper: {
		width: drawerWidth,
		paddingTop: theme.spacing(2),
		paddingLeft: theme.spacing(2)
	},
	mobileDivider: {
		marginBottom: theme.spacing(2)
	}
}))

const Layout = ({
	children,
	fullwidth,
	location,
	theme,
	siteTitle,
	author,
	social
}) => {
	let pathname
	if (location) {
		pathname = location.pathname
	}
	const classes = useStyles()
	const [open, setOpen] = useState(false)

	function handleDrawerOpen() {
		setOpen(true)
	}

	function handleDrawerClose() {
		setOpen(false)
	}

	const childrenContent = (
		<Grid container spacing={4}>
			<Grid item xs={12} sm={9}>
				{children}
			</Grid>
			<Hidden xsDown>
				<Grid item xs={12} sm={3}>
					<SideNav pathname={pathname} handleDrawerClose={handleDrawerClose} />
				</Grid>
			</Hidden>
		</Grid>
	)

	return (
		<ThemeProvider theme={theme}>
			{!fullwidth && (
				<>
					<AppBar position='fixed' className={classes.appBar}>
						<Header
							siteTitle={siteTitle}
							handleDrawerOpen={handleDrawerOpen}
							handleDrawerClose={handleDrawerClose}
						/>
					</AppBar>

					<div className={classes.toolbar} />
				</>
			)}

			<main className={classes.main}>
				<Drawer
					variant='temporary'
					open={open}
					onClose={handleDrawerOpen}
					classes={{
						paper: classes.drawerPaper
					}}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
				>
					<Hidden smUp>
						<div className={classes.drawerHeader}>
							<IconButton onClick={handleDrawerClose}>
								<Icon
									path={mdiChevronLeftCircle}
									title='close'
									size={1.5}
									color={theme.palette.primary.main}
								/>
							</IconButton>
						</div>
						<Divider className={classes.mobileDivider} />
					</Hidden>
					<SideNav pathname={pathname} handleDrawerClose={handleDrawerClose} />
				</Drawer>

				{!fullwidth ? (
					<Container component='main' maxWidth='md'>
						{childrenContent}
					</Container>
				) : (
					children
				)}
			</main>

			{!fullwidth && <Footer author={author} social={social} />}
		</ThemeProvider>
	)
}

export default Layout
