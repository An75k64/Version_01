import React from 'react'
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'

function Section1() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1560439513-74b037a25d84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      objectFit={'cover'}
      
      >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'4xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>
            Make your next hire with
          </Text>
          <Text
            color={'blue.400'}
            fontWeight={700}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>
            Talent Connect
          </Text>
          <Text
            color={'white'}
            fontWeight={400}
            lineHeight={1}
            fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
          We can help you expand your reach and get your jobs in front of the right candidates.
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Employer Enrollment
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}

export default Section1