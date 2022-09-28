import {
	Box,
	Container,
	Grid,
	GridItem,
	Heading,
	Image,
	Link,
	ListItem,
	UnorderedList
} from '@chakra-ui/react'
import { DownloadButton, SocialButton } from '../components/button'
import {
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoLinkedin
} from 'react-icons/io5'
import { ProjectList, WorkHistory } from '../components/work-history'

import { DownloadIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import { TechCard } from '../components/cards'
import styled from '@emotion/styled'

const WorkP = styled.p`
	margin-bottom: 10px;
`

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
					<TechCard>JavaScript, HTML/CSS, Dart</TechCard>
					<TechCard>Python, Java, C/C++, C#, BPEL</TechCard>
					<TechCard>NodeJs, ReactJs, ExpressJS, Flutter</TechCard>
					<TechCard>Oracle, PostgreSQL, MySQL</TechCard>
					<TechCard>Git, Figma, Azure VM, Firebase</TechCard>
					<TechCard>OTRS, OTOBO, JDeveloper</TechCard>
				</Box>
			</Section>

			<Section delay={0.4}>
				<Heading as='h3' variant='section-title'>
					Work History
				</Heading>
				<WorkHistory title='🚧 BUSINESS AND INTEGRATION ARCHITECT ANALYST | ACCENTURE'>
					<WorkP>August 2022 - Present</WorkP>
					<UnorderedList paddingX={4} mb={3}>
						<ListItem lineHeight='1.9em'>
							Implemented a new ticket system, OTOBO, to solve the
							absence of OAuth 2.0 from the old one, OTRS, configuring
							a new environment using Azure VMs and migrating more
							than 20Gb of data.
						</ListItem>
					</UnorderedList>
				</WorkHistory>
				<WorkHistory title='🚧 APPLICATION DEVELOPMENT ASSOCIATE | ACCENTURE'>
					<WorkP>April 2021 - July 2022</WorkP>
					<UnorderedList paddingX={4} mb={3}>
						<ListItem lineHeight='1.9em'>
							Collaborated with 2-3 teams to perform continuous
							maintenance of BSS System using Oracle tools, namely
							Application Integration Architecture (AIA), deployed
							with Oracle&apos;s CRM and BRM.
						</ListItem>
						<ListItem lineHeight='1.9em'>
							Developed and tested an API in collaboration with 2
							teams of engineers responsible for creating and managing
							electronic payslips for a telecommunications company.
						</ListItem>
						<ListItem lineHeight='1.9em'>
							Contributed to developing an API to register information
							of pre-paid telephone customers in a government database
							in an initiative to help fight terrorism.
						</ListItem>
					</UnorderedList>
				</WorkHistory>
			</Section>

			<Section delay={0.7}>
				<Heading as='h3' variant='section-title'>
					Projects & Accomplishments
				</Heading>
				<ProjectList id='nucleus-pomodoro' withLine={true}>
					Built a pomodoro app with project management functionalities
				</ProjectList>
				<ProjectList id='personal-portfolio' withLine={false}>
					Built a minimalist online personal portfolio
				</ProjectList>
			</Section>

			<Section delay={1}>
				<Heading as='h3' variant='section-title'>
					Volunteer Work
				</Heading>
				<WorkHistory title='🤝🏽 VOLUNTEER | BANCO DO BEBÉ'>
					<WorkP>August 2022</WorkP>
					<UnorderedList paddingX={4} mb={3}>
						<ListItem lineHeight='1.9em'>
							Helped raise more than 1600 goods, including diapers,
							baby food and baby bottles, to help supported families
							provide for their babies by distributing flyers at a
							supermarket to raise awareness of the campaign and the
							association&apos;s mission and helping carry the
							collected goods to the designated storage facility.
						</ListItem>
					</UnorderedList>
				</WorkHistory>
			</Section>
		</Container>
	)
}

export default Resume
