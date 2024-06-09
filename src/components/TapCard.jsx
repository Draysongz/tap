import React from "react";
import Image from "next/image";
import { CiTrophy } from "react-icons/ci";
import Link from 'next/link'
import Progress from "./Progress";

const TapCard = ({ text, coin, className }) => {
    return(
        <div className="border border-[#10171d] bg-gray-950 px-2 py-1 w-11/12 mx-auto rounded-md mb-1">
        <div className="flex justify-between mb-1">
            <div className="flex">
            <CiTrophy className={`${className}`}/>
            <div>
                <p className="text-white text-lg ml-2 font-semibold">{text}</p>
                <p className="flex text-white">
                <Image 
                    src={"/coin.png"}
                    width={30}
                    height={30}
                />
                {coin}
                </p>
            </div>
            </div>
            <button className="border px-2 rounded-md bg-gray-900 border-[#10171d] text-gray-500">Claim</button>
        </div>
        <Progress value={50} maxValue={100} />
        </div>
    )
}

export default TapCard;