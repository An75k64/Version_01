import React from "react";
import { Container, Stack, Heading, Box, Text, useBreakpointValue } from "@chakra-ui/react";

const CollegeSolutions = () => {
  const cardData = [
    {
      title: "Expansive Network",
      imageUrl:
        "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Connect with numerous top-tier employers seamlessly through our extensive network, bringing a wide range of opportunities directly to you.",
    },
    {
      title: "Innovative Platform",
      imageUrl:
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Utilize advanced tools and features to streamline the recruitment process, making it more efficient and effective for both colleges and employers.",
    },
    {
      title: "Comprehensive Training",
      imageUrl:
        "https://images.pexels.com/photos/5904046/pexels-photo-5904046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Offer targeted training programs to bridge skill gaps and ensure graduates are prepared with industry-specific skills necessary for their careers.",
    },
    {
      title: "Data-Driven Insights",
      imageUrl:
        "https://images.pexels.com/photos/5439433/pexels-photo-5439433.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Access valuable feedback and insights to enhance your career services and make data-informed decisions to improve recruitment strategies.",
    },
  ];

  return (
    <Container maxW={"full"} bg="gray.100" mt={20} minH={"80vh"}>
      <Heading
        fontFamily={"ClashDisplay"}
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight="bold"
        color="blue.400"
        textAlign="center"
      
        mb={20}
      >
        TalentConnect Solutions for Colleges
      </Heading>
      <Stack
        direction={useBreakpointValue({ base: "column", md: "row" })}
        justify="space-around"
        spacing={10}
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            w={"full"}
            h={"50vh"}
            overflow="hidden"
            position="relative"
            borderRadius="xl"
            boxShadow="lg"
            bgSize="cover"
            bgImage={`url(${card.imageUrl})`}
            bgPosition="center"
            _hover={{
              _before: {
                content: `""`,
                position: "absolute",
                left: 0,
                bottom: 0,
                w: "100%",
                h: "100%",
                bg: "rgba(0,0,0,0.5)",
                zIndex: 1,
                transition: "all 0.5s ease",
              },
              "> .content": {
                transform: "translateY(0)",
                opacity: 1,
                transition: "all 0.5s ease",
              },
              "> .titleBox": {
                opacity: 0,
              },
            }}
          >
            <Box
              position="absolute"
              left={0}
              bottom={0}
              w="100%"
              h="100%"
              p={4}
              bg="rgba(0,0,0,0.7)"
              zIndex={2}
              color="white"
              className="content"
              transform="translateY(100%)"
              opacity={0}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Heading fontFamily={"ClashDisplay"} textTransform={"uppercase"} color="blue.400" as="h3" size="md" mb={2}>
                {card.title}
              </Heading>
              <Text textAlign={"center"}>{card.description}</Text>
            </Box>
            <Box
              position="relative"
              left={0}
              bottom={0}
              w="100%"
              p={4}
              bg="rgba(0,0,0,0.5)"
              zIndex={3}
              color="white"
              className="titleBox"
              textAlign="center"
            >
              <Heading fontFamily={"ClashDisplay"} as="h3" size="md">
                {card.title}
              </Heading>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default CollegeSolutions;
