import React from "react";
import {
  Box,
  Flex,
  Text,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { HashLink as Link } from "react-router-hash-link";

// Define your navigation items here
const NAV_ITEMS = [
  {
    label: "Service",
    href: "/#our-services",
    children: [
      { label: "OnCampus", href: "/oncampus" },
      { label: "Offcampus", href: "/offcampus" },
      { label: "Seminar", href: "/seminar" },
      { label: "Counselling", href: "/counselling" },
      { label: "CareerCraft", href: "/careercraft" },
      {
        label: "Workforce provider",
        subLabel: "Staffing solution",
        href: "/workforce",
      },
    ],
  },
  {
    label: "Jobs",
    href: "/#ready-to-transform",
    children: [
      { label: "Current opening", href: "/jobs/current-opening" },
      { label: "Post your Resume", href: "/jobs/post-resume" },
    ],
  },
  { label: "Employer", href: "/employer" },
  { label: "College", href: "/college" },
  { label: "CampusToCubicle", href: "/campus-to-cubicle" },
  { label: "Contact us", href: "/contact" },
  
  
];

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("blue.400", "blue.300");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          {navItem.children ? (
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  as={Link} // Use HashLink here
                  to={navItem.href}
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                    borderBottom: "2px solid",
                    borderColor: linkHoverColor,
                    position: "relative",
                    _after: {
                      content: `""`,
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      width: "100%",
                      height: "2px",
                      backgroundColor: linkHoverColor,
                      transition: "width 0.2s ease-in-out",
                    },
                  }}
                >
                  {navItem.label}
                </Box>
              </PopoverTrigger>

              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            </Popover>
          ) : (
            <Box
              
              as={Link} // Use HashLink here
              to={navItem.href}
              href={navItem.href ?? "#"}
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
                borderBottom: "2px solid",
                borderColor: linkHoverColor,
                position: "relative",
                _after: {
                  content: `""`,
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: linkHoverColor,
                  transition: "width 0.2s ease-in-out",
                },
              }}
            >
              {navItem.label}
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  const subNavHoverColor = useColorModeValue("blue.400", "blue.300");

  return (
    <Link to={href}>
      <Box
      
        
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{
          bg: useColorModeValue("blue.50", "gray.900"),
          position: "relative",
          _after: {
            content: `""`,
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: "2px",
            backgroundColor: subNavHoverColor,
            transition: "width 0.2s ease-in-out",
          },
        }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text transition={"all .3s ease"} fontWeight={500}>
              {label}
            </Text>
            {subLabel && <Text fontSize={"sm"}>{subLabel}</Text>}
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"blue.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
  </Link>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const textColor = useColorModeValue("gray.600", "gray.200");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as={Link}
        to={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
          position: "relative",
          _after: {
            content: `""`,
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: "2px",
            backgroundColor: hoverColor,
            transition: "width 0.2s ease-in-out",
          },
        }}
      >
        <Text fontWeight={600} color={textColor}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={borderColor}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                as={Link}
                key={child.label}
                py={2}
                to={child.href}
                _hover={{
                  textDecoration: "none",
                  position: "relative",
                  _after: {
                    content: `""`,
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: hoverColor,
                    transition: "width 0.2s ease-in-out",
                  },
                }}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const MobileNav = () => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Stack bg={bg} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const Navigation = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
};

export { DesktopNav, MobileNav };
export default Navigation;
