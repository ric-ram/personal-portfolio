import {
	Box,
	Button,
	IconButton,
	Link,
	useColorModeValue
} from '@chakra-ui/react'

import NextLink from 'next/link'

const MainButton = ({ children, icon, href }) => (
	<Box align='right' my={4}>
		<NextLink href={href} passHref scroll={false}>
			<Button
				rightIcon={icon}
				colorScheme={useColorModeValue('dayBlue', 'nightPink')}
				color={useColorModeValue('dayBG', 'nightBG')}
			>
				{children}
			</Button>
		</NextLink>
	</Box>
)

const DownloadButton = ({ children, icon, href, size }) => (
	<Box align='right'>
		<NextLink href={href} passHref scroll={false}>
			<Button
				rightIcon={icon}
				colorScheme={useColorModeValue('dayBlue', 'nightPink')}
				color={useColorModeValue('dayBG', 'nightBG')}
				size={size}
			>
				{children}
			</Button>
		</NextLink>
	</Box>
)

const SocialButton = ({ label, icon, href }) => (
	<Link href={href} target='_blank'>
		<IconButton
			variant='link'
			color={useColorModeValue('black', 'greyishBlue.200')}
			_hover={{ color: useColorModeValue('linkBlue', 'linkPink') }}
			aria-label={label}
			size='xs'
			justify-content='center'
			icon={icon}
		/>
	</Link>
)

module.exports = {
	MainButton: MainButton,
	SocialButton: SocialButton,
	DownloadButton: DownloadButton
}
