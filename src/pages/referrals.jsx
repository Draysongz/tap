import React, { useState } from "react";
import { Card, CardBody, Flex, Text, Box, HStack, Icon , Tooltip,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react';
import { GiTrophyCup } from "react-icons/gi";
import { MdKeyboardArrowRight, MdSpaceDashboard, MdGroups } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { SiGoogletasks } from "react-icons/si";
import { FaFireAlt } from "react-icons/fa";
import Head from "next/head";
import Image from "next/image";
import { FaHandshake } from "react-icons/fa";
import NextLink from 'next/link';
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Referral = () => {
  const [activeLink, setActiveLink] = useState("/referrals");

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
            <title>Invite - Umax Network</title>
        </Head>
        <div className="bg-[#000000] text-lg text-white h-screen">
            <div className={`pt-12 ${poppins.className}`}>
              <FaHandshake className="w-20 h-20 mx-auto text-yellow-500" />
              <p className="text-center pt-2 font-semibold text-2xl pb-6">0 Friends</p>
              <p className="w-11/12 border border-[#000000] mx-auto px-2 py-1 bg-[#1f2221] text-center text-lg rounded-md font-semibold mb-3">+0 UmaxCoin</p>
              <div>
                <p className="pl-4 text-lg text-yellow-600 font-semibold pb-2">Invite friends to get bonuses</p>
                <div className="rounded-md w-11/12 border border-[#000000] bg-[#1f2221] mx-auto px-2 py-3">
                <div className="flex justify-center">
                  <div className="">
                    <Image 
                      src={"/telegram_logo.svg"}
                      width={80}
                      height={80}
                      className="mx-auto"
                      alt="Top Image"
                    />
                    <p className="text-sm font-semibold">Telegram User</p>
                    <p className="text-[#2bc4c3] text-center font-semibold">12000</p>
                  </div>
                  </div>
                <p className="text-white font-semibold text-sm text-center">FOR YOU AND A FRIEND</p>
                </div>
                <button className="text-sm font-semibold mt-4 ml-3 bg-gradient-to-r from-yellow-400 to-yellow-600 w-11/12 text-center py-3 rounded-full">Invite a friend</button>
              </div>
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

export default Referral;