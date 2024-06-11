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
import { MdEnergySavingsLeaf } from "react-icons/md";
import Link from "next/link";
import NextLink from 'next/link';
import { FaHandshake } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaCircleDot } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Tasks = () => {
    const navData = [
        { icon: MdGroups, title: "Ref", link: "/referrals" },
       {icon : SiGoogletasks, title: 'Tasks', link: '/task'},
       { icon: MdSpaceDashboard, title: "Tap", link: "/" },
       {icon: FaFireAlt, title:'Boost', link: '/boost'},
       {icon: IoMdStats, title: 'stats' , link: '/stats'}
     ];

    return(
        <div className="pt-10 bg-[#000000] h-full pb-12">
            <div className={`earn text-white ${poppins.className}`}>
              <div>
                <FaSackDollar className="text-yellow-500 w-20 h-20 mb-3 mx-auto" />
              <p className="text-center text-xl font-semibold pb-4">Earn more UmaxCoin</p>
              <div className="border w-11/12 px-2 py-2 mb-4 mt-2 border-[#000000] rounded-md bg-[#2a2522] mx-auto">
                  <div className="one flex justify-between pb-2">
                    <FaHandshake className="text-yellow-500 w-12 h-12 border border-[#2a2522] bg-[#271608] px-2 rounded-full" />
                    <div>
                      <p>Invite Bonus</p>
                      <p className="text-sm font-semibold text-center">up to 12000 for friend</p>
                    </div>
                    <MdKeyboardArrowRight className="w-7 h-7 mt-2 pb-2"/>
                </div>
              </div>
              </div>
              <div>
                <h1 className="pl-2 text-lg font-semibold">Specials</h1>
                <div className="border w-11/12 px-2 pt-6 pb-4 mb-4 mt-2 border-[#000000] rounded-md bg-[#2a2522] mx-auto">
                  <div className="one flex justify-between pb-2">
                    <FaInstagram className="text-pink-700 w-12 h-12 border border-[#2a2522] bg-white px-2 rounded-full" />
                    <div>
                      <p className="text-gray-300">Follow on Instagram</p>
                      <p className="text-sm font-semibold text-center">+10000</p>
                    </div>
                    <MdKeyboardArrowRight className="w-6 h-6 mt-2"/>
                  </div>
                  <div className="two flex justify-between pb-2">
                  <FaXTwitter className="text-black w-12 h-12 border border-[#2a2522] bg-white px-2 rounded-full" />
                    <div>
                      <p className="text-gray-300">Follow on X</p>
                      <p className="text-sm font-semibold text-center">+10000</p>
                    </div>
                    <MdKeyboardArrowRight className="w-7 h-7 mt-2 pb-2"/>
                  </div>
                  <div className="three flex justify-between">
                  <FaTelegramPlane className="w-12 h-12 border border-[#2a2522] px-2 rounded-full" />
                    <div>
                      <p className="text-gray-300">Follow Telegram Community</p>
                      <p className="text-sm font-semibold text-center">+10000</p>
                    </div>
                    <MdKeyboardArrowRight className="w-6 h-6 mt-2"/>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-lg pl-2 font-semibold">Bonuses</h1>
                <div className="border w-11/12 px-2 pt-6 pb-4 mb-4 mt-2 border-[#000000] rounded-md bg-[#2a2522] mx-auto">
                  <div className="one flex justify-between pb-2">
                    <FaUserFriends className="w-12 h-12 border border-[#2a2522] text-black bg-white px-2 rounded-full" />
                    <div>
                      <p className="text-gray-300">Follow on Facebook</p>
                      <p className="text-sm font-semibold text-center">+10000</p>
                    </div>
                    <MdKeyboardArrowRight className="w-6 h-6 mt-2"/>
                  </div>
                  <div className="two flex justify-between pb-2">
                  <FaTelegramPlane className="text-black w-12 h-12 border border-[#2a2522] bg-white px-2 rounded-full" />
                    <div>
                      <p className="text-gray-300">Join Telegram Group</p>
                      <p className="text-sm font-semibold text-center">+10000</p>
                    </div>
                    <MdKeyboardArrowRight className="w-7 h-7 mt-2 pb-2"/>
                  </div>
                  <div className="three flex justify-between">
                  <FaCircleDot className="text-black w-12 h-12 border border-[#2a2522] bg-white px-2 rounded-full" />
                    <div>
                      <p className="text-gray-300">Invite 100 friends</p>
                      <p className="text-sm font-semibold text-center">+30000</p>
                    </div>
                    <MdKeyboardArrowRight className="w-6 h-6 mt-2"/>
                  </div>
                </div>
              </div>
              <div>
              </div>
              <div className="tasks pb-8">
                <div className="tasks-wrapper">
                  <h1 className="text-xl font-semibold pl-2">Tasks</h1>
                  <div className="border w-11/12 px-2 pt-6 pb-4 mb-4 mt-2 border-[#000000] rounded-md bg-[#2a2522] mx-auto">
                  <div className="one flex justify-between pb-2">
                    <FaYoutube className=" text-red-500 w-12 h-12 border border-[#2a2522] bg-white px-2 rounded-full" />
                    <div>
                      <p className="text-gray-300">Subscrbe to our Youtube</p>
                      <p className="text-sm font-semibold text-center">+10000</p>
                    </div>
                    <MdKeyboardArrowRight className="w-6 h-6 mt-2"/>
                  </div>
                  <div className="two flex justify-between pb-2">
                  <FaYoutube className="text-red-500 w-12 h-12 border border-[#2a2522] bg-white px-2 rounded-full" />
                    <div>
                      <p className="text-gray-300">Watch Youtube Video</p>
                      <p className="text-sm font-semibold text-center">+10000</p>
                    </div>
                    <MdKeyboardArrowRight className="w-7 h-7 mt-2 pb-2"/>
                  </div>
                  <div className="three flex justify-between">
                  <FaXTwitter className="text-black w-12 h-12 border border-[#2a2522] bg-white px-2 rounded-full" />
                    <div>
                      <p className="text-gray-300">Retweet Twitter Posts</p>
                      <p className="text-sm font-semibold text-center">+50000</p>
                    </div>
                    <MdKeyboardArrowRight className="w-6 h-6 mt-2"/>
                  </div>
                </div>
                </div>
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

export default Tasks;