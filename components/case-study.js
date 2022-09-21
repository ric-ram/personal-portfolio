import { Badge, Box, Heading, Image, Link } from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export const Title = ({ children }) => (
	<Box>
		<NextLink href='/portfolio' passHref>
			<Link>Portfolio</Link>
		</NextLink>
		<span>
			{' '}
			<ChevronRightIcon />{' '}
		</span>
		<Heading display='inline-block' as='h3' fontSize={20} mb={4}>
			{children}
		</Heading>
	</Box>
)

export const ProjectImage = ({ src, alt, mt = 0 }) => (
	<Image
		borderRadius='lg'
		w='full'
		src={src}
		alt={alt}
		mb={3}
		mt={mt}
	/>
)

export const Meta = ({ children }) => (
	<Badge colorScheme='green' mr={2}>
		{children}
	</Badge>
)
