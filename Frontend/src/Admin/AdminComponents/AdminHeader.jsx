import React from "react";
import { Flex, Box, IconButton, Image, Button } from "@chakra-ui/react";
import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";

const AdminHeader = ({ onOpenSidebar }) => {
  return (
    <Flex 
      as="header" 
      position="fixed" 
      top="0" 
      left="0" 
      w="full" 
      bg="white" 
      color="black" 
      p={4} 
      alignItems="center" 
      justifyContent="space-between"
      zIndex="1000"  // Ensure the header is above other content
      boxShadow="md"  // Adds a subtle shadow for better visibility
    >
      {/* Hamburger Menu for Mobile */}
      <Box display={{ base: "block", md: "none" }}>
        <IconButton 
          icon={<HamburgerIcon />} 
          onClick={onOpenSidebar} 
          variant="outline" 
          aria-label="Open Sidebar" 
        />
      </Box>

      {/* Logo centered */}
      <Image src="/src/assets/images/Logo/logo.png" alt="Company Logo" h="60px" mx="auto"   />

      {/* Notification and Logout on the right */}
      <Flex alignItems="center">
        <IconButton 
          icon={<BellIcon />} 
          variant="outline" 
          borderColor="black"
          _hover={{ bg: "blue.300" }}
          aria-label="Notifications" 
          mr={4} 
        />
        <Button 
          variant="outline" 
          color="black"  // Text color
          borderColor="black"  // Border color
          _hover={{ bg: "blue.300" }}  // Hover effect
          aria-label="Logout"
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};

export default AdminHeader;
