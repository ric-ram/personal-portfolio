import {
	Box,
	Container,
	Grid,
	GridItem,
	Heading,
	Image,
	Link,
	ListItem,
	UnorderedList,
	useColorModeValue
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
import styled from '@emotion/styled'

const WorkP = styled.p`
	margin-bottom: 10px;
`

const Line = () => (
	<Box
		as='div'
		bg={useColorModeValue('dayLine', 'nightLine')}
		height='1px'
		mb={3}
	></Box>
)

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

			<Section delay={0.4}>
				<Heading as='h3' variant='section-title'>
					Work History
				</Heading>
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
							🚧 BUSINESS AND INTEGRATION ARCHITECT ANALYST |
							ACCENTURE
						</Heading>
						<WorkP>August 2022 - Present</WorkP>
						<WorkP>
							Consultant and developer in an international project for
							telco clients.
						</WorkP>
						<UnorderedList paddingX={4} mb={3}>
							<ListItem lineHeight='1.9em'>
								Responsible for the implementation of a new ticket
								system, OTOBO, its configuration and migration from
								the old system (OTRS)
							</ListItem>
						</UnorderedList>
					</Box>
				</Box>
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
							🚧APPLICATION DEVELOPMENT ASSOCIATE | ACCENTURE
						</Heading>
						<WorkP>April 2021 - July 2022</WorkP>
						<WorkP>
							Consultant and developer in an international project for
							telco clients.
						</WorkP>
						<WorkP>
							Maintenance of BSS systems using Oracle tools, namely
							Application Integration Architecture (AIA), deployed
							together with Oracle&apos;s CRM and Oracle Billing and
							Revenue Management.
						</WorkP>
						<UnorderedList paddingX={4} mb={3}>
							<ListItem lineHeight='1.9em'>
								Solve problems of communication between both CRM and
								BRM.
							</ListItem>
							<ListItem lineHeight='1.9em'>
								Develop housekeeping scripts for SQL Databases
							</ListItem>
							<ListItem lineHeight='1.9em'>
								Update existing API&apos;s in order to solve occurring
								problems.
							</ListItem>
						</UnorderedList>
						<WorkP>
							Development and testing of new API&apos;s for different
							business requirements using BPEL and Oracle JDeveloper
							(10 & 11).
						</WorkP>
						<UnorderedList paddingX={4} mb={3}>
							<ListItem lineHeight='1.9em'>
								Develop an API responsible for the creation of the
								different types of electronic payslips (e-factura) for
								a telecommunication company.
							</ListItem>
							<ListItem lineHeight='1.9em'>
								Develop an API to send pre-paid customers information
								to the government database to help fight terrorism.
							</ListItem>
						</UnorderedList>
					</Box>
				</Box>
			</Section>

			<Section delay={0.7}>
				<Heading as='h3' variant='section-title'>
					Projects & Accomplishments
				</Heading>
				<Line />
				<NextLink href='/projects/1' passHref scroll={false}>
					<Link variant='project-link'>
						🏆 Built a pomodoro app with project management
						functionalities
					</Link>
				</NextLink>
			</Section>

			<Section delay={1}>
				<Heading as='h3' variant='section-title'>
					Volunteer Work
				</Heading>
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
						🤝🏽 VOLUNTEER | BANCO DO BEBÉ
					</Heading>
					<WorkP>August 2022</WorkP>
					<WorkP>
						Helped raising necessary baby related goods to help the
						families supported by this organization.
					</WorkP>
					<UnorderedList paddingX={4} mb={3}>
						<ListItem lineHeight='1.9em'>
							Distribute flyers in front of a supermarket to raise
							awareness of the campaign needs and of the organization
							mission.
						</ListItem>
						<ListItem lineHeight='1.9em'>
							Helped carry the collected goods and store them in the
							designated warehouse.
						</ListItem>
					</UnorderedList>
				</Box>
			</Section>
		</Container>
	)
}

export default Resume
