import React from "react";
import { Box, VStack, Link, Text, Icon } from "@chakra-ui/react";
import { FaTachometerAlt, FaUser, FaSchool, FaBuilding, FaBriefcase, FaPhone } from 'react-icons/fa'; // Import icons from react-icons

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      left="0"
      top="0"
      w={{ base: "full", md: "250px" }}
      h="full"
      bg="gray.200"
      color="black"
      transform={{ base: isOpen ? "translateX(0)" : "translateX(-100%)", md: "translateX(0)" }}
      transition="transform 0.3s ease-in-out"
      zIndex="1000"
    >
      <VStack align="start" spacing={4} mt={6} px={4}>
        <Link 
          href="/admin/dashboard" 
          w="full" 
          _hover={{ 
            bg: "blue.300", 
            color: "white",
            textDecoration: "none",
            transform: "scale(1.05)",  // Upscaling effect
          }}
          transition="all 0.3s ease"  // Smooth transition for scaling
          p={4} 
          borderRadius="md"
          display="flex" 
          alignItems="center" 
        >
          <Icon as={FaTachometerAlt} mr={3} />
          <Text>Dashboard</Text>
        </Link>
        <Link 
          href="/admin/student" 
          w="full" 
          _hover={{ 
            bg: "blue.300", 
            color: "white",
            textDecoration: "none",
            transform: "scale(1.05)", 
          }}
          transition="all 0.3s ease"
          p={4} 
          borderRadius="md"
          display="flex" 
          alignItems="center" 
        >
          <Icon as={FaUser} mr={3} />
          <Text>Student</Text>
        </Link>
        <Link 
          href="/admin/college" 
          w="full" 
          _hover={{ 
            bg: "blue.300", 
            color: "white",
            textDecoration: "none",
            transform: "scale(1.05)", 
          }}
          transition="all 0.3s ease"
          p={4} 
          borderRadius="md"
          display="flex" 
          alignItems="center" 
        >
          <Icon as={FaSchool} mr={3} />
          <Text>College</Text>
        </Link>
        <Link 
          href="/admin/company" 
          w="full" 
          _hover={{ 
            bg: "blue.300", 
            color: "white",
            textDecoration: "none",
            transform: "scale(1.05)", 
          }}
          transition="all 0.3s ease"
          p={4} 
          borderRadius="md"
          display="flex" 
          alignItems="center" 
        >
          <Icon as={FaBuilding} mr={3} />
          <Text>Company</Text>
        </Link>
        <Link 
          href="/admin/post-job" 
          w="full" 
          _hover={{ 
            bg: "blue.300", 
            color: "white",
            textDecoration: "none",
            transform: "scale(1.05)", 
          }}
          transition="all 0.3s ease"
          p={4} 
          borderRadius="md"
          display="flex" 
          alignItems="center" 
        >
          <Icon as={FaBriefcase} mr={3} />
          <Text>Post a Job</Text>
        </Link>
        <Link 
          href="/admin/contact-support" 
          w="full" 
          _hover={{ 
            bg: "blue.300", 
            color: "white",
            textDecoration: "none",
            transform: "scale(1.05)", 
          }}
          transition="all 0.3s ease"
          p={4} 
          borderRadius="md"
          display="flex" 
          alignItems="center" 
        >
          <Icon as={FaPhone} mr={3} />
          <Text>Contact Support</Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
