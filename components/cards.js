import {
	Box,
	Grid,
	GridItem,
	Heading,
	Image,
	LinkBox,
	LinkOverlay,
	Text,
	useColorModeValue
} from '@chakra-ui/react'

import NextLink from 'next/link'

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
