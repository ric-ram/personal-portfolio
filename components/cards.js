import {
	Box,
	Divider,
	Grid,
	GridItem,
	Heading,
	Image,
	LinkBox,
	LinkOverlay,
	Text,
	useColorModeValue
} from '@chakra-ui/react'

import { AiOutlineGlobal } from 'react-icons/ai'
import { IoLogoGithub } from 'react-icons/io5'
import NextLink from 'next/link'
import { SocialButton } from '../components/button'

//import Image from 'next/image'

export const LeftThumbnailCard = ({
	children,
	id,
	title,
	thumbnail
}) => {
	return (
		<Box
			w='100%'
			mb={4}
			borderRadius='10px'
			backgroundColor={useColorModeValue('dayNav', 'nightNav')}
		>
			<NextLink href={`/portfolio/${id}`} passHref scroll={false}>
				<LinkBox cursor='pointer'>
					<Grid
						templateColumns='repeat(6, 1fr)'
						alignItems='center'
						gap={4}
					>
						<GridItem colStart={1} colEnd={3} w='100%' h='100%'>
							<Image
								src={thumbnail}
								alt={title}
								loading='lazy'
								borderLeftRadius='10px'
								w='100%'
								objectFit='cover'
							/>
						</GridItem>
						<GridItem
							colStart={3}
							colEnd={7}
							rowSpan={1}
							rowStart={1}
							mr={{ md: 7, base: 4 }}
							mt={2}
							mb={2}
						>
							<LinkOverlay href={`/portfolio/${id}`} target='_blank'>
								<Heading as='h4' variant='project-title' mb={2}>
									{title}
								</Heading>
							</LinkOverlay>
							<Text fontSize={{ md: 16, sm: 14, base: 12 }}>
								{children}
							</Text>
						</GridItem>
					</Grid>
				</LinkBox>
			</NextLink>
		</Box>
	)
}

export const RightThumbnailCard = ({
	children,
	id,
	title,
	thumbnail
}) => {
	return (
		<Box
			w='100%'
			mb={4}
			borderRadius='10px'
			backgroundColor={useColorModeValue('dayNav', 'nightNav')}
		>
			<NextLink href={`/portfolio/${id}`} passHref scroll={false}>
				<LinkBox cursor='pointer'>
					<Grid
						templateColumns='repeat(6, 1fr)'
						alignItems='center'
						gap={4}
					>
						<GridItem colStart={5} colEnd={7} w='100%' h='100%'>
							<Image
								src={thumbnail}
								alt={title}
								loading='lazy'
								borderRightRadius='10px'
								w='100%'
								objectFit='cover'
							/>
						</GridItem>
						<GridItem
							colStart={1}
							colEnd={5}
							rowSpan={1}
							rowStart={1}
							ml={{ md: 7, base: 4 }}
							mt={2}
							mb={2}
						>
							<LinkOverlay href={`/portfolio/${id}`} target='_blank'>
								<Heading as='h4' variant='project-title' mb={2}>
									{title}
								</Heading>
							</LinkOverlay>
							<Text fontSize={{ md: 16, sm: 14, base: 12 }}>
								{children}
							</Text>
						</GridItem>
					</Grid>
				</LinkBox>
			</NextLink>
		</Box>
	)
}

const LinksGrid = ({ hrefWeb, hrefGit }) => {
	return (
		<Box
			display='flex'
			gap={6}
			height='35px'
			justifyContent='center'
			mt={4}
		>
			<SocialButton
				icon={<AiOutlineGlobal size={35} />}
				label='website'
				href={hrefWeb}
			/>
			<Divider
				height='35px'
				orientation='vertical'
				borderColor={useColorModeValue('black', 'greyishBlue')}
			/>
			<SocialButton
				icon={<IoLogoGithub size={35} />}
				label='github'
				href={hrefGit}
			/>
		</Box>
	)
}

export const TechCard = ({ children }) => (
	<Box
		border={useColorModeValue(
			'1px solid #000000',
			'1px solid #a9b3d5'
		)}
		borderRadius='5px'
		padding={{ sm: '0.4em 0.8em', base: '0.2em 0.5em' }}
		alignItems='center'
		fontSize='0.9em'
	>
		{children}
	</Box>
)

export const VerticalCard = ({
	children,
	id,
	title,
	thumbnail,
	web,
	git
}) => {
	return (
		<Box w='100%' mb={4} borderRadius='10px' textAlign='center'>
			<NextLink href={`/portfolio/${id}`} passHref scroll={false}>
				<LinkBox cursor='pointer'>
					<Image
						src={thumbnail}
						alt={title}
						loading='lazy'
						borderRadius='15px'
						w='100%'
						mb={3}
					/>
					<LinkOverlay
						href={`/portfolio/${id}`}
						target='_blank'
						mb={3}
					>
						<Heading as='h4' variant='project-title' mb={2}>
							{title}
						</Heading>
					</LinkOverlay>
					<Text fontSize={{ md: 16, sm: 14 }}>{children}</Text>
					<LinksGrid hrefWeb={web} hrefGit={git} />
				</LinkBox>
			</NextLink>
		</Box>
	)
}
