import {
	Box,
	Container,
	Grid,
	GridItem,
	Heading,
	Image,
	Link
} from '@chakra-ui/react'
import { DownloadButton, SocialButton } from '../components/button'
import {
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoLinkedin
} from 'react-icons/io5'

import { DownloadIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import { TechCard } from '../components/cards'

const Resume = () => {
	return (
		<Container>
			<Grid
				templateRows='0.8fr 0.2fr'
				templateColumns='0.4fr 1fr'
				alignItems='center'
				gap={3}
				mt={{ base: 6 }}
			>
				<GridItem rowStart={1} rowSpan={1} colSpan={1}>
					<Image
						borderColor='whiteAlpha.800'
						borderWidth={2}
						borderStyle='solid'
						maxWidth='120px'
						display='inline-box'
						borderRadius='full'
						src='/images/profile-pic.png'
						alt='Profile Image'
					/>
				</GridItem>
				<GridItem rowStart={1} rowSpan={1} colStart={2} colSpan={1}>
					<Heading as='h2' variant='page-title' mb={3}>
						Ricardo Ramos
					</Heading>
					<Box display='flex' flexDirection='column' gap={2}>
						<p>
							Software Engineer, Business and Integration Architect
							Analyst at{' '}
							<NextLink href='/projects/1' passHref scroll={false}>
								<Link>Accenture Portugal</Link>
							</NextLink>
							.
						</p>
						<p>📧 rf.ramos95@gmail.com</p>
					</Box>
				</GridItem>
				<GridItem
					rowStart={2}
					rowSpan={1}
					colStart={2}
					colSpan={1}
					mb={4}
				>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='space-between'
						gap={3}
					>
						<Box mt={2} display='flex' gap={{ sm: 3, md: 4, lg: 5 }}>
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
						<DownloadButton
							icon={<DownloadIcon />}
							href=''
							size={{ sm: 'sm', md: 'md' }}
						>
							Download Resume
						</DownloadButton>
					</Box>
				</GridItem>
			</Grid>

			<Section delay={0.1}>
				<Heading as='h3' variant='section-title'>
					Tech Stack
				</Heading>
				<Box display='flex' flexWrap='wrap' gap={4} fontSize='0.9em'>
					<TechCard>JavaScript, HTML, CSS, Dart, Terraform</TechCard>
					<TechCard>Python, Java, C/C++, C#, BPEL</TechCard>
					<TechCard>NodeJs, ReactJs, ExpressJS, Flutter</TechCard>
					<TechCard>Oracle, PostgreSQL, MySQL</TechCard>
					<TechCard>Git, Figma, Azure VM&apos;s, Firebase</TechCard>
				</Box>
			</Section>
		</Container>
	)
}

export default Resume
