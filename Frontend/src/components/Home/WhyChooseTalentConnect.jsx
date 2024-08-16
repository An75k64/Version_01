

import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcAssistant, FcIdea, FcGraduationCap } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align="center" 
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}>
      
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

export default function WhyChooseTalentConnect() {
  return (
    <Box p={4} bg="#f4f4f3ff">
      <Text
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight={700}
        mb={6}
        color="blue.400"
        textAlign="center"
      >
        Why Choose TalentConnect?
      </Text>
      <Text
        fontSize={{ base: "md", lg: "lg" }}
        color={"gray.500"}
        mb={10}
        textAlign="center"
      >
        We offer innovative recruitment solutions, personalized career services,
        and seamless campus-to-cubicle programs to meet your unique needs.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          
          icon={<Icon as={FcIdea} w={10} h={10} />}
          title={"Innovative Recruitment Solutions"}
          text={"Revolutionizing the way talent meets opportunity."}
        />
        <Feature
          icon={<Icon as={FcGraduationCap} w={10} h={10} />}
          title={"Personalized Career Services"}
          text={"Tailored to your individual goals and aspirations."}
        />
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Seamless Campus-to-Cubicle Programs"}
          text={"Transition smoothly from academia to the professional world."}
        />
      </SimpleGrid>
    </Box>
  );
}
