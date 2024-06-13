import React, { useState } from "react";
import { Card, CardBody, Flex, Text, Box, HStack, Icon , Tooltip,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react';
import { MdKeyboardArrowRight, MdSpaceDashboard, MdGroups } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { SiGoogletasks } from "react-icons/si";
import { FaFireAlt } from "react-icons/fa";
import Head from "next/head";
import NextLink from 'next/link';
import Link from "next/link";
import Image from "next/image";

const Stats = () => {
  const [activeLink, setActiveLink] = useState("/stats");

    const navData = [
        { icon: MdGroups, title: "Ref", link: "/referrals" },
       {icon : SiGoogletasks, title: 'Tasks', link: '/task'},
       { icon: MdSpaceDashboard, title: "Tap", link: "/" },
       {icon: FaFireAlt, title:'Boost', link: '/boost'},
       {icon: IoMdStats, title: 'stats' , link: '/stats'}
     ];

     const handleNavClick = (link) => {
      setActiveLink(link);
    };

    return(
      <>
      <Head>
        <title>Stats - Umax Network</title>
      </Head>
        <div className="bg-[#10171d] h-screen">
            <div className="balance text-center pt-8 pb-6">
                <h1 className="text-gray-500">Total Share Balance</h1>
                <p className="text-4xl flex justify-center font-bold text-white">
                  <Image 
                    src={"/sharp.gif"}
                    width={50}
                    height={50}
                  />
                  137.869 U</p>
            </div>
            <hr className="border-t border-gray-700 my-4" />
            <div className="text-center">
                <h1 className="text-gray-500 font-semibold">Total Taps:</h1>
                <p className="text-white text-lg font-bold pb-4">1 897</p>
                <h1 className="text-gray-500 font-semibold">Total Players:</h1>
                <p className="text-white text-lg font-bold pb-4">44 594 161</p>
                <h1 className="text-gray-500 font-semibold">Daily Users:</h1>
                <p className="text-white text-lg font-bold pb-4">17 253 657</p>
                <h1 className="text-gray-500 font-semibold">Online Players:</h1>
                <p className="text-white text-lg font-bold">494 471</p>
            </div>
            <Flex
          position="fixed"
          bottom={0}
          left={0}
          right={0}
          color={useColorModeValue("#fff", "#fff")}
          p={3}
          justifyContent="space-around"
          zIndex={1}
          display={useBreakpointValue({ base: "flex", md: "flex", lg: "none" })}
          bgColor={"#1f2221"}
        >
          {navData.map((item, index) => (
            <Tooltip hasArrow={index === 1} placement="top" key={item.title}>
              <Flex
                flexDir="column"
                align="center"
                as={NextLink}
                href={item.link}
                onClick={() => handleNavClick(item.link)}
                className={activeLink === item.link ? "text-[#2bc4c3]" : ""}
              >
                <Icon as={item.icon} boxSize={5} mb={2} />
                <Text fontSize={{ base: "xs", md: "md" }}>{item.title}</Text>
              </Flex>
            </Tooltip>
          ))}
        </Flex>
        </div>
        </>
    )
}

export default Stats;