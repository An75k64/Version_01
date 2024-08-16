

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcBusiness,
  FcGraduationCap,
  FcCollaboration,
  FcAssistant,
  FcReading,
  FcBriefcase,
  FcGlobe
} from "react-icons/fc";
import { HashLink as Link } from "react-router-hash-link"; 

const Card = ({ heading, description, icon, link }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="lg"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
    >
      <Flex direction="column" justify="space-between" h="100%">
        <Stack align={"center"} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={"center"}
            justify={"center"}
            color={"white"}
            rounded={"full"}
            bg={useColorModeValue("gray.100", "gray.700")}
            mb={2}
          >
            {icon}
          </Flex>
          <Box textAlign="center">
            <Heading size="md" color="#7877e6ff">
              {heading}
            </Heading>
            <Text mt={1} fontSize={"sm"} color={"gray.600"}>
              {description}
            </Text>
          </Box>
        </Stack>
        <Box textAlign="center" mt="auto">
          <Button 
            as={Link}
            to={link}
            variant={"link"}
            colorScheme={"blue"}
            size={"sm"}
          >
            Learn more
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default function OurServices() {
  return (
    <Box id="our-services" p={4} bg="#ffffff" mt={10}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight={"bold"}
          color="blue.400"
        >
          Our Services
        </Heading>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"OnCampus"}
            icon={<Icon as={FcGraduationCap} w={10} h={10} />}
            description={
              "Our OnCampus service brings career opportunities directly to students, connecting them with top employers through campus recruitment drives and job events."
            }
            link="/oncampus" // Link to the OnCampus page
          />
          <Card
            heading={"OffCampus"}
            icon={<Icon as={FcGlobe} w={10} h={10} />}
            description={
              "TalentConnect's Off Campus service offers a platform for recent graduates to explore diverse career opportunities."
            }
            link="/offcampus"
          />
          <Card
            heading={"Workforce Provider"}
            icon={<Icon as={FcBriefcase} w={10} h={10} />}
            description={
              "Our Workforce Provider service offers tailored staffing solutions to connect employers with top talent."
            }
            link="/workforce"
          />
          <Card
            heading={"Seminar"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Our seminars provide valuable insights on various career-related topics, led by industry experts."
            }
            link="/seminar"
          />
          <Card
            heading={"Counselling"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Personalized career counseling services to help you navigate your career path."
            }
            link="/counselling"
          />
          <Card
            heading={"CareerCraft"}
            icon={<Icon as={FcReading} w={10} h={10} />}
            description={
              "CareerCraft is focused on skill development and career readiness through workshops and mentorship."
            }
            link="/careercraft"
          />
        </Flex>
      </Container>
    </Box>
  );
}
