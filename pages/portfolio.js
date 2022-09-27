import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'

import Section from '../components/section'
import { VerticalCard } from '../components/cards'

const Portfolio = () => {
	return (
		<Container>
			<Box mt={6}>
				<Section delay={0.1}>
					<Heading as='h3' variant='section-title'>
						Case Studies
					</Heading>
					<SimpleGrid columns={[1, 1, 2]} gap={6} mt={6}>
						<Section>
							<VerticalCard
								thumbnail='/images/thumbnail-placeholder.png'
								id='nucleus-pomodoro'
								title='Nucleus Pomodoro'
								web='https://www.nucleuspomodoro.com/'
								git='https://github.com/MrRicram/nucleus-pomodoro'
							>
								A Pomodoro app that offers its users project management
								capabilities and full customisation of the timer
								settings.
							</VerticalCard>
						</Section>
						<Section>
							<VerticalCard
								thumbnail='/images/thumbnail-placeholder.png'
								id='1'
								title='Project Name'
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Ut et massa mi.
							</VerticalCard>
						</Section>
						<Section>
							<VerticalCard
								thumbnail='/images/thumbnail-placeholder.png'
								id='1'
								title='Project Name'
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Ut et massa mi.
							</VerticalCard>
						</Section>
						<Section>
							<VerticalCard
								thumbnail='/images/thumbnail-placeholder.png'
								id='1'
								title='Project Name'
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Ut et massa mi.
							</VerticalCard>
						</Section>
						<Section>
							<VerticalCard
								thumbnail='/images/thumbnail-placeholder.png'
								id='1'
								title='Project Name'
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Ut et massa mi.
							</VerticalCard>
						</Section>
					</SimpleGrid>
				</Section>
			</Box>
		</Container>
	)
}

export default Portfolio
