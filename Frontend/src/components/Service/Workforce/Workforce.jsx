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
          'url(https://img.freepik.com/premium-photo/group-engineers-gathered-take-team-photo_592794-426.jpg?w=740)'
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        backgroundAttachment={"fixed"}
        zIndex={1}
        objectFit={"cover"}
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
              Elevate Your Talent Acquisition: Premier Workforce Solutions
              </Heading>
              <Text mt={4} fontSize={{ base: "md", md: "lg" }} color="gray.800">
              Discover top-tier workforce solutions designed to streamline your hiring process and connect you with exceptional talent. Our services offer customized recruitment strategies, candidate screening, and talent management to help you build a skilled and dynamic team that drives your organization’s success.
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
          'url(https://images.unsplash.com/photo-1686771416282-3888ddaf249b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
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
                Why Should You Choose Us?
              </Heading>
              <Text mt={4} fontSize={{ base: "1x1", md: "2x1" }} color="gray.800">
              When you partner with us for your workforce needs, you benefit from our commitment to delivering tailored recruitment strategies that align with your organization’s unique requirements. We understand that each company is different, and we customize our approach to ensure we connect you with the talent that fits seamlessly into your company’s culture and job specifications.
              Choosing us means opting for a partner dedicated to not only meeting your immediate hiring needs but also contributing to your long-term success and growth.
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