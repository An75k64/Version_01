import React from 'react'
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

function Section3() {
  return (
    <Box p={20}  bg={'gray.100'} m={3} borderRadius={10}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'} color={'blue.400'}>Challenges Faced by Companies in Hiring Freshers</Heading>
        <Text color={'gray.600'} fontSize={'x'}>
        Partner with TalentConnect today to simplify your fresh talent acquisition journey
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {/* {features.map((feature) => ( */}
            <HStack align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>Talent Discovery</Text>
                <Text color={'gray.600'}>Difficulty in identifying qualified candidates.</Text>
              </VStack>
            </HStack>
            <HStack align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>Inefficient Processes:</Text>
                <Text color={'gray.600'}>Time-consuming and costly recruitment procedures.</Text>
              </VStack>
            </HStack>
            <HStack align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>Skill Readiness</Text>
                <Text color={'gray.600'}> New hires often require extensive training.</Text>
              </VStack>
            </HStack>
            <HStack align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>Retention Rates</Text>
                <Text color={'gray.600'}>Challenges in retaining fresh talent.</Text>
              </VStack>
            </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Section3