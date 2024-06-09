import { Card, CardBody, Flex, Text, Box, HStack, Icon , Tooltip,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { GiTrophyCup } from "react-icons/gi";
import { MdKeyboardArrowRight, MdSpaceDashboard, MdGroups } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { SiGoogletasks } from "react-icons/si";
import { FaFireAlt } from "react-icons/fa";
import NextLink from 'next/link';

const Dash = () => {
  const [isScaled, setIsScaled] = useState(false);

  const handleImageClick = () => {
    setIsScaled(!isScaled);
  };

  const navData = [
     { icon: MdGroups, title: "Ref", link: "/referrals" },
    {icon : SiGoogletasks, title: 'Tasks', link: '/task'},
    { icon: MdSpaceDashboard, title: "Tap", link: "/" },
    {icon: FaFireAlt, title:'Boost', link: '/boost'},
    {icon: IoMdStats, title: 'stats' , link: '/stats'}
  ];

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
          src="/sharp.gif"
          maxW="350px"
          transition="transform 0.1s ease-in-out"
          transform={isScaled ? 'scale(1.1)' : 'scale(1.0)'}
          onClick={handleImageClick}
          cursor="pointer"
        />
      </Flex>


      <Flex
          position="fixed"
          bottom={0}
          left={0}
          right={0}
          
          color={useColorModeValue("#fff", "#fff")}
          p={3}
          justifyContent="space-around"
          zIndex={1}
          display={useBreakpointValue({base: 'flex', md: 'flex', lg: 'none'})}
          bgColor={'#251d33'}
        >
          {navData.map((item, index) => (
            <Tooltip
              
              hasArrow={index == 1 ? true : false}
              placement="top"
            >
              <Flex
                key={item.title}
                flexDir="column"
                align="center"
                as={NextLink}
                href={item.link}
              >
                <Icon as={item.icon} boxSize={5} mb={2} />
                <Text fontSize={{ base: "xs", md: "md" }}>{item.title}</Text>
              </Flex>
              
            </Tooltip>
          ))}

          
          
        </Flex>
    </Flex>
  );
};

export default Dash;
