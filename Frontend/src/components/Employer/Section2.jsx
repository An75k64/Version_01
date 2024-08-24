<<<<<<< HEAD
import React from "react";
import { Container, Stack, Heading, Box, Text, useBreakpointValue } from "@chakra-ui/react";

const Section3 = () => {
  const cardData = [
    {
      title: "Diverse Talent Pool",
      imageUrl:
      "https://img.freepik.com/free-photo/civil-engineer-construction-worker-architects-wearing-hardhats-safety-vests-are-working-together-construction-site-building-home-cooperation-teamwork-concept_640221-172.jpg?t=st=1721812038~exp=1721815638~hmac=215bde27aecb48dd9c015541011119d991e18f5420a4027e48f8e166b1ad703c&w=740",
      description:
      "Access a broad range of qualified candidates.",
    },
    {
      title: "Efficient Hiring:",
      imageUrl:
      "https://images.unsplash.com/photo-1698047681452-08eba22d0c64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGpvYiUyMGludGVydmlld3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Leverage technology for quick and effective recruitment.",
    },
    {
      title: "On-Demand Training",
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGpvYiUyMHRyYWluaW5nfGVufDB8fDB8fHww",
      description:
        "Ensure new hires are job-ready from the start.",
    },
    // {
    //   title: "Strategic Partnerships",
    //   imageUrl:
    //     "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   description:
    //     " Build a reliable talent pipeline through lasting educational collaborations.",
    // },
  ];
=======
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
>>>>>>> 4a616aa76f736981ad06cf2502bc1675c0284b9f

function Section2() {
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

export default Section2