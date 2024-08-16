"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: '""',
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      _hover={{
        transform: "translateY(-10px)",
        transition: "transform 0.3s ease-in-out",
        boxShadow: "xl",
      }}
      minH={"250px"}
      maxW={"300px"}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"} textAlign={"center"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function SuccessStories() {
  return (
    <Box bg={useColorModeValue("#f4f4f3ff", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading color={"#7877e6ff"}>Success Stories</Heading>
          <Text color={"gray.600"} textAlign={"center"} p={5}>
            Explore our impressive portfolio of successful career transitions
            and workforce solutions that speak volumes about our expertise.
          </Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          align={"center"}
          justify={"center"}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Seamless Career Transition
              </TestimonialHeading>
              <TestimonialText>
                TalentConnect helped me transition from academia to a corporate
                job effortlessly. Their guidance and resources were invaluable
                in securing my dream job.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNjI5NTIxNzY0&ixlib=rb-1.2.1&q=80&w=400"
              }
              name={"Alex Johnson"}
              title={"Software Engineer at TechCorp"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Outstanding Support</TestimonialHeading>
              <TestimonialText>
                The support from TalentConnect was outstanding. They provided
                personalized career counseling and connected me with top
                employers in my field.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNjI5NTIxNzY0&ixlib=rb-1.2.1&q=80&w=400"
              }
              name={"Emily Davis"}
              title={"Marketing Specialist at CreativeWorks"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Exceptional Recruitment Solutions
              </TestimonialHeading>
              <TestimonialText>
                TalentConnect's recruitment solutions were exceptional. They
                helped us find highly qualified candidates who fit perfectly
                with our company culture.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNjI5NTIxNzY0&ixlib=rb-1.2.1&q=80&w=400"
              }
              name={"Michael Brown"}
              title={"HR Manager at Innovate Inc."}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
