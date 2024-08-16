import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { DesktopNav, MobileNav } from "./Navigation.jsx";
import Logo from "./Logo.jsx"; // Import the Logo component

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000} // Ensure it's on top of all elements
      transition="transform 0.3s ease-in-out"
      transform={isVisible ? "translateY(0)" : "translateY(-100%)"}
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify={{ base: "space-between", md: "center" }} // Center on desktop, space between on mobile
        position="relative"
      >
        {/* Hamburger Icon on mobile */}
        <Flex
          flex={{ base: 1, md: "none" }}
          ml={{ base: -2, md: 0 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            color={useColorModeValue("pink.600", "pink.300")}
          />
        </Flex>

        {/* Logo in the center on mobile and desktop */}
        <Flex
          flex={{ base: 1, md: "none" }}
          justify={{ base: "center", md: "center" }} // Center on both mobile and desktop
          position={{ base: "absolute", md: "relative" }} // Position absolute to center the logo
          left={{ base: "50%", md: "0" }}
          transform={{ base: "translateX(-50%)", md: "none" }} // Center the logo with transform
        >
          <Logo />
        </Flex>

        {/* Navbar in the center on desktop view */}
        <Flex
          flex={{ base: 0, md: 1 }}
          justify={"center"} // Center the navbar on desktop
          align="center"
          display={{ base: "none", md: "flex" }}
        >
          <DesktopNav />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;
