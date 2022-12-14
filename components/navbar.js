import {
	Box,
	Container,
	Flex,
	Heading,
	IconButton,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	useColorModeValue
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'
import NextLink from 'next/link'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children }) => {
	const active = path === href
	const inactiveColor = useColorModeValue('black', 'greyishBlue')
	const activeColor = useColorModeValue('dayNav', 'nightNav')
	const activeBg = useColorModeValue('dayBlue.500', 'nightPink.200')

	return (
		<NextLink href={href}>
			<Link
				p={2}
				bg={active ? activeBg : undefined}
				color={active ? activeColor : inactiveColor}
				target={target}
			>
				{children}
			</Link>
		</NextLink>
	)
}

const Navbar = props => {
	const { path } = props

	return (
		<Box
			position='fixed'
			as='nav'
			w='100%'
			bg={useColorModeValue('dayNav', 'nightNav')}
			style={{ backdropFilter: 'blur(10px)' }}
			zIndex={2}
			{...props}
		>
			<Container
				display='flex'
				p={2}
				maxW='container.md'
				wrap='wrap'
				align='center'
				justify='center'
			>
				<Flex align='center' mr={5}>
					<Heading as='h1' size='lg' letterSpacing={'tighter'}>
						<Logo />
					</Heading>
				</Flex>

				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					alignItems='center'
					flexGrow={1}
					mt={{ base: 4, nmd: 0 }}
				>
					<LinkItem href='/resume' path={path}>
						Resume
					</LinkItem>
					<LinkItem href='/portfolio' path={path}>
						Portfolio
					</LinkItem>
				</Stack>

				<Box flex={1} align='right'>
					<ThemeToggleButton />
					<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant='outline'
								aria-label='Options'
							/>
							<MenuList>
								<NextLink href='/' passHref>
									<MenuItem as={Link}>Home</MenuItem>
								</NextLink>
								<NextLink href='/resume' passHref>
									<MenuItem as={Link}>Resume</MenuItem>
								</NextLink>
								<NextLink href='/portfolio' passHref>
									<MenuItem as={Link}>Portfolio</MenuItem>
								</NextLink>
							</MenuList>
						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default Navbar
