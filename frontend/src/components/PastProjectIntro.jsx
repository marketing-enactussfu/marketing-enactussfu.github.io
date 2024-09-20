import React from "react";

export const PastProjectIntro = ({timeRange, title, hasButton, buttonText, aboutUsText, image }) => {
    return(

        <div className = 'flex flex-col md:gap-20 gap-10'>
            <div className = 'mx-20 md:mx-40'>
                <div className="text-md text-[#D00200] font-semibold cursor-pointer">Enactus {timeRange}</div>
                <div className="text-2xl md:text-3xl font-bold mb-4">{title}</div>
                <img src= {image['general_1.png']} alt = 'general'></img>
            </div>

            <div className = 'mx-20 md:mx-40 flex justify-between items-center min-[0px]:flex-col max-[1011px]:flex-row xl:flex-row gap-40 max-[1011px]:gap-10'>
                                <img src= {image['general_2.png']} className = 'rounded-xl min-[0px]:w-full max-[1011px]:w-2/5'></img>
                                <div className = 'flex flex-col gap-10 items-start'>
                                    <div className="text-md text-[#D00200] font-semibold cursor-pointer">About Us</div>
                                    <div>{aboutUsText}</div>
                                    {hasButton && <button className = 'facebook-button'>{buttonText}</button> }
                                </div>
            </div>
        </div>
    )
}