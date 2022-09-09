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
			<NextLink href={`/projects/${id}`} passHref scroll={false}>
				<LinkBox cursor='pointer'>
					<Grid
						templateColumns='repeat(6, 1fr)'
						alignItems='center'
						gap={4}
					>
						<GridItem colStart={1} colEnd={3}>
							<Image
								src={thumbnail}
								alt={title}
								loading='lazy'
								borderLeftRadius='10px'
								w='100%'
							/>
						</GridItem>
						<GridItem
							colStart={3}
							colEnd={7}
							rowSpan={1}
							rowStart={1}
							mr={7}
						>
							<LinkOverlay href={`/projects/${id}`} target='_blank'>
								<Heading as='h4' variant='project-title' mb={2}>
									{title}
								</Heading>
							</LinkOverlay>
							<Text fontSize={{ md: 16, sm: 14 }}>{children}</Text>
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
			<NextLink href={`/projects/${id}`} passHref scroll={false}>
				<LinkBox cursor='pointer'>
					<Grid
						templateColumns='repeat(6, 1fr)'
						alignItems='center'
						gap={4}
					>
						<GridItem colStart={5} colEnd={7}>
							<Image
								src={thumbnail}
								alt={title}
								loading='lazy'
								borderRightRadius='10px'
								w='100%'
							/>
						</GridItem>
						<GridItem
							colStart={1}
							colEnd={5}
							rowSpan={1}
							rowStart={1}
							ml={7}
						>
							<LinkOverlay href={`/projects/${id}`} target='_blank'>
								<Heading as='h4' variant='project-title' mb={2}>
									{title}
								</Heading>
							</LinkOverlay>
							<Text fontSize={{ md: 16, sm: 14 }}>{children}</Text>
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
		padding={{ md: '0.5em 1em', sm: '0.2em 0.5em' }}
		alignItems='center'
		fontSize='0.9em'
	>
		{children}
	</Box>
)

export const VerticalCard = ({ children, id, title, thumbnail }) => {
	return (
		<Box w='100%' mb={4} borderRadius='10px' textAlign='center'>
			<NextLink href={`/projects/${id}`} passHref scroll={false}>
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
						href={`/projects/${id}`}
						target='_blank'
						mb={3}
					>
						<Heading as='h4' variant='project-title' mb={2}>
							{title}
						</Heading>
					</LinkOverlay>
					<Text fontSize={{ md: 16, sm: 14 }}>{children}</Text>
					<LinksGrid hrefWeb='' hrefGit='' />
				</LinkBox>
			</NextLink>
		</Box>
	)
}
