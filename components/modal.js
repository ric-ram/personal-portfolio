import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'

import { ModalButton } from './button'

const FormModal = ({ isOpen, onClose }) => {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Message Sent!</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Thanks for contacting me! I&apos;ll get back to you as
						soon as possible 😁
					</ModalBody>

					<ModalFooter>
						<ModalButton onClick={onClose}>Close</ModalButton>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default FormModal
