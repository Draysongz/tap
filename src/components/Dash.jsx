import {
  Card,
  CardBody,
  Flex,
  Text,
  Box,
  HStack,
  Icon,
  Tooltip,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { GiTrophyCup } from "react-icons/gi";
import {
  MdKeyboardArrowRight,
  MdSpaceDashboard,
  MdGroups,
} from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { SiGoogletasks } from "react-icons/si";
import { FaFireAlt } from "react-icons/fa";
import NextLink from "next/link";
import styles from "./Dash.module.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import ProgressBar from "./Progress";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

const Dash = () => {
  const [isScaled, setIsScaled] = useState(false);
  const [count, setCount] = useState(0);
  const [showOne, setShowOne] = useState(false);
  const [progress, setProgress] = useState(75);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const timer = setTimeout(() => setProgress(50), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = () => {
    setCount(count + 1);
    setShowOne(true);
    setIsScaled(true);
    setTimeout(() => {
      setShowOne(false);
      setIsScaled(false);
    }, 500);
  };

  const navData = [
    { icon: MdGroups, title: "Ref", link: "/referrals" },
    { icon: SiGoogletasks, title: "Tasks", link: "/task" },
    { icon: MdSpaceDashboard, title: "Tap", link: "/" },
    { icon: FaFireAlt, title: "Boost", link: "/boost" },
    { icon: IoMdStats, title: "Stats", link: "/stats" },
  ];

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div className={`bg-[#000000] h-screen ${poppins.className} overflow-hidden`}>
        <div className="text-center text-white pt-4">
          <button className="border w-11/12 py-1 border-[#000000] bg-[#1f1f1f] mx-auto rounded-md text-lg flex justify-center mb-6">
            Join clan <MdKeyboardArrowRight className="w-5 h-5 mt-1" />
          </button>
          <p className="text-6xl font-normal pb-3">{count}</p>
          <p className="text-md font-semibold">
            <span className="text-yellow-500">.</span> Level 1{" "}
            <span className="text-yellow-500">.</span>
          </p>
          <div
            className={`pt-12 transition-transform transform ${isScaled && "scale-75"} mb-16`}
            onClick={handleImageClick}
          >
            <img
              src={"/sharp.png"}
              width={3000}
              height={3000}
              alt={"Coin"}
            />
          </div>
          {showOne && (
            <div className={styles.tapswapCoin}>
              <span className="text-xl font-normal">+1</span>
            </div>
          )}
          <ProgressBar progress={100} />
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
  );
};

export default Dash;
