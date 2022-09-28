import {
	Badge,
	Container,
	Heading,
	Link,
	List,
	ListItem
} from '@chakra-ui/react'
import {
	Meta,
	ProjectImage,
	Title
} from '../../components/case-study'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import Section from '../../components/section'

const Project = () => (
	<Layout title='Personal Portfolio'>
		<Container mt={4}>
			<Title>
				Personal Portfolio <Badge>2022</Badge>
			</Title>
			<ProjectImage
				src='https://via.placeholder.com/1920x1080.png?text=Placeholder+1'
				alt='placeholder'
			/>
			<P>
				A simple and clean personal portfolio developed to share my
				journey as a developer by showcasing my most recent completed
				and ongoing projects and my professional background. It also
				contains a contact form in case any interested party wants to
				contact me.
			</P>
			<List ml={4} my={4} spacing={2}>
				<ListItem>
					<Meta>Role</Meta>
					<span>UI Design / Developer</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span> ReactJs, NextJS</span>
				</ListItem>
				<ListItem>
					<Meta>Website</Meta>
					<Link href='https://www.nucleuspomodoro.com/' isExternal>
						nucleuspomodoro.com/ <ExternalLinkIcon mx='2px' />
					</Link>
				</ListItem>
				<ListItem>
					<Meta>Repo</Meta>
					<Link
						href='https://github.com/MrRicram/nucleus-pomodoro'
						isExternal
					>
						github.com/MrRicram/nucleus-pomodoro{' '}
						<ExternalLinkIcon mx='2px' />
					</Link>
				</ListItem>
			</List>

			<Section>
				<Heading as='h3' variant='section-title'>
					Concept
				</Heading>
				<P>
					As a young developer aiming to evolve his skills and follow
					his ambitions, I found that a personal portfolio would be a
					great tool to show my work and abilities.
				</P>
				<P>
					With that in mind, I started my research for inspiration.
					While searching for designs that appealed to my taste and
					character, I came across some beautiful websites and
					portfolios; however, they were too fancy and didn&apos;t
					resonate with me.
				</P>
				<P>
					After an extensive search, I found the portfolio of a
					Japanese developer called{' '}
					<Link href='https://www.craftz.dog/' isExternal>
						Takuya Matsuyama
					</Link>
					. His website is simple, clean and straight to the point,
					without super fancy animations and backgrounds.
				</P>
				<P>
					With his design in mind, I started to put together the
					wireframes and designs in{' '}
					<Link href='https://www.figma.com/' isExternal>
						Figma
					</Link>
					. For the colour palette, I decided to go with my vs code
					theme colours, Tokyo Night, both for the light and dark
					mode.
				</P>
				<ProjectImage
					src='https://via.placeholder.com/1920x1080.png?text=Placeholder+2'
					alt='placeholder'
					mt={3}
				/>
			</Section>

			<Section>
				<Heading as='h3' variant='section-title'>
					Development
				</Heading>
				<P>
					With the website prototype finished, all that is left is to
					code it. When browsing Matsuyama&apos;s website, I found out
					he has a{' '}
					<Link href='https://www.youtube.com/c/devaslife' isExternal>
						YouTube Channel
					</Link>{' '}
					with a video on how he created his portfolio. Since he did
					it using NextJS and{' '}
					<Link href='https://chakra-ui.com/' isExternal>
						Chakra UI
					</Link>{' '}
					library, which I had no experience with, I decided to follow
					his video as an opportunity to learn something new and
					challenge myself to implement my desired changes.
				</P>
				<P>
					It was challenging! In the video, he does not explain what
					he is doing or why he is doing it, making it more fun as I
					had to research more while trying to understand how to
					implement all my changes.
				</P>
				<P>
					After I overcame all the challenges along this journey and
					completed the project, I can say that I&apos;m pleased with
					the result. Of course, I am perfectly aware that Ill
					probably change it or redesign it in a few years, but as my
					first online portfolio, I believe it shows who I am and what
					I aspire to be.
				</P>
				<P>
					I can&apos;t leave this description without thanking
					Matsuyama for the inspiration and all the helpful content he
					keeps on creating.
				</P>
				<ProjectImage
					src='https://via.placeholder.com/1920x1080.png?text=Placeholder+3'
					alt='placeholder'
					mt={3}
				/>
			</Section>
		</Container>
	</Layout>
)

export default Project
