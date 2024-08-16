import React from "react";
import { Container, Stack, Heading, Box, Text, useBreakpointValue } from "@chakra-ui/react";

const CCSection3 = () => {
  const cardData = [
    {
      title: "Skill Enhancement",
      imageUrl:
        "https://www.avanse.com/viewPagesAssets/img/skill-enhancement-loan.png",
      description:
        "TalentConnect provides courses and certifications in high-demand technical skills and offers advanced certification programs for career advancement and specialization.",
    },
    {
      title: "High-Skilled Mentor",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OAw1nW0KLSzM8b6otJgqEhxtFyhfWfBhYg&s",
      description:
        "TalentConnect provides high-paid skilled professional panels which give end-to-end guidance to the candidates.",
    },
  ];

  const cardWidth = useBreakpointValue({ base: "100%", md: "45%", lg: "30%" }); // Adjust width based on breakpoints
  const cardHeight = useBreakpointValue({ base: "auto", md: "50vh" }); // Adjust height based on breakpoints

  return (
    <Container maxW="full" bg="gray.100" mt={135} minH="80vh">
      <Heading
        fontFamily="ClashDisplay"
        fontSize={{ base: "2xl", sm: "4xl" }}
        fontWeight="bold"
        color="blue.400"
        textAlign="center"
        mb={8}
        padding={10}
      >
        CareerCraft’s Key Benefits
      </Heading>
      
      <Stack
        direction={useBreakpointValue({ base: "column", md: "row" })}
        justify="space-around"
        spacing={10}
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            w={cardWidth}
            h={cardHeight}
            minH={{ base: "40vh", md: "50vh" }} // Set a minimum height
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
              <Heading
                fontFamily="ClashDisplay"
                textTransform="uppercase"
                color="blue.400"
                as="h3"
                size="md"
                mb={2}
              >
                {card.title}
              </Heading>
              <Text textAlign="justify">{card.description}</Text>
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
              <Heading fontFamily="ClashDisplay" as="h3" size="md">
                {card.title}
              </Heading>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default CCSection3;
