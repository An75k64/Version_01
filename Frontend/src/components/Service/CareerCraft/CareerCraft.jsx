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
import CCSection3 from "./CCSection3";
import CCSection4 from "./CCSection4";



export default function CareerCraft() {
   
  return (
    <>
      {/* Section 1 */}
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          'url(https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
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
                CareerCraft: Elevate Your Career
              </Heading>
              <Text mt={4} fontSize={{ base: "md", md: "lg" }} color="gray.800">
                CareerCraft is our specialized program focused on skill development and career readiness. Through workshops, training sessions, and mentorship, we equip individuals with the skills and confidence needed to excel in their chosen fields.

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
          'url( https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg)'
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
               How CareerCraft Can Transform Your Professional Journey?
              </Heading>
              <Text mt={4} fontSize={{ base: "1x1", md: "2x1" }} color="gray.800">
                <h2 style={{ fontWeight: 'bold', fontSize: 'inherit' }}>
                    Elevate Your Career with Expert Training and Guidance
                </h2>
                <br />
                CareerCraft offers specialized training and personalized mentorship to transform your professional journey. Gain cutting-edge skills and advanced certifications tailored to your career goals. With guidance from industry experts, CareerCraft equips you with the confidence and expertise to excel and advance in today’s competitive job market.
              </Text>
            </Box>
          </Stack>
        </VStack>
      </Flex>
    

      {/* Section 3 */}
        <CCSection3 />

      {/* Section 4 */}
        <CCSection4 />
    </>
  );
}