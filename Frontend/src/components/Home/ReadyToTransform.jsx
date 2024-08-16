"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function ReadyToTransform() {
  return (
    <Box
      id="ready-to-transform"
      bg={useColorModeValue("gray.100", "gray.700")}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
    >
      <Container maxW={"container.md"}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontFamily={"ClashDisplay"}
          color={"blue.400"} // Change to your desired color
          mb={4}
          letterSpacing={1}
        >
          Ready to Transform Your Career?
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} mb={6}>
          Join TalentConnect today and take the first step towards unlocking
          your full career potential. Let's make it happen!
        </Text>
        <Stack
          spacing={4}
          direction={{ base: "column", md: "row" }}
          justify="center"
        >
          <Button
            as={RouterLink}
            to="/jobs/post-resume"
            size="lg"
            colorScheme="teal"
            variant="solid"
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          >
            Post Your Resume
          </Button>
          <Button
            as={RouterLink}
            to="/jobs/current-opening"
            size="lg"
            colorScheme="blue"
            variant="outline"
            _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
          >
            Current Openings
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
