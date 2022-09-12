import {
	Box,
	Container,
	Divider,
	Heading,
	Text
} from '@chakra-ui/react'

import { MainButton } from '../components/button'

const NotFound = () => {
	return (
		<Container>
			<Box
				my={6}
				display='flex'
				gap={3}
				alignItems='center'
				justifyContent='center'
			>
				<Heading as='h1'>404</Heading>
				<Divider orientation='vertical' height='40px' />
				<Text>The page you&apos;re looking for cannot be found</Text>
			</Box>

			<MainButton align='center' href='/'>
				Return to Home
			</MainButton>
		</Container>
	)
}

export default NotFound
