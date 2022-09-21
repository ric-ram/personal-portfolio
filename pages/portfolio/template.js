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
	<Layout title='template'>
		<Container mt={4}>
			<Title>
				Template <Badge>2022</Badge>
			</Title>
			<ProjectImage
				src='https://via.placeholder.com/1920x1080.png?text=Placeholder+1'
				alt='placeholder'
			/>
			<P>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
				massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
				sapien fringilla, mattis ligula consectetur, ultrices mauris.
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
					et massa mi. Aliquam in hendrerit urna. Pellentesque sit
					amet sapien fringilla, mattis ligula consectetur, ultrices
					mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
					augue. Vestibulum auctor ornare leo, non suscipit magna
					interdum eu. Curabitur pellentesque nibh nibh, at maximus
					ante fermentum sit amet. Pellentesque commodo lacus at
					sodales sodales. Quisque sagittis orci ut diam condimentum,
					vel euismod erat placerat. In iaculis arcu eros, eget tempus
					orci facilisis id.
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
					et massa mi. Aliquam in hendrerit urna. Pellentesque sit
					amet sapien fringilla, mattis ligula consectetur, ultrices
					mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
					augue. Vestibulum auctor ornare leo, non suscipit magna
					interdum eu. Curabitur pellentesque nibh nibh, at maximus
					ante fermentum sit amet. Pellentesque commodo lacus at
					sodales sodales. Quisque sagittis orci ut diam condimentum,
					vel euismod erat placerat. In iaculis arcu eros, eget tempus
					orci facilisis id.
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
