import React from "react";
import { Container, Stack, Heading, Box, Text, useBreakpointValue } from "@chakra-ui/react";

const Section3 = () => {
  const cardData = [
    {
      title: "Diverse Talent Pool",
      imageUrl:
      "https://img.freepik.com/free-photo/civil-engineer-construction-worker-architects-wearing-hardhats-safety-vests-are-working-together-construction-site-building-home-cooperation-teamwork-concept_640221-172.jpg?t=st=1721812038~exp=1721815638~hmac=215bde27aecb48dd9c015541011119d991e18f5420a4027e48f8e166b1ad703c&w=740",
      description:
      "Access a broad range of qualified candidates.",
    },
    {
      title: "Efficient Hiring:",
      imageUrl:
      "https://images.unsplash.com/photo-1698047681452-08eba22d0c64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGpvYiUyMGludGVydmlld3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Leverage technology for quick and effective recruitment.",
    },
    {
      title: "On-Demand Training",
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGpvYiUyMHRyYWluaW5nfGVufDB8fDB8fHww",
      description:
        "Ensure new hires are job-ready from the start.",
    },
    {
      title: "Strategic Partnerships",
      imageUrl:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        " Build a reliable talent pipeline through lasting educational collaborations.",
    },
  ];

  return (
    <Container maxW="100%" bg="gray.100" mt={90} minH={"80vh"}>
      <Heading
        fontFamily={"ClashDisplay"}
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight="bold"
        color="blue.400"
        textAlign="center"
        mb={8}
      >
        <br />
        Our Unique Offerings
      </Heading>
      <br />
      <Stack
        direction={useBreakpointValue({ base: "column", md: "row" })}
        justify="space-around"
        spacing={10}
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            //maxW={{ base: "100%", md: "md" }}
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
                {card.title} <br /> <br />
              </Heading>
              <Text text-align= {"justify"}>{card.description}</Text>
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
              <Heading fontFamily={"ClashDisplay"}  as="h3" size="md">
                {card.title}
              </Heading>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Section3;
