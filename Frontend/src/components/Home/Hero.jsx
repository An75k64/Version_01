import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink
import heroImage from "../../assets/images/Home/hero.png";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={`url(${heroImage})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      zIndex={1}
      transition="transform 0.5s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
      }}
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
