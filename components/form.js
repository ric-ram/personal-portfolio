import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	useDisclosure
} from '@chakra-ui/react'

import FormModal from './modal'
import { RiSendPlaneFill } from 'react-icons/ri'
import { SubmitButton } from './button'
import axios from 'axios'
import { useState } from 'react'

const ContactForm = () => {
	const [contactName, setContactName] = useState('')
	const [emailAddress, setEmailAddress] = useState('')
	const [subject, setSubject] = useState('')
	const [emailMessage, setEmailMessage] = useState('')
	const [success, setSuccess] = useState(false)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const formURL = process.env.NEXT_PUBLIC_PIPEDREAM_URL

	const onSubmit = event => {
		event.preventDefault()

		const message = {
			name: contactName,
			email: emailAddress,
			subject: subject,
			body: emailMessage
		}

		axios
			.post(formURL, message)
			.then(resp => {
				if (resp.data.success) {
					setContactName('')
					setEmailAddress('')
					setSubject('')
					setEmailMessage('')

					setSuccess(true)
					onOpen()
				}
			})
			.catch(e => console.error(e))
	}

	return (
		<>
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
								onChange={event =>
									setEmailAddress(event.target.value)
								}
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
					<SubmitButton
						icon={<RiSendPlaneFill />}
						align='right'
						type='submit'
					>
						Send
					</SubmitButton>
				</FormControl>
			</form>
			{success && <FormModal isOpen={isOpen} onClose={onClose} />}
		</>
	)
}

export default ContactForm
