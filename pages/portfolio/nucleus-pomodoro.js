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
	<Layout title='Nucleus Pomodoro'>
		<Container mt={4}>
			<Title>
				Nucleus Pomodoro <Badge>2022</Badge>
			</Title>
			<ProjectImage
				src='https://via.placeholder.com/1920x1080.png?text=Placeholder+1'
				alt='placeholder'
			/>
			<P>
				A Pomodoro app that offers its users project management
				capabilities, such as project creation and task creation, and
				full customisation of the timer settings.
			</P>
			<List ml={4} my={4} spacing={2}>
				<ListItem>
					<Meta>Role</Meta>
					<span>UI Design / Developer</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>NodeJS, ReactJs, ExpressJS</span>
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
					The idea came to me when I was looking for a Pomodoro app.
					From my research, I found that most apps had only the timer
					and task placeholder. The timer customisation was always the
					same, offering little to no customisation options, and there
					was no way to manage all the tasks I had to do.{' '}
				</P>
				<P>
					Later, I came across{' '}
					<Link href='https://nesto.cc' isExternal>
						nesto.cc
					</Link>
					, which I often used. However, most features were or still
					are in development or offered only to paid users. So, I took
					it as inspiration and developed my own Pomodoro app with the
					features I believed would increase my productivity and that
					of others.{' '}
				</P>
				<P>
					I started with the design of the app. I chose a simple
					design. However, I didn&apos;t want a typical digital clock.
					For that reason, I decided to add a circular progress bar
					around the digital clock to give it another visual effect.
				</P>{' '}
				<P>
					Since it was my second time using{' '}
					<Link href='https://www.figma.com/' isExternal>
						Figma
					</Link>
					, I had many challenges, especially when designing the menus
					and their behaviours, as well as how to prototype my designs
					and make them closest to my idea.
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
					I chose ReactJs for my frontend as I&apos;ve been learning
					it for a few months now and wanted to challenge myself by
					developing a reasonable-size project from scratch.
				</P>
				<P>
					One of the challenges I faced was creating the circular
					progress bar. Thankfully, I came across a video on YouTube
					by{' '}
					<Link
						href='https://www.youtube.com/c/SiphiwoJulayi'
						isExternal
					>
						Siphiwo Julayi
					</Link>{' '}
					that introduced me to a library that would help me develop
					and customise it.
				</P>{' '}
				<P>
					In the backend, I used NodeJs and ExpressJS, as I already
					had some experience using them. There were fewer challenges.
					However, I still struggled to return all items after the
					home page finished loading for the first time after the user
					login. After I studied and researched more about promises, I
					managed to solve this issue and get the results I wanted.
				</P>{' '}
				<P>
					I thought about developing the authentication process
					myself, but during my research, for this project, I came
					across{' '}
					<Link href='https://auth0.com/' isExternal>
						Auth0
					</Link>
					. So, out of curiosity and since many big companies use it,
					I decided to use it. I saw it as an opportunity to learn
					another tool used in the industry and, at the same time,
					challenge myself by trying to implement something I&apos;ve
					never seen before this very project.
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
