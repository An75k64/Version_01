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
          'url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
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
                Join Our Transformative Seminars
              </Heading>
              <Text mt={4} fontSize={{ base: "md", md: "lg" }} color="gray.800">
                Expand your expertise with our expert-led seminars, designed to provide practical insights and networking opportunities. Enhance your personal and professional growth in an engaging and interactive environment.
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
          'url(https://images.unsplash.com/photo-1551731409-43eb3e517a1a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
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
                Why Should You Join?
              </Heading>
              <Text mt={4} fontSize={{ base: "1x1", md: "2x1" }} color="gray.800">
                Our seminars offer a unique opportunity to gain expert knowledge from industry leaders and subject matter experts. By attending, you'll have the chance to network with like-minded professionals, expanding your professional connections. You'll acquire practical skills that can be immediately applied to your work, ensuring you stay updated with the latest trends and developments in your field. Our interactive sessions, including discussions, Q&A segments, and hands-on workshops, provide a dynamic and engaging learning experience.

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