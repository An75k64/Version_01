<<<<<<< HEAD
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
=======
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
    {
      title: "Employer Branding",
      imageUrl:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Highlight what makes your company a great place to work. Showcase your unique culture, values, and career opportunities to attract top talent and stand out in the job market.",
    },
  ];

  return (
    <Container maxW="100%" bg="gray.100" mt={90} minH={"80vh"}>
      <Heading
        fontFamily={"ClashDisplay"}
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight="bold"
        color="blue.400"
        textAlign="center"
        mb={8}
      >
        <br />
        Our Unique Offerings
      </Heading>
      <br />
      <Stack
        direction={useBreakpointValue({ base: "column", md: "row" })}
        justify="space-around"
        spacing={10}
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            //maxW={{ base: "100%", md: "md" }}
            w={"full"}
            h={"50vh"}
            overflow="hidden"
            position="relative"
            borderRadius="xl"
            boxShadow="lg"
            bgSize="cover"
            bgImage={`url(${card.imageUrl})`}
            bgPosition="center"
            _hover={{
              _before: {
                content: `""`,
                position: "absolute",
                left: 0,
                bottom: 0,
                w: "100%",
                h: "100%",
                bg: "rgba(0,0,0,0.5)",
                zIndex: 1,
                transition: "all 0.5s ease",
              },
              "> .content": {
                transform: "translateY(0)",
                opacity: 1,
                transition: "all 0.5s ease",
              },
              "> .titleBox": {
                opacity: 0,
              },
            }}
          >
            <Box
              position="absolute"
              left={0}
              bottom={0}
              w="100%"
              h="100%"
              p={4}
              bg="rgba(0,0,0,0.7)"
              zIndex={2}
              color="white"
              className="content"
              transform="translateY(100%)"
              opacity={0}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Heading fontFamily={"ClashDisplay"} textTransform={"uppercase"} color="blue.400" as="h3" size="md" mb={2}>
                {card.title} <br /> <br />
              </Heading>
              <Text text-align= {"justify"}>{card.description}</Text>
            </Box>
            <Box
              position="relative"
              left={0}
              bottom={0}
              w="100%"
              p={4}
              bg="rgba(0,0,0,0.5)"
              zIndex={3}
              color="white"
              className="titleBox"
              textAlign="center"
              
            >
              <Heading fontFamily={"ClashDisplay"}  as="h3" size="md">
                {card.title}
              </Heading>
            </Box>
          </Box>
        ))}
>>>>>>> 4a616aa76f736981ad06cf2502bc1675c0284b9f
      </Stack>
    </Container>
  );
};

<<<<<<< HEAD
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
=======
export default Section3;
>>>>>>> 4a616aa76f736981ad06cf2502bc1675c0284b9f
