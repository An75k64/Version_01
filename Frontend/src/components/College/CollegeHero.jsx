import React, { useState } from 'react';
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function CollegeHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex
      w={'full'}
      h={'100vh'}
      position="relative"
      overflow="hidden"
    >
      {/* Background image with blur effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          filter: isHovered ? 'none' : 'blur(10px)',
          transition: 'filter 0.3s ease'
        }}
      />

      {/* Content overlay */}
      <VStack
        w={'full'}
        h={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        position="relative"
        zIndex={1}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "6xl", md: "6xl" })}
            textAlign="center"
            fontFamily={"ClashDisplay"}
          >
            Empower Your College’s Recruitment<br /> with TalentConnect
          </Text>
          <Text
            color={'white'}
            fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
            textAlign="center"
          >
            Connect with top employers, streamline your recruitment, and bridge skill gaps with our innovative platform.
          </Text>
          <Stack direction={'row'} spacing={10} mt={6} justify="center" paddingLeft={"36%"}>
           <Link to="/college-form">
                <Button
                position="relative"
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                _after={{
                    content: '""',
                    position: 'absolute',
                    top: '-10px',
                    left: '-10px',
                    width: 'calc(100% + 20px)',
                    height: 'calc(100% + 20px)',
                    borderRadius: 'full',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
                    animation: isHovered ? 'glow 1.5s infinite alternate' : 'none',
                }}
                _focus={{ boxShadow: 'none' }}
                >
                Initiate Your Placement
                </Button>
            </Link>
          </Stack>
        </Stack>
      </VStack>
      
      {/* Keyframes for glowing effect */}
      <style>
        {`
          @keyframes glow {
            0% {
              transform: scale(1);
              opacity: 0.6;
            }
            100% {
              transform: scale(1.1);
              opacity: 1;
            }
          }
        `}
      </style>
    </Flex>
  );
}
