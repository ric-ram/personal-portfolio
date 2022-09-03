import { Box, Container, Heading, Image } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box display={{ sm: 'flex' }} mt={{ base: 6 }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Ricardo Ramos
          </Heading>
          <p>
            Software Engineer / Business and Integration Architect
            Analyst
          </p>
        </Box>
        <Box flexShrink={0} ml={{ sm: 6 }} align='center'>
          <Image
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            maxWidth='100px'
            display='inline-box'
            borderRadius='full'
            src='/images/profile-pic.png'
            alt='Profile Image'
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Page
