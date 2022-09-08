import {
	Box,
	Heading,
	Link,
	useColorModeValue
} from '@chakra-ui/react'

import NextLink from 'next/link'

const Line = () => (
	<Box
		as='div'
		bg={useColorModeValue('dayLine', 'nightLine')}
		height='1px'
		mb={4}
	></Box>
)

const WorkHistory = ({ children, title }) => (
	<Box mb={4}>
		<Line />
		<Box
			borderLeft={useColorModeValue(
				'1px solid #54514d',
				'1px solid #6d7593'
			)}
			paddingLeft='2em'
			mb={4}
		>
			<Heading as='h4' variant='work-title'>
				{title}
			</Heading>
			{children}
		</Box>
	</Box>
)

const ProjectList = ({ children, href }) => (
	<Box>
		<Line />
		<NextLink href={`/portfolio/${href}`} passHref scroll={false}>
			<Link variant='project-link'>🏆 {children}</Link>
		</NextLink>
	</Box>
)

module.exports = {
	WorkHistory: WorkHistory,
	ProjectList: ProjectList
}
