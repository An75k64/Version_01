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
          'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
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
                OnCampus Connect: Hire Smarter
              </Heading>
              <Text mt={4} fontSize={{ base: "md", md: "lg" }} color="gray.800">
                Our OnCampus service brings career opportunities directly to students, connecting them with top employers through campus recruitment drives and job events.
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
          'url(https://plus.unsplash.com/premium_photo-1664478037373-6308c029fcda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
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
                Why Should You Hire Us?
              </Heading>
              <Text mt={4} fontSize={{ base: "1x1", md: "2x1" }} color="gray.800">
                Hire TalentConnect for top-notch on-campus recruitment
                solutions and seamless collaboration with universities. Our
                OnCampus service brings career opportunities directly to
                students, ensuring a strong brand presence on campus and
                access to a talent pipeline of pre-screened candidates. With
                our proven track record of successful campus branding
                campaigns, we are a trusted partner for companies looking to
                attract the best young talent. Let us help you take the next
                step in building your future workforce with our
                comprehensive on-campus hiring solutions. Choose
                TalentConnect for a hassle-free recruitment process and
                access to talented students ready to kickstart their
                professional journeys.
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