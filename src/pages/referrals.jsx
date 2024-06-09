import React from "react";
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
import NextLink from 'next/link';
import Link from "next/link";

const Referral = () => {
    const navData = [
        { icon: MdGroups, title: "Ref", link: "/referrals" },
       {icon : SiGoogletasks, title: 'Tasks', link: '/task'},
       { icon: MdSpaceDashboard, title: "Tap", link: "/" },
       {icon: FaFireAlt, title:'Boost', link: '/boost'},
       {icon: IoMdStats, title: 'stats' , link: '/stats'}
     ];

    return(
        <>
        <Head>
            <title>Referrals - TapSwap</title>
        </Head>
        <div className="bg-[#10171d] text-lg text-white h-screen">
            <div>
                <h1 className="text-center pt-8 text-2xl">0 Referrals</h1>
                <p className="text-center text-green-600 text-sm pb-2">+0</p>
                <div className="shadow-lg w-10/12 mx-auto border border-[#10171d] px-3 py-2 bg-gray-900 rounded-md mb-8">
                    <div className="flex justify-between">
                        <h1 className="text-md">My invite link:</h1>
                        <button className="border border-[#10171d] px-4 text-sm font-bold  py-2 bg-indigo-950 text-white rounded-full">copy</button>
                    </div>
                    <Link href="/" className="text-sm">https://t.me/tapswap_bot</Link>
                </div>
                <div className="referrals">
                    <h1 className="ml-4">My Referrals:</h1>
                    <div className="text-center pt-12">You have no referrals 😭</div>
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
        </div>
        </>
    )
}

export default Referral;