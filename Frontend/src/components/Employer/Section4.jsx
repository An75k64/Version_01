import React from 'react';
import {
  chakra,
  Stack,
  useColorModeValue,
  Container,
  Link,
  Box,
  Button,
  keyframes,
} from '@chakra-ui/react';

const Index = () => {
  return (
    <Container maxW="full" p={0} m={0}>
      <Section4 />
    </Container>
  );
};

function Section4() {
  // Keyframes for animations
  const fadeIn = keyframes`
    0% { opacity: 0; transform: translateY(10px); }
    100% { opacity: 1; transform: translateY(0); }
  `;

  const pulseAnimation = keyframes`
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  `;

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={5}
      alignItems="center"
      justifyContent="center"
      rounded="lg"
      boxShadow="lg"
      bg={useColorModeValue('gray.100', 'gray.700')}
      p={{ base: 8, md: 12 }}
      m={4}
      position="relative"
      overflow="hidden"
      width="100%"
      animation={`${fadeIn} 0.8s ease-out`}
      _before={{
        content: `""`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://images.unsplash.com/photo-1533741987458-28b150cd6c46?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMjEyNjN8MHwxfGFsbHwxfHx8fHx8fHwxNjg3NzY5MzA&ixlib=rb-1.2.1&q=80&w=1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
        opacity: 0.3,
      }}
    >
      <Box
        bg={useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(0, 0, 0, 0.9)')}
        p={8}
        rounded="lg"
        boxShadow="md"
        textAlign="center"
        zIndex={1}
        width="100%"
        animation={`${fadeIn} 1.2s ease-out`}
      >
        <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold" mb={4}>
          Ready to get started?
        </chakra.h1>
        <chakra.h2
          fontSize="2xl"
          lineHeight={1.2}
          fontWeight="bold"
          bgGradient="linear(to-l, #0ea5e9, #2563eb)"
          bgClip="text"
          mb={6}
          animation={`${pulseAnimation} 2s infinite`}
        >
          Get in touch or create an account.
        </chakra.h2>
        <Button
          as={Link}
          href="company-form"
          color="white"
          variant="solid"
          size="lg"
          rounded="md"
          lineHeight={1}
          bgGradient="linear(to-l, #0ea5e9, #2563eb)"
          _hover={{ bgGradient: 'linear(to-r, #0ea5e9, #2563eb)', transform: 'scale(1.1)' }}
          _active={{ transform: 'scale(0.98)' }}
          transition="all 0.3s ease"
        >
          Get Started
        </Button>
      </Box>
    </Stack>
  );
}

export default Index;
