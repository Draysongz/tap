import React from "react";
import { Card, CardBody, Flex, Text, Box, HStack, Icon , Tooltip,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react';
import Image from "next/image";
import { CiTrophy } from "react-icons/ci";
import { MdKeyboardArrowRight, MdSpaceDashboard, MdGroups } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { SiGoogletasks } from "react-icons/si";
import { FaFireAlt } from "react-icons/fa";
import Link from "next/link";
import NextLink from 'next/link';
import BoostCard from "@/components/BoostCard";
import { IoDiamondOutline } from "react-icons/io5";
import { SiOpenmined } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { MdOutlineLocalDrink } from "react-icons/md";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Boost = () => {
    const navData = [
        { icon: MdGroups, title: "Ref", link: "/referrals" },
       {icon : SiGoogletasks, title: 'Tasks', link: '/task'},
       { icon: MdSpaceDashboard, title: "Tap", link: "/" },
       {icon: FaFireAlt, title:'Boost', link: '/boost'},
       {icon: IoMdStats, title: 'stats' , link: '/stats'}
     ];

    return(
        <div className="pt-10 bg-[#000000] h-screen pb-12">
            <div className={`${poppins.className} pt-6 text-white`}>
              <div className="one text-center pb-4">
                <p className="text-3xl font-semibold text-white pb-1">1 898</p>
                <p className="text-sm font-semibold"><span className="text-yellow-400">.</span> Legendary <span className="text-yellow-400">.</span></p>
              </div>
              <div className="two text-white">
                <p className="pl-2 text-xl font-semibold">Boosters</p>
                  <div className="border w-11/12 px-2 pt-6 pb-4 mb-4 mt-2 border-[#000000] rounded-md bg-[#2a2522] mx-auto">
                  <div className="one flex justify-between pb-2">
                    <SiFastapi className="w-12 h-12 border border-[#2a2522] bg-[#271608] px-2 rounded-full" />
                    <div>
                      <p>Multitap Feature</p>
                      <p className="text-sm font-semibold text-center">2000 . 1M</p>
                    </div>
                    <MdKeyboardArrowRight className="w-6 h-6 mt-2"/>
                  </div>
                  <div className="two flex justify-between pb-2">
                  <MdOutlineLocalDrink className="w-12 h-12 border border-[#2a2522] bg-[#271608] px-2 rounded-full" />
                    <div>
                      <p>Daily Attempts</p>
                      <p className="text-sm font-semibold text-center">2000 . 1M</p>
                    </div>
                    <MdKeyboardArrowRight className="w-7 h-7 mt-2 pb-2"/>
                  </div>
                  <div className="three flex justify-between">
                  <SiOpenmined className="w-12 h-12 border border-[#2a2522] bg-[#271608] px-2 rounded-full" />
                    <div>
                      <p>Auto Miner</p>
                      <p className="text-sm font-semibold text-center">2000 . 1M</p>
                    </div>
                    <MdKeyboardArrowRight className="w-6 h-6 mt-2"/>
                  </div>
                </div>
              </div>
              <div className="three border w-11/12 rounded-md border-[#000000] bg-[#2a2522] mx-auto px-2 pt-6 pb-4">
                <IoDiamondOutline className="text-[#0089d2] mx-auto w-[65px] h-[65px] mb-2"/>
                <h2 className="text-center text-yellow-600 font-semibold">Umaxcoin x2</h2>
                <p className="text-sm">Double your coins and level up even faster!</p>
                <button className="text-sm font-semibold mt-4 ml-3 bg-gradient-to-r from-[#ffa800] to-[#f58333] w-11/12 text-center py-3 rounded-full">Play now</button>
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
          bgColor={'#1f2221'}
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
    )
}

export default Boost;