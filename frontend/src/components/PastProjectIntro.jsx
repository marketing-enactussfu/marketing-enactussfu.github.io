import React from "react";
import Subtitle from "./Subtitle";

export const PastProjectIntro = ({timeRange, title, hasButton, buttonText, aboutUsText, image }) => {
    return(

        <div className = 'flex flex-col md:gap-20 gap-10'>
            <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 space-y-6'>
                <div className="text-md text-[#D00200] font-semibold cursor-pointer">Enactus {timeRange}</div>
                <div className="text-2xl md:text-3xl font-bold mb-4">{title}</div>
                <img src= {image['general_1.png']} alt = 'general' className="rounded"></img>
            </div>

            <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex justify-between items-center flex-col pastIntro-md:flex-row gap-10 pastIntro-md:gap-40'>
                                <img src= {image['general_2.png']} className = 'rounded-xl w-full pastIntro-md:w-2/5'></img>
                                <div className = 'flex flex-col gap-10 items-start'>
                                    <Subtitle text='About Us'/>
                                    <div className = 'text-[#181818] sm:text-md text-base'>{aboutUsText}</div>
                                    {hasButton && <button className = 'facebook-button sm:text-md text-sm font-semibold'>{buttonText}</button> }
                                </div>
            </div>
        </div>
    )
}