import React from "react";
import { Card, CardBody, Flex, Text, Box, HStack, Icon , Tooltip,
    useColorModeValue,
    useBreakpointValue,
} from '@chakra-ui/react';
import Image from "next/image";
import { GiTrophyCup } from "react-icons/gi";
import { MdKeyboardArrowRight, MdSpaceDashboard, MdGroups } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { SiGoogletasks } from "react-icons/si";
import { FaFireAlt } from "react-icons/fa";
import Link from "next/link";
import NextLink from 'next/link';
import TapCard from "@/components/TapCard";

const Tasks = () => {
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
                <p className="font-bold text-4xl flex justify-center text-white pb-4">
                    <Image 
                        src={"/sharp.gif"}
                        width={60}
                        height={60}
                    />
                    123 434
                </p>
                <p className="flex justify-center text-md text-white">
                <GiTrophyCup className="text-[#cd7f32] w-4 h-4 mr-1 mt-1"/>
                Bronze
                <MdKeyboardArrowRight className="w-5 h-5 mt-1"/>
                </p>
            </div>
            <hr className="border-t border-gray-700 my-4" />
            <div className="border flex w-9/12 mx-auto border-gray-700 py-2 justify-center rounded-md">
                <Link href="#" className="text-white mr-4">Special</Link>
                <Link href="#" className="text-white mr-4 shadow-lg border-gray-800">Leagues</Link>
                <Link href="#" className="text-white">Ref Tasks</Link>
            </div>
            <div className="pt-4">
                <TapCard 
                    text={"Silver"}
                    coin={"5000"}
                    className={"text-violet-400 w-10 h-10 mr-1 mt-1"}
                />
                 <TapCard 
                    text={"Gold"}
                    coin={"10000"}
                    className={"text-yellow-500 w-10 h-10 mr-1 mt-1"}
                />
                 <TapCard 
                    text={"Platinum"}
                    coin={"30000"}
                    className={"text-indigo-600 w-10 h-10 mr-1 mt-1"}
                />
                 <TapCard 
                    text={"Diamond"}
                    coin={"50000"}
                    className={"text-[#cd7f32] w-10 h-10 mr-1 mt-1"}
                />
                 <TapCard 
                    text={"Master"}
                    coin={"100000"}
                    className={"text-[#cd7f32] w-10 h-10 mr-1 mt-1"}
                />
                 <TapCard 
                    text={"Grandmaster"}
                    coin={"1000000"}
                    className={"text-[#cd7f32] w-10 h-10 mr-1 mt-1"}
                />
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

export default Tasks;