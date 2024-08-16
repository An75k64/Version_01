import React from "react";
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Heading,
  Container,
} from "@chakra-ui/react";
import Section3 from "./Section3";
import Section4 from "./Section4";



export default function OnCampus() {
   
  return (
    <>
      {/* Section 1 */}
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1653669487221-252f32c53f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        backgroundAttachment={"fixed"}
        zIndex={1}
        position="relative"
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} spacing={6} position="absolute" right="8" bottom="20">
            <Box
              bg="rgba(245, 245, 245, 0.8)"
              p={10}
              borderRadius="md"
              textAlign="left"
              color="black"
              maxW="lg"
            >
              <Heading fontFamily={"ClashDisplay"} fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold" color="blue.400">
              Navigate Your Future: Expert Career Counselling
              </Heading>
              <Text mt={4} fontSize={{ base: "md", md: "lg" }} color="gray.800">
              Unlock your potential with personalized career guidance. Our expert counselors provide tailored advice, resources, and strategies to help you achieve your professional goals and build a fulfilling career.
              </Text>
            </Box>
          </Stack>
        </VStack>
      </Flex>

      {/* Section 2 */}
      <Flex
        mt={135}
        w={"full"}
        h={"60vh"}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        backgroundAttachment={"fixed"} // This makes the background image stay in place
        zIndex={1}
        position="relative"
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, transparent, blackAlpha.600)"}
        >
          <Stack maxW={"2xl"} spacing={6} position="absolute" left="8" >
            <Box
              bg="gray.100"
              p={10}
              borderRadius="md"
              textAlign="left"
              color="black"
              maxW="lg"
              minH="500px" // Increase the height of the box
            >
              <Heading fontFamily={"ClashDisplay"} fontSize={{ base: "2xl", md: "5xl" }} fontWeight="bold" color="blue.400">
              Why Join Our Counseling?
              </Heading>
              <Text mt={4} fontSize={{ base: "1x1", md: "2x1" }} color="gray.800">
              Embark on a journey of self-discovery and career advancement with our personalized counseling services. Our expert counselors provide tailored guidance to help you navigate your career path with confidence and clarity. By joining our counseling sessions, you gain access to professional advice that is specifically designed to address your unique needs and aspirations.
              Additionally, our counseling sessions offer a confidential and supportive environment where you can explore your career aspirations and address any obstacles that may be holding you back. By joining our counseling services, you can gain the clarity and confidence needed to take decisive steps toward a fulfilling and successful career.

              </Text>
            </Box>
          </Stack>
        </VStack>
      </Flex>
    

      {/* Section 3 */}
        <Section3 />

      {/* Section 4 */}
        <Section4 />
    </>
  );
}