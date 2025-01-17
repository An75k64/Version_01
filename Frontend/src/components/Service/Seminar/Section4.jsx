import React from "react";
import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import section4Image from "../../../assets/images/OnCampus/section4.png"; // Adjust the path as needed

const phoneNumber = '7564974126';
const whatsappLink = `https://wa.me/${phoneNumber}`;


const Section4 = () => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} mt={10}>
      <Flex flex={1} align={"center"} justify={"center"}>
        <Box
          
          width="100%"
          maxHeight="50vh"
        >
          <Box
            position="relative"
            overflow="hidden"
            transition="transform 0.5s ease"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Image
              alt={"Section 4 Image"}
              objectFit={"cover"}
              height="100%"
              src={section4Image}
            />
            
          </Box>
        </Box>
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text  fontFamily={"ClashDisplay"} color={"blue.400"}>
             Questions?
             Collaborations? Let's Talk.
            </Text>            
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Empower Your Campus Recruitment with TalentConnect - Your Gateway to Top Talent!
          </Text>
          
          <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={4}>
            <Button
              as={RouterLink}
              to="/college-form"
              rounded={"full"}
              bg={"gray.500"}
              color={"white"}
              _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
            >
              Connect With Us
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Section4;
