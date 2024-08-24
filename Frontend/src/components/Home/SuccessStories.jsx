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
  keyframes,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const glowingAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px #7877e6, 0 0 10px #7877e6, 0 0 20px #7877e6, 0 0 40px #7877e6;
  }
  50% {
    box-shadow: 0 0 20px #7877e6, 0 0 40px #7877e6, 0 0 60px #7877e6, 0 0 80px #7877e6;
  }
  100% {
    box-shadow: 0 0 5px #7877e6, 0 0 10px #7877e6, 0 0 20px #7877e6, 0 0 40px #7877e6;
  }
`;

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Box
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
        borderBottom: "solid",
        borderBottomWidth: 16,
        borderBottomColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        top: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      minH={"250px"}
      maxW={"350px"}
      textAlign={"center"}
      transform="translateY(50px)" // Move the card part down
      transition="transform 0.3s ease-in-out"
      _hover={{
        transform: "translateY(30px)",
        transition: "transform 0.3s ease-in-out",
        boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
      }}
    >
      {children}
    </Box>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"} textAlign={"center"} color={"#7877e6"}>
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
    <Flex
      align={"center"}
      mb={-10}
      mt={14}
      direction={"column"}
      transform="translateY(-50px)"
      transition="transform 0.3s ease-in-out"
      // _hover={{
      //   transform: "translateY(-70px)",
      //   animation: `${glowingAnimation} 1.5s infinite`,
      // }}
    >
      <Avatar
        src={src}
        mb={2}
        size="xl"
        borderWidth={4}
        borderColor={"white"}
        boxShadow="0px 10px 20px rgba(0,0,0,0.15)"
      />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600} fontSize={"lg"}>
          {name}
        </Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function PlacedStudents() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      bg={useColorModeValue("#f4f4f3ff", "gray.700")}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading color={"#7877e6ff"}>Placed Students</Heading>
          <Text color={"gray.600"} textAlign={"center"} p={5}>
            Meet our students who have successfully transitioned into their
            desired careers with our guidance.
          </Text>
        </Stack>
        <Slider {...settings}>
          <Testimonial>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNjI5NTIxNzY0&ixlib=rb-1.2.1&q=80&w=400"
              }
              name={"Alex Johnson"}
              title={"Software Engineer at TechCorp"}
            />
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
          </Testimonial>
          <Testimonial>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNjI5NTIxNzY0&ixlib=rb-1.2.1&q=80&w=400"
              }
              name={"Emily Davis"}
              title={"Marketing Specialist at CreativeWorks"}
            />
            <TestimonialContent>
              <TestimonialHeading>Outstanding Support</TestimonialHeading>
              <TestimonialText>
                The support from TalentConnect was outstanding. They provided
                personalized career counseling and connected me with top
                employers in my field.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNjI5NTIxNzY0&ixlib=rb-1.2.1&q=80&w=400"
              }
              name={"Michael Brown"}
              title={"HR Manager at Innovate Inc."}
            />
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
          </Testimonial>
        </Slider>
      </Container>
    </Box>
  );
}
