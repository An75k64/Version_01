import React from "react";
import { Container, Stack, Heading, Box, Text, useBreakpointValue } from "@chakra-ui/react";

const CCSection3 = () => {
  const cardData = [
    {
<<<<<<< HEAD
      title: "1:1 Mentorship",
      imageUrl:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVudG9yc2hpcHxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "TalentConnect provides regular sessions, mentees can gain valuable insights, overcome challenges, and accelerate their progress in their personal or professional journey.",
=======
      title: "1:1 Mentorship Program",
      imageUrl:
        "https://images.unsplash.com/photo-1653669486900-fd06730dcc78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Advance your career with personalized guidance from industry experts. Our 1:1 mentorship program is tailored to your goals, offering targeted support in high-demand technical skills and certification pathways. Achieve your potential with expert insights and strategies for success",
>>>>>>> 4a616aa76f736981ad06cf2502bc1675c0284b9f
    },
    {
      title: "Skill Enhancement",
      imageUrl:
        "https://images.unsplash.com/photo-1613347761513-0f37baebfd20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxlbmdpbm5lciUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
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
