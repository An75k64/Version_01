import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, Text, useTheme, Heading, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const cardData = [
  {
    title: 'Ajit Gupta',
    image: 'https://www.gyanone.com/wp-content/webp-express/webp-images/uploads/2020/07/Abhigyan-Dubey-300x300.jpg.webp',
    description: 'Placed at Hitachi',
  },
  {
    title: 'Noor Fatima',
    image: 'https://www.indiancomputer.co.in/wp-content/uploads/2023/04/businessmen-hands-white-table-300x300.jpg',
    description: 'Placed at TCS',
  },
  {
    title: 'Rohit Raj',
    image: 'https://media.licdn.com/dms/image/C4D03AQHqO6VIq7GEyg/profile-displayphoto-shrink_400_400/0/1648231702101?e=2147483647&v=beta&t=diSU37DiHYNitQptD5ufUx-BDfHRAFY2v_2MlQtOwzs',
    description: 'Placed at Dell',
  },
  {
    title: 'Aditi Sharma',
    image: 'https://nirrch.res.in/wp-content/uploads/2019/04/antara-banerjee-300x300.jpg',
    description: 'Placed at SBI',
  },
];

const AutoSliding3DCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Flex direction="column" alignItems="center" mt={10} mb={10} position="relative">
      <Heading mb={6} color={theme.colors.blue[400]}>
        Placed Students
      </Heading>
      <Flex
        alignItems="center"
        justifyContent="center"
        position="relative"
        width="100%"
        maxW="1300px"
        boxShadow="xl"
        borderRadius="lg"
        p={4}
        bg="gray.100"
        overflow="hidden"
        bgImage={''}
      >
        {/* Left Arrow Icon */}
        <IconButton
          icon={<ArrowBackIcon />}
          aria-label="Previous"
          position="absolute"
          left="50px"
          top="50%"
          transform="translateY(-50%)"
          onClick={handlePrev}
          colorScheme="blue"
          bg="blue.400"
          _hover={{ bg: "blue.500" }}
          borderRadius={'20px'}
          boxShadow="md"
          zIndex={2}
        />

        <Flex
          position="relative"
          width="100%"
          height={['350px', '400px', '500px']}
          justifyContent="center"
          alignItems="center"
          perspective="1500px"
        >
          {cardData.map((card, index) => {
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % cardData.length;
            const isPrev = index === (currentIndex - 1 + cardData.length) % cardData.length;

            return (
              <Box
                key={index}
                transform={
                  isActive
                    ? 'scale(1) rotateY(0deg)'
                    : isNext
                    ? 'scale(0.9) rotateY(15deg) translateX(120%)'
                    : isPrev
                    ? 'scale(0.9) rotateY(-15deg) translateX(-120%)'
                    : 'scale(0.8) rotateY(0deg) translateZ(-100px)'
                }
                transition="transform 0.7s ease"
                position="absolute"
                width={['250px', '280px', '300px']}
                height={['300px', '350px', '400px']}
                boxShadow="2xl"
                rounded="lg"
                bg={isActive ? theme.colors.blue[500] : 'gray.100'}
                color={isActive ? 'white' : 'black'}
                p={2}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                opacity={isActive || isNext || isPrev ? 1 : 0.5}
                zIndex={isActive ? 3 : 1}
              >
                <Image src={card.image} alt={card.title} rounded="md" mb={4} />
                <Text fontSize="xl" fontWeight="bold">
                  {card.title}
                </Text>
                <Text mt={2} textAlign="center">
                  {card.description}
                </Text>
              </Box>
            );
          })}
        </Flex>

        {/* Right Arrow Icon */}
        <IconButton
          icon={<ArrowForwardIcon />}
          aria-label="Next"
          position="absolute"
          right="50px"
          top="50%"
          transform="translateY(-50%)"
          onClick={handleNext}
          colorScheme="blue"
          bg="blue.400"
          _hover={{ bg: "blue.500" }}
          borderRadius={'20px'}
          boxShadow="md"
          zIndex={2}
        />
      </Flex>
    </Flex>
  );
};

export default AutoSliding3DCardSlider;
