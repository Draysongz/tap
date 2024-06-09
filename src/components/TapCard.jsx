import React from "react";
import Image from "next/image";
import { CiTrophy } from "react-icons/ci";
import Link from 'next/link'

const TapCard = ({ text, coin, className }) => {
    return(
        <div className="flex border border-[#10171d] bg-gray-950 px-2 py-1 w-11/12 mx-auto rounded-md mb-1">
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
    )
}

export default TapCard;