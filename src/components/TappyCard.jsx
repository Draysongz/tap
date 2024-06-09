import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const TappyCard = ({ image, text, p}) => {
    return(
        <div className="pb-1">
        <div className="flex justify-between border border-[#10171d] px-1 py-1 rounded-md bg-gray-950 w-10/12 mx-auto">
        <div className="flex">
            <Image 
                src={image}
                width={50}
                height={50}
            />
            <div>
                <p className="text-md text-semibold text-white">{text}</p>
                <p className="text-sm text-semibold text-gray-200">{p}</p>
            </div>
        </div>
            <MdKeyboardArrowRight className="w-6 h-6 mt-3 text-gray-400"/>
        </div>
        </div>
    )
}

export default TappyCard;