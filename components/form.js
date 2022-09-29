import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Textarea
} from '@chakra-ui/react'

import { RiSendPlaneFill } from 'react-icons/ri'
import { SubmitButton } from './button'
import axios from 'axios'
import { useState } from 'react'

const ContactForm = () => {
	const [contactName, setContactName] = useState('')
	const [emailAddress, setEmailAddress] = useState('')
	const [subject, setSubject] = useState('')
	const [emailMessage, setEmailMessage] = useState('')
	const [successMessage, setSuccessMessage] = useState('')

	const onSubmit = event => {
		event.preventDefault()

		console.log(
			`Submit message from: ${contactName} - ${emailAddress} with subject: ${subject} and email message: ${emailMessage}`
		)

		setContactName('')
		setEmailAddress('')
		setSubject('')
		setEmailMessage('')

		// axios
		// .post("<WEBHOOK URL>", data)
		// .then(resp => {
		// 	setSuccessMessage(`Thanks for contacting me! I'll get back to you as soon as possible 😁` )
		// })
		// .catch(e => console.error(e))
	}

	return (
		<form onSubmit={onSubmit}>
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
						<Input
							id='name'
							type='text'
							placeholder='Name'
							value={contactName}
							onChange={event => setContactName(event.target.value)}
						/>
					</FormControl>
					<FormControl
						isRequired
						gridColumnStart={{ md: '3' }}
						gridColumnEnd={{ md: '7' }}
					>
						<FormLabel htmlFor='email'>Email</FormLabel>
						<Input
							id='email'
							type='email'
							placeholder='Email'
							value={emailAddress}
							onChange={event => setEmailAddress(event.target.value)}
						/>
					</FormControl>
				</Box>
				<FormControl isRequired>
					<FormLabel htmlFor='subject'>Subject</FormLabel>
					<Input
						id='subject'
						type='text'
						placeholder='Subject'
						value={subject}
						onChange={event => setSubject(event.target.value)}
					/>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Message</FormLabel>
					<Textarea
						placeholder='Message'
						resize='none'
						value={emailMessage}
						onChange={event => setEmailMessage(event.target.value)}
					/>
				</FormControl>
			</Box>
			<FormControl>
				{/* <Button type='submit'>Submit</Button> */}
				<SubmitButton
					icon={<RiSendPlaneFill />}
					align='right'
					type='submit'
				>
					Send
				</SubmitButton>
			</FormControl>
		</form>
	)
}

export default ContactForm
