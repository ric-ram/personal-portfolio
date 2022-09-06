import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
	Box,
	Container,
	Heading,
	Image,
	Link
} from '@chakra-ui/react'
import {
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoLinkedin
} from 'react-icons/io5'
import {
	LeftThumbnailCard,
	RightThumbnailCard
} from '../components/cards'
import { MainButton, SocialButton } from '../components/button'

import ContactForm from '../components/form'
import Footer from '../components/footer'
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
				<MainButton icon={<ChevronRightIcon />} href='/resume'>
					My Resume
				</MainButton>
			</Section>

			<Section delay={0.1}>
				<Heading as='h3' variant='section-title'>
					Case Studies
				</Heading>
				<LeftThumbnailCard
					thumbnail='/images/thumbnail-placeholder.png'
					id='1'
					title='Project Name'
					position='right'
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
					et massa mi. Aliquam in hendrerit urna.{' '}
					<NextLink href='/projects/1' passHref scroll={false}>
						<Link>
							Read more <ArrowForwardIcon />
						</Link>
					</NextLink>
				</LeftThumbnailCard>
				<RightThumbnailCard
					thumbnail='/images/thumbnail-placeholder.png'
					id='1'
					title='Project Name'
					position='right'
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
					et massa mi. Aliquam in hendrerit urna.{' '}
					<NextLink href='/projects/1' passHref scroll={false}>
						<Link>
							Read more <ArrowForwardIcon />
						</Link>
					</NextLink>
				</RightThumbnailCard>
				<LeftThumbnailCard
					thumbnail='/images/thumbnail-placeholder.png'
					id='1'
					title='Project Name'
					position='right'
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
					et massa mi. Aliquam in hendrerit urna.{' '}
					<NextLink href='/projects/1' passHref scroll={false}>
						<Link>
							Read more <ArrowForwardIcon />
						</Link>
					</NextLink>
				</LeftThumbnailCard>
				<MainButton icon={<ChevronRightIcon />} href='/portfolio'>
					My Portfolio
				</MainButton>
			</Section>

			<Section delay={0.1}>
				<Heading as='h3' variant='section-title'>
					Contact me
				</Heading>
				<Box display='flex' gap='24px' mb={4}>
					<SocialButton
						icon={<IoLogoGithub size={24} />}
						label='Github'
						href=''
					/>
					<SocialButton
						icon={<IoLogoLinkedin size={24} />}
						label='LinkedIn'
						href=''
					/>
					<SocialButton
						icon={<IoLogoInstagram size={24} />}
						label='Instagram'
						href=''
					/>
				</Box>
				<ContactForm />
			</Section>
			<Footer />
		</Container>
	)
}

export default Page
