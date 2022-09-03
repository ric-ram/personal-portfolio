import {
	Box,
	Button,
	Container,
	Heading,
	Image,
	useColorModeValue
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const Page = () => {
	return (
		<Container>
			<Box
				display={{ sm: 'flex' }}
				mt={{ base: 6 }}
				mb={{ base: 4 }}
				align-items='center'
			>
				<Box flexGrow={1}>
					<Heading as='h2' variant='page-title'>
						Ricardo Ramos
					</Heading>
					<p>
						Software Engineer / Business and Integration Architect
						Analyst
					</p>
				</Box>
				<Box flexShrink={0} ml={{ sm: 6 }} align='center'>
					<Image
						borderColor='whiteAlpha.800'
						borderWidth={2}
						borderStyle='solid'
						maxWidth='100px'
						display='inline-box'
						borderRadius='full'
						src='/images/profile-pic.png'
						alt='Profile Image'
					/>
				</Box>
			</Box>

			<Section delay={0.1}>
				<Heading as='h3' variant='section-title'>
					About
				</Heading>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
					et massa mi. Aliquam in hendrerit urna. Pellentesque sit
					amet sapien fringilla, mattis ligula consectetur, ultrices
					mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
					augue. Vestibulum auctor ornare leo, non suscipit magna
					interdum eu.{' '}
				</Paragraph>
				<Box align='right' my={4}>
					<NextLink href='/resume' passHref scroll={false}>
						<Button
							rightIcon={<ChevronRightIcon />}
							colorScheme={useColorModeValue('dayBlue', 'nightPink')}
							color={useColorModeValue('dayBG', 'nightBG')}
						>
							My Resume
						</Button>
					</NextLink>
				</Box>
			</Section>

			<Section delay={0.1}>
				<Heading as='h3' variant='section-title'>
					Case Studies
				</Heading>
			</Section>
		</Container>
	)
}

export default Page
