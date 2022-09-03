import { Box, Button, useColorModeValue } from '@chakra-ui/react'

import NextLink from 'next/link'

const MainButton = ({ children, icon }) => (
	<Box align='right' my={4}>
		<NextLink href='/resume' passHref scroll={false}>
			<Button
				rightIcon={icon}
				colorScheme={useColorModeValue('dayBlue', 'nightPink')}
				color={useColorModeValue('dayBG', 'nightBG')}
			>
				{children}
			</Button>
		</NextLink>
	</Box>
)

export default MainButton
