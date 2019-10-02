/* eslint-disable */
import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'

import MyTheme from '../utils/myTheme'

const theme = MyTheme

const useStyles = makeStyles(theme => ({}))

const About = () => {
	const classes = useStyles()
	return (
		<>
			<Typography variant='h4' gutterBottom>
				About Page
			</Typography>

			<Typography variant='body1' color='textPrimary' gutterBottom>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit
				explicabo aspernatur ea! Sequi veniam, laudantium minus eaque repellat
				deleniti saepe deserunt veritatis omnis impedit. Voluptas aperiam
				maiores similique sed?
			</Typography>
		</>
	)
}

export default About
