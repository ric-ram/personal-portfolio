import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
	global: props => ({
		body: {
			bg: mode('dayBG', 'nightBG')(props),
			color: mode('black', 'greyishBlue.200')(props)
		}
	})
}

const components = {
	Heading: {
		variants: {
			'section-title': {
				fontSize: 26,
				marginTop: 3,
				marginBottom: 4
			},
			'project-title': {
				fontSize: 22,
				fontWeight: 'normal'
			}
		}
	},
	Link: {
		baseStyle: props => ({
			color: mode('linkBlue', 'linkPink')(props),
			textUnderlineOffset: 3
		})
	},
	Menu: {
		baseStyle: props => ({
			list: {
				bg: mode('dayNav', 'nightNav')(props),
				borderColor: mode('black', 'greyishBlue.200')(props)
			}
			// button: {
			// 	borderColor: mode('black', 'greyishBlue.200')(props),
			// 	_hover: {
			// 		bg: mode('black', 'greyishBlue.200')(props)
			// 	}
			// }
		})
	},
	Input: {
		variants: {
			outline: props => ({
				field: {
					bg: mode('dayNav', 'nightNav')(props),
					borderColor: mode(
						'blackAlpha.500',
						'greyishBlue.200'
					)(props),
					_hover: {
						borderColor: mode('black', 'greyishBlue.50')(props)
					},
					_focus: {
						borderColor: mode('linkBlue', 'linkPink')(props),
						boxShadow: mode(
							'0 0 0 1px #3d7aed',
							'0 0 0 1px #ff63c3'
						)(props)
					}
				}
			})
		}
	},
	Textarea: {
		variants: {
			outline: props => ({
				bg: mode('dayNav', 'nightNav')(props),
				borderColor: mode('blackAlpha.500', 'greyishBlue.200')(props),
				_hover: {
					borderColor: mode('black', 'greyishBlue.50')(props)
				},
				_focus: {
					borderColor: mode('linkBlue', 'linkPink')(props),
					boxShadow: mode(
						'0 0 0 1px #3d7aed',
						'0 0 0 1px #ff63c3'
					)(props)
				}
			})
		}
	}
}

const fonts = {
	heading: `'Montserrat', sans-serif`,
	body: `'Montserrat', sans-serif`
}

const colors = {
	grassTeal: '#88ccca',
	greyishBlue: {
		50: '#ebf0ff',
		100: '#cad1e9',
		200: '#a9b3d5',
		300: '#8894c4',
		400: '#6575b2',
		500: '#4c5c99',
		600: '#3b4777',
		700: '#2a3356',
		800: '#181f36',
		900: '#050a17'
	},
	linkPink: '#ff63c3',
	linkBlue: '#3d7aed',
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
	},
	nightText: '#9AA5CE',
	nightBG: '#1A1B26',
	dayBG: '#F0E7DB',
	nightNav: '#101015',
	dayNav: '#F4EDE4'
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
