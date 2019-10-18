import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
// eslint-disable-next-line
import { cyan, grey, indigo, lightBlue, pink } from '@material-ui/core/colors'

let MyTheme = createMuiTheme({
	palette: {
		primary: {
			main: cyan[500]
		},
		secondary: {
			main: pink[500]
		},
		text: {
			primary: grey[500],
			secondary: grey[600],
			disabled: grey[400]
		}
	},
	// type: 'dark', //this is not working
	typography: {
		// Tell Material-UI what's the font-size on the html element is.
		fontSize: 14
	}
})

MyTheme = responsiveFontSizes(MyTheme)

export default MyTheme
