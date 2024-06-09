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
import TappyCard from "@/components/TappyCard";

const Boost = () => {
    const navData = [
        { icon: MdGroups, title: "Ref", link: "/referrals" },
       {icon : SiGoogletasks, title: 'Tasks', link: '/task'},
       { icon: MdSpaceDashboard, title: "Tap", link: "/" },
       {icon: FaFireAlt, title:'Boost', link: '/boost'},
       {icon: IoMdStats, title: 'stats' , link: '/stats'}
     ];

    return(
        <div className="pt-10 bg-[#10171d] h-screen pb-12">
            <div>
                <p className="text-gray-600 text-center font-semibold">Your Share balance</p>
                <p className="font-bold text-4xl flex justify-center text-white pb-4">
                    <Image 
                        src={"/coin.png"}
                        width={50}
                        height={50}
                    />
                    123 434
                </p>
            </div>
            <hr className="border-t border-gray-700 my-4" />
            <div>
                <h1 className="text-white font-semibold text-xl pb-8 pl-3">Your daily boosters:</h1>
                <div className="flex">
                    <BoostCard text={"Tapping Guru"} p={"3/3"} image={"/coin.png"}/>
                    <BoostCard text={"Full Tank"} p={"3/3"} image={"/coin.png"}/>
                </div>
            </div>
            <div className="pt-4">
                <h1 className="text-lg pl-3 font-semibold text-white pb-4">Boosters:</h1>
                <div className="gap-4">
                    <TappyCard 
                        image={"/coin.png"}
                        text={"Boost X2"}
                        p={"0.5 TON"}
                    />
                     <TappyCard 
                        image={"/coin.png"}
                        text={"Multitap"}
                        p={"2 TON"}
                    />
                     <TappyCard 
                        image={"/coin.png"}
                        text={"Energy Limit"}
                        p={"0.1 TON"}
                    />
                     <TappyCard 
                        image={"/coin.png"}
                        text={"Tap Bot"}
                        p={"0.1 TON"}
                    />
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
    )
}

export default Boost;