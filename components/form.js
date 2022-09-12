import {
	Box,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Textarea
} from '@chakra-ui/react'

import { MainButton } from './button'
import { RiSendPlaneFill } from 'react-icons/ri'

const ContactForm = () => (
	<form onSubmit='' noValidate>
		<Box display='flex' flexDirection='column' gap={3}>
			<Box
				display={{ md: 'grid', sm: 'flex' }}
				flexDirection={{ sm: 'column' }}
				gridTemplateColumns={{ md: 'repeat(6, 1fr)' }}
				gap={{ md: '20px', sm: '0.75rem' }}
			>
				<FormControl
					isRequired
					gridColumnStart={{ md: '1' }}
					gridColumnEnd={{ md: '3' }}
				>
					<FormLabel htmlFor='name'>Name</FormLabel>
					<Input id='name' type='text' placeholder='Name' />
				</FormControl>
				<FormControl
					isRequired
					gridColumnStart={{ md: '3' }}
					gridColumnEnd={{ md: '7' }}
				>
					<FormLabel htmlFor='email'>Email</FormLabel>
					<Input id='email' type='email' placeholder='Email' />
				</FormControl>
			</Box>
			<FormControl isRequired>
				<FormLabel htmlFor='subject'>Subject</FormLabel>
				<Input id='subject' type='text' placeholder='Subject' />
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Message</FormLabel>
				<Textarea placeholder='Message' resize='none' />
			</FormControl>
		</Box>
		<MainButton icon={<RiSendPlaneFill />} href='' align='right'>
			Send
		</MainButton>
	</form>
)

export default ContactForm
