import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CollegeCTA = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens, horizontally on larger screens
      align="center"
      justify="space-between"
      p={8}
      bg="blue.50"
    >
      <Box flex={1} textAlign={{ base: 'center', md: 'left' }} mb={{ base: 6, md: 0 }}>
        <Text fontSize={"50px"} fontWeight="bold" mb={4} fontFamily={"ClashDisplay"}>
          Empower Your Institution Today
        </Text>
        <Text fontSize={"20px"} color="gray.600">
          Join TalentConnect and revolutionize your campus recruitment.
        </Text>
      </Box>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify={{ base: 'center', md: 'flex-start' }}
      >
         <Link to="/college-form">
        <Button
          colorScheme="blue"
          size="lg"
          mb={{ base: 4, md: 0 }}
          mr={{ base: 0, md: 4 }}  // Add margin-right on medium screens and larger
          onClick={() => console.log('Get Started clicked')}
        >
          Get Started
        </Button>
        </Link>

        <Link to="/contact">
        <Button
          variant="outline"
          colorScheme="blue"
          size="lg"
          ml={{ base: 0, md: 4 }}  // Add margin-left on medium screens and larger
          onClick={() => console.log('Contact Us clicked')}
        >
          Contact Us
        </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default CollegeCTA;
