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
  useColorModeValue,
} from '@chakra-ui/react'
import { Search2Icon, RepeatIcon, StarIcon, LockIcon } from '@chakra-ui/icons'

function Section3() {
  const features = [
    {
      title: "Talent Discovery",
      description: "Difficulty in identifying qualified candidates.",
      icon: Search2Icon,
    },
    {
      title: "Inefficient Processes",
      description: "Time-consuming and costly recruitment procedures.",
      icon: RepeatIcon,
    },
    {
      title: "Skills Readiness",
      description: "New hires often require extensive training.",
      icon: StarIcon,
    },
    {
      title: "Retention Rates",
      description: "Challenges in retaining fresh talent.",
      icon: LockIcon,
    },
  ];

  const bgGradient = useColorModeValue('linear(to-r, blue.50, gray.100)', 'linear(to-r, blue.900, gray.700)');
  const iconColor = useColorModeValue('blue.500', 'blue.300');
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorderColor = useColorModeValue('blue.100', 'blue.700');

  return (
    <Box
      p={{ base: 10, md: 20 }}
      bgGradient={bgGradient}
      m={5}
      borderRadius="lg"
      boxShadow="xl"
      transition="0.3s ease-in-out"
      _hover={{ boxShadow: '2xl' }}
    >
      <Stack spacing={6} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', md: '4xl' }} color={'blue.600'} fontWeight="extrabold">
          Challenges Faced by Companies in Hiring Freshers
        </Heading>
        <Text color={'gray.700'} fontSize={{ base: 'md', md: 'lg' }}>
          Partner with TalentConnect today to simplify your fresh talent acquisition journey
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature, index) => (
            <Box
              key={index}
              p={5}
              bg={cardBg}
              borderRadius="xl"
              boxShadow="lg"
              borderWidth="1px"
              borderColor={cardBorderColor}
              _hover={{
                transform: 'translateY(-10px) scale(1.05)',
                boxShadow: '2xl',
                bgGradient: 'linear(to-r, blue.100, blue.200)',
                transition: '0.4s ease-in-out',
                cursor: 'pointer',
              }}
              transition="0.3s ease-in-out"
            >
              <HStack spacing={4}>
                <Box
                  color={iconColor}
                  p={3}
                  bgGradient="linear(to-b, blue.100, blue.300)"
                  borderRadius="full"
                  boxShadow="md"
                  transition="0.4s ease-in-out"
                  _hover={{
                    bgGradient: 'linear(to-b, blue.300, blue.500)',
                    transform: 'rotate(15deg)',
                  }}
                >
                  <Icon as={feature.icon} w={8} h={8} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={800} fontSize="lg">{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.description}</Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Section3
