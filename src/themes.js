import { createMuiTheme } from '@material-ui/core/styles';

const Theme1 = createMuiTheme({
	palette: {
		primary: { main: '#659655'},
		secondary: { main: '#08415C'},
	}
})

const Theme2 = createMuiTheme({
	palette: {
		type: 'dark',
		primary: { main: '#D8BFD8'},
		secondary: { main: '#40E0D0'},
	}
})

export {Theme1, Theme2}
