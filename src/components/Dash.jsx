import { Card, CardBody, Flex, Text, Box, HStack, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { GiTrophyCup } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";

const Dash = () => {
  const [isScaled, setIsScaled] = useState(false);

  const handleImageClick = () => {
    setIsScaled(!isScaled);
  };

  return (
    <Flex minH="100vh" bgColor="#10171d" direction="column" alignItems="center" justifyContent="center">
      {/* scorecount */}
      <Flex direction="column" alignItems="center" zIndex={1} mb={8}>
        <Text color="white" fontSize="4xl" textAlign="center">123 434</Text>
        <HStack>
          <Icon as={GiTrophyCup} boxSize={3} color="#FFFF6C" />
          <Text color="white">Legendary</Text>
          <Icon as={MdKeyboardArrowRight} boxSize={4} color="white" />
        </HStack>
      </Flex>

      {/* Floating image */}
      <Flex alignItems="center" justifyContent="center" w="100%" zIndex={0}>
        <Box
          as="img"
          src="/coin.png"
          maxW="350px"
          transition="transform 0.3s ease-in-out"
          transform={isScaled ? 'scale(1.1)' : 'scale(1.0)'}
          onClick={handleImageClick}
          cursor="pointer"
        />
      </Flex>
    </Flex>
  );
};

export default Dash;
