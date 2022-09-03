import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
	global: props => ({
		body: {
			bg: mode('#F0E7DB', '#1A1B26')(props)
		}
	})
}

const components = {
	Heading: {
		variants: {
			'section-title': {
				fontSize: 20,
				textUnderlineOffset: 6,
				textDecorationColor: '#525252',
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4
			}
		}
	},
	Link: {
		baseStyle: props => ({
			color: mode('#3d7aed', '#ff63c3')(props),
			textUnderlineOffset: 3
		})
	}
}

const fonts = {
	heading: "'Montserrat'"
}

const colors = {
	grassTeal: '#88ccca',
	greyishBlue: '#9AA5CE',
	nightPink: {
		50: '#ffe4ea',
		100: '#fdb6c3',
		200: '#f8879c',
		300: '#f45774',
		400: '#f02a4d',
		500: '#d71534',
		600: '#a80d27',
		700: '#78071c',
		800: '#490210',
		900: '#1e0005'
	},
	dayBlue: {
		50: '#e0f7ff',
		100: '#b9e0f8',
		200: '#8fccf0',
		300: '#65b8e9',
		400: '#3da3e0',
		500: '#278ac8',
		600: '#1b6b9c',
		700: '#0f4d70',
		800: '#022e45',
		900: '#00101b'
	}
}

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false
}

const theme = extendTheme({
	config,
	styles,
	components,
	fonts,
	colors
})

export default theme