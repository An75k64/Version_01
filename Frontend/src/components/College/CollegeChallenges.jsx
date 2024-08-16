import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcBusinessman, FcMoneyTransfer, FcDataRecovery, FcFeedback } from "react-icons/fc";

// Feature component for displaying each challenge
const Feature = ({ title, text, icon }) => {
  return (
    <Stack
      align="center"
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
      p={5}
      borderRadius="md"
      bg="white"
      shadow="md"
    >
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"blue.400"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} textAlign="center">
        {title}
      </Text>
      <Text color={"gray.600"} textAlign="center">
        {text}
      </Text>
    </Stack>
  );
};

export default function CollegeChallenges() {
  return (
    <Box p={4} bg="#f4f4f3ff">
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={700}
        mb={6}
        color="blue.400"
        textAlign="center"
      >
        Challenges Faced by Colleges in Campus Recruitment
      </Text>
      <Text
        fontSize={{ base: "md", lg: "lg" }}
        color={"gray.500"}
        mb={10}
        textAlign="center"
      >
        Colleges often face several challenges in campus recruitment, including limited employer reach, resource constraints, skill gaps among graduates, and a lack of actionable feedback.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        <Feature
          icon={<Icon as={FcBusinessman} w={10} h={10} />}
          title={"Limited Employer Reach"}
          text={"Difficulty in connecting with a wide range of companies."}
        />
        <Feature
          icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
          title={"Resource Constraints"}
          text={"Insufficient tools and resources to manage recruitment efficiently."}
        />
        <Feature
          icon={<Icon as={FcDataRecovery} w={10} h={10} />}
          title={"Skill Gaps"}
          text={"Graduates often lack industry-specific skills."}
        />
        <Feature
          icon={<Icon as={FcFeedback} w={10} h={10} />}
          title={"Feedback Shortages"}
          text={"Lack of actionable insights to improve recruitment strategies."}
        />
      </SimpleGrid>
    </Box>
  );
}
