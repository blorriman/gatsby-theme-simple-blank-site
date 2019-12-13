/* eslint-disable */
import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
	Button,
	Container,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	Grid,
	Grow,
	makeStyles,
	TextField,
	Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	paragraph: {
		...theme.typography.body1
	},
	main: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2)
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	link: { textDecoration: 'none' },
	button: {
		margin: theme.spacing(1)
	}
}))

const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')
}

const Contact = ({ data }) => {
	const classes = useStyles()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	// const [website, setWebsite] = useState('')
	const [message, setMessage] = useState('')
	const [nameLabel, setNameLabel] = useState('Name')
	const [nameError, setNameError] = useState(false)
	const [emailLabel, setEmailLabel] = useState('Email')
	const [emailError, setEmailError] = useState(false)
	const [open, setOpen] = useState(false)

	const handleClose = () => {
		setOpen(false)
	}

	const handleSubmit = e => {
		if (name && email) {
			fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({ 'form-name': 'contact', name, email, message })
			})
				.then(() => {
					setOpen(true)
					setName('')
					setEmail('')
					setMessage('')
				})
				.catch(error => console.log(error))
		} else {
			if (!name) {
				setNameLabel('Name is required')
				setNameError(true)
			}
			if (!email) {
				setEmailLabel('Email is required')
				setEmailError(true)
			}
		}
		e.preventDefault()
	}

	const handleChange = e => {
		if (e.target.name === 'name') {
			setName(e.target.value)
			setNameLabel('Name')
			setNameError(false)
		}
		if (e.target.name === 'email') {
			setEmail(e.target.value)
			setEmailLabel('Email')
			setEmailError(false)
		}
		if (e.target.name === 'message') {
			setMessage(e.target.value)
		}
	}

	return (
		<>
			<Grid container spacing={2} justify='center'>
				<Grid item xs={12}>
					<Typography variant='h4' align='center'>
						Contact
					</Typography>
				</Grid>

				<Grid item xs={12} sm={8}>
					<form
						name='contact'
						data-netlify='true'
						onSubmit={handleSubmit}
						noValidate
					>
						<input type='hidden' name='form-name' value='contact' />
						<TextField
							required
							label={nameLabel}
							error={nameError}
							name='name'
							placeholder='Name'
							className={classes.textField}
							value={name}
							onChange={handleChange}
							margin='normal'
							fullWidth
						/>

						<TextField
							required
							label={emailLabel}
							error={emailError}
							name='email'
							placeholder='Email'
							className={classes.textField}
							value={email}
							onChange={handleChange}
							margin='normal'
							fullWidth
						/>

						<TextField
							multiline
							rows='4'
							label='Message'
							name='message'
							placeholder='Message'
							className={classes.textField}
							value={message}
							onChange={handleChange}
							margin='normal'
							fullWidth
						/>

						<Button
							variant='contained'
							color='primary'
							size='large'
							type='submit'
							fullWidth
							className={classes.button}
						>
							Send
						</Button>
					</form>

					<Dialog
						open={open}
						onClose={handleClose}
						aria-labelledby='alert-dialog-title'
						aria-describedby='alert-dialog-description'
					>
						<DialogContent>
							<DialogContentText id='alert-dialog-description'>
								Thank you, your contact information has been sent.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Link to='/' className={classes.link}>
								<Button onClick={handleClose} color='secondary'>
									Home
								</Button>
							</Link>
							<Button onClick={handleClose} color='secondary'>
								Close
							</Button>
						</DialogActions>
					</Dialog>
				</Grid>
			</Grid>
		</>
	)
}

export default Contact

export const query = graphql`
	query {
		contact: file(name: { eq: "Dana-Porchetta" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 500) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
