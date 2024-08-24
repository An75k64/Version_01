import React, { useState, useEffect } from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";

// Array of image URLs
const images = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change background image at intervals
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={`url(${images[currentImageIndex]})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      zIndex={1}
      transition="transform 0.4s ease-in-out, background-image 1s ease-in-out"
      // _hover={{
      //   transform: "scale(1.05)",
      // }}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "6xl", md: "7xl" })}
          >
            Welcome to TalentConnect!
          </Text>
          <Text
            color={"white"}
            fontSize={useBreakpointValue({ base: "md", md: "lg" })}
          >
            Your premier destination for comprehensive career solutions. Whether
            you're a job seeker, an employer, or an academic institution, we
            connect talent with opportunity.
          </Text>
          <Stack direction={"row"}>
            <Link to="/#our-services">
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              >
                Learn More
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
              >
                Contact Us
              </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
