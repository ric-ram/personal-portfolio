import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
	Box,
	Container,
	Heading,
	Image,
	Link
} from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import {
	LeftThumbnailCard,
	RightThumbnailCard
} from '../components/cards'
import { MainButton, SocialButton } from '../components/button'

import ContactForm from '../components/form'
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
				alignItems={{ base: 'center' }}
			>
				<Box flexGrow={1}>
					<Heading as='h2' variant='page-title'>
						Ricardo Ramos
					</Heading>
					<p fontSize={{ sm: 16, base: 14 }}>
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
					I&apos;m an Electrical Engineer on paper. However, my
					passion is in building modern solutions to real-life
					problems using code. When not online, I can be found working
					towards improving myself, be it behind a book in search of
					new knowledge or engaged in some sporting activity pushing
					my limits. Currently, I&apos;m working at{' '}
					<Link href='https://www.accenture.com/pt-pt' isExternal>
						Accenture Portugal
					</Link>{' '}
					while taking advantage of my free time to improve my skills
					by enrolling in various courses and working on personal
					projects.{' '}
				</Paragraph>
				<MainButton
					icon={<ChevronRightIcon />}
					href='/resume'
					align='right'
				>
					My Resume
				</MainButton>
			</Section>

			<Section delay={0.4}>
				<Heading as='h3' variant='section-title'>
					Case Studies
				</Heading>
				<LeftThumbnailCard
					thumbnail='/images/pomodoro-cover.jpg'
					id='nucleus-pomodoro'
					title='Nucleus Pomodoro'
				>
					A Pomodoro app that offers its users project management
					capabilities, such as project creation and task creation,
					and full customisation of the timer settings. <br></br>
					<NextLink
						href='/portfolio/template'
						passHref
						scroll={false}
					>
						<Link>
							Read more <ArrowForwardIcon />
						</Link>
					</NextLink>
				</LeftThumbnailCard>
				<RightThumbnailCard
					thumbnail='/images/thumbnail-placeholder.png'
					id='personal-portfolio'
					title='Personal Portfolio'
				>
					A simple and clean personal portfolio developed to share my
					journey as a developer and my professional background.
					<br></br>
					<NextLink
						href='/portfolio/personal-portfolio'
						passHref
						scroll={false}
					>
						<Link>
							Read more <ArrowForwardIcon />
						</Link>
					</NextLink>
				</RightThumbnailCard>
				{/* <LeftThumbnailCard
					thumbnail='/images/thumbnail-placeholder.png'
					id='1'
					title='Project Name'
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
					et massa mi. Aliquam in hendrerit urna.{' '}
					<NextLink href='/projects/1' passHref scroll={false}>
						<Link>
							Read more <ArrowForwardIcon />
						</Link>
					</NextLink>
				</LeftThumbnailCard> */}
				<MainButton
					icon={<ChevronRightIcon />}
					href='/portfolio'
					align='right'
				>
					My Portfolio
				</MainButton>
			</Section>

			<Section delay={0.7}>
				<Heading as='h3' variant='section-title'>
					Contact me
				</Heading>
				<Box display='flex' gap='24px' mb={4}>
					<SocialButton
						icon={<IoLogoGithub size={24} />}
						label='Github'
						href='https://github.com/ric-ram'
					/>
					<SocialButton
						icon={<IoLogoLinkedin size={24} />}
						label='LinkedIn'
						href='https://www.linkedin.com/in/rfframos/'
					/>
					{/* <SocialButton
						icon={<IoLogoInstagram size={24} />}
						label='Instagram'
						href=''
					/> */}
				</Box>
				<ContactForm />
			</Section>
		</Container>
	)
}

export default Page
