import React from 'react';
import { Box, Flex, Image, Heading, keyframes } from '@chakra-ui/react';

// List of companies with their logos
const companiesList = [
  { name: "ARUN ENG & CO", logo: "https://example.com/arun_eng_logo.png" },
  { name: "Arka Jain", logo: "https://example.com/arka_jain_logo.png" },
  { name: "Jharkhand IT Solutions", logo: "https://www.jharkhanditsolutions.com/wp-content/uploads/2016/10/logo-final.png" },
  { name: "Hitachi Payment Services", logo: "https://www.hitachi-payments.com/wp-content/uploads/2023/06/pARTNER-OF-CHOICE.png" },
  { name: "Hitachi Chennai", logo: "https://example.com/hitachi_chennai_logo.png" },
  { name: "Emversity", logo: "https://abnd.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femversityt.c8166fd4.jpg&w=1920&q=75" },
  { name: "Hitachi Mumbai", logo: "https://example.com/hitachi_mumbai_logo.png" },
  { name: "Hitachi North East", logo: "https://example.com/hitachi_ne_logo.png" },
  { name: "Hitachi Jaipur", logo: "https://example.com/hitachi_jaipur_logo.png" },
  { name: "Hitachi Assam", logo: "https://example.com/hitachi_assam_logo.png" },
  { name: "Winso Software Pvt Ltd", logo: "https://example.com/winso_logo.png" },
  { name: "CMS", logo: "https://example.com/cms_logo.png" },
  { name: "M/s Unique Engineer's", logo: "https://example.com/unique_engineers_logo.png" },
  { name: "Blue Craft", logo: "https://example.com/blue_craft_logo.png" },
  { name: "A.K ENGINEERING CORPORATION", logo: "https://example.com/ak_engineering_logo.png" },
  { name: "JINDAL ORRISA", logo: "https://example.com/jindal_orrisa_logo.png" }
];


// Duplicated list to ensure seamless scrolling
const duplicatedList = [...companiesList, ...companiesList];

const scrollAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }  // Move by half of the total width
`;

const Companies = () => {
  // Calculate the total width required for seamless scrolling
  const containerWidth = duplicatedList.length * 165; // Assuming each item is approximately 150px wide

  return (
    <Box textAlign="center" py="8">
      <Heading as="h4" size="xl" mb="8"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontFamily={"ClashDisplay"}
          color={"blue.400"} // Change to your desired color
          
          >
        Top Startups & MNC’s that Hire from TalentConnect
      </Heading>
      <Box overflow="hidden" width="100%">
        <Flex
          as="ul"
          listStyleType="none"
          width={`${containerWidth}px`}  // Set width based on duplicated list
          animation={`${scrollAnimation} 60s linear infinite`}  // Adjust animation duration as needed
          whiteSpace="nowrap"
        >
          {duplicatedList.map((company, index) => (
            <Box as="li" key={index} mx="4" display="inline-block">
              <Image src={company.logo} alt={company.name} height="50px" />
              
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Companies;
