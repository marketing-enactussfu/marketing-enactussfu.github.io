import React from "react";

export const PastProjectIntro = ({timeRange, title, hasButton, buttonText, aboutUsText, image }) => {
    return(

        <div className = 'flex flex-col gap-20'>
            <div className = 'mx-20 md:mx-40'>
                <div className="text-md text-[#D00200] font-semibold cursor-pointer">Enactus {timeRange}</div>
                <div className="text-3xl font-bold mb-4">{title}</div>
                <img src= {image['general_1.png']} alt = 'general'></img>
            </div>

            <div className = 'mx-20 md:mx-40 flex flex-col justify-between gap-40 items-center md:flex-row xl:flex-row'>
                                <img src= {image['general_2.png']} className = 'rounded-xl w-full md:w-2/5'></img>
                                <div className = 'space-y-10'>
                                    <div className="text-md text-[#D00200] font-semibold cursor-pointer">About Us</div>
                                    <div>{aboutUsText}</div>
                                    {hasButton && <button className = 'facebook-button'>{buttonText}</button> }
                                </div>
            </div>
        </div>
    )
}