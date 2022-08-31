import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Ricardo Ramos
          </Heading>
          <p>
            Software Engineer / Business and Integration Architect
            Analyst
          </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
