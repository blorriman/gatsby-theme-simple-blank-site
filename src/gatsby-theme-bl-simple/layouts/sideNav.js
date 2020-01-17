/* eslint-disable */
import React, { useState } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Icon from '@mdi/react'
import {
	mdiHome,
	mdiLibrary,
	mdiInformationVariant,
	mdiInformationOutline,
	mdiMaterialUi,
	mdiWeb
} from '@mdi/js'
import {
	Box,
	Collapse,
	Container,
	Divider,
	Grid,
	Hidden,
	List,
	ListSubheader,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Typography
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { blue, cyan, deepPurple, grey, purple } from '@material-ui/core/colors'
import MyTheme from '../../utils/myTheme'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginLeft: theme.spacing(-1)
	},
	nested: {
		paddingLeft: theme.spacing(4)
	},
	link: { textDecoration: 'none', color: grey[700] }
}))

const SideNav = ({ pathname, handleDrawerClose }) => {
	const classes = useStyles()
	const theme = MyTheme
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<List
				component='nav'
				aria-labelledby='nested-list-subheader'
				className={classes.root}
			>
				{pathname !== '/' && (
					<Link to='/' className={classes.link} onClick={handleDrawerClose}>
						<ListItem button divider>
							<ListItemIcon>
								<Icon
									path={mdiHome}
									title='Home'
									size={1.5}
									color={theme.palette.primary.main}
								/>
							</ListItemIcon>
							<ListItemText primary='Home' />
						</ListItem>
					</Link>
				)}

				{pathname !== '/about' && (
					<Link
						to='/about'
						className={classes.link}
						onClick={handleDrawerClose}
					>
						<ListItem button divider>
							<ListItemIcon>
								<Icon
									path={mdiInformationOutline}
									title='About'
									size={1.5}
									color={theme.palette.primary.main}
								/>
							</ListItemIcon>
							<ListItemText primary='About' />
						</ListItem>
					</Link>
				)}

				{pathname !== '/resources' && (
					<Link
						to='/resources'
						className={classes.link}
						onClick={handleDrawerClose}
					>
						<ListItem button divider>
							<ListItemIcon>
								<Icon
									path={mdiLibrary}
									title='Resources'
									size={1.5}
									color={theme.palette.primary.main}
								/>
							</ListItemIcon>
							<ListItemText primary='Resources' />
						</ListItem>
					</Link>
				)}
			</List>
		</>
	)
}

export default SideNav
