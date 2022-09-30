import {
	Box,
	Button,
	IconButton,
	Link,
	useColorModeValue
} from '@chakra-ui/react'

import NextLink from 'next/link'

const MainButton = ({ children, icon, href, align }) => (
	<Box align={align} my={4}>
		<NextLink href={href} passHref>
			<Button
				rightIcon={icon}
				colorScheme={useColorModeValue('dayBlue', 'nightPink')}
				color={useColorModeValue('dayBG', 'nightBG')}
				fontSize={{ sm: 16, base: 14 }}
			>
				{children}
			</Button>
		</NextLink>
	</Box>
)

const SubmitButton = ({ children, icon, align }) => (
	<Box align={align} my={4}>
		<Button
			rightIcon={icon}
			colorScheme={useColorModeValue('dayBlue', 'nightPink')}
			color={useColorModeValue('dayBG', 'nightBG')}
			type='submit'
			fontSize={{ sm: 16, base: 14 }}
		>
			{children}
		</Button>
	</Box>
)

const ModalButton = ({ children, align, onClick }) => (
	<Box align={align} my={4}>
		<Button
			colorScheme={useColorModeValue('dayBlue', 'nightPink')}
			color={useColorModeValue('dayBG', 'nightBG')}
			onClick={onClick}
			fontSize={{ sm: 16, base: 14 }}
		>
			{children}
		</Button>
	</Box>
)

const DownloadButton = ({ children, icon, href, size }) => (
	<Box align='right'>
		<NextLink href={href} passHref>
			<a target='_blank'>
				<Button
					rightIcon={icon}
					colorScheme={useColorModeValue('dayBlue', 'nightPink')}
					color={useColorModeValue('dayBG', 'nightBG')}
					size={size}
					target='_blank'
					fontSize={{ sm: 16, base: 14 }}
					padding={{ sm: 3, base: 1 }}
				>
					{children}
				</Button>
			</a>
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
	DownloadButton: DownloadButton,
	SubmitButton: SubmitButton,
	ModalButton: ModalButton
}
