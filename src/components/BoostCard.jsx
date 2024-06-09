import Image from "next/image";
import React from "react";

const BoostCard = ({ image, text, p}) => {
    return(
        <div className="flex gap-2 border border-[#10171d] bg-gray-950 rounded-md pl-2 pr-6 py-1 w-5.5/12 mx-auto">
            <Image 
                src={image}
                width={50}
                height={50}
            />
            <div>
                <p className="text-md font-semibold text-white">{text}</p>
                <p className="text-md font-semibold text-gray-400">{p}</p>
            </div>
        </div>
    )
}

export default BoostCard;