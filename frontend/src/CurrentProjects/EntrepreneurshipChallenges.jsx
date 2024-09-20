import React from "react";
import PageTemplate from '../components/PageTemplate';
import ecpic from '../images/currentprojects/challenges.png'; 

const EC = () => {
    const ecpage = (
        <div>
            {/* Header Section */}
            <div className="h-auto px-6 md:px-20 lg:px-32 py-12 md:py-20 lg:py-28 bg-white flex flex-col justify-start items-center gap-8 md:gap-10 lg:gap-16">
                <div className="flex flex-col justify-start items-center gap-4 md:gap-6 lg:gap-10">
                    <div className="w-full text-center text-[#d00200] text-base font-semibold font-['Inter']">
                        Current Projects
                    </div>
                    <div className="w-full text-center text-[#181818] text-[24px] md:text-[32px] lg:text-[40px] font-semibold font-['Inter']">
                        Entrepreneurship Challenges
                    </div>
                    <div className="max-w-xl text-center text-[#5c5c5c] text-sm md:text-base lg:text-xl font-normal font-['Inter'] leading-6 md:leading-7 lg:leading-[27px]">
                        A 8-10 week collaborative program with the Charles Chang Institute of Entrepreneurship to enable students to unleash their entrepreneurial mindset.
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="pb-12 md:pb-20 lg:pb-28 bg-white flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-24">
                {/* Responsive Image Section */}
                <img className="w-full max-w-3xl h-auto rounded-xl" src={ecpic} alt="Desk Image" />
                <div className="flex flex-col justify-start items-start gap-4 md:gap-6 lg:gap-10 px-4 md:px-8">
                    <div className="text-[#181818] text-[24px] md:text-[28px] lg:text-[32px] font-semibold font-['Inter']">
                        Details about this project will be revealed soon. Check back later!
                    </div>
                </div>
            </div>
        </div>
    );

    return <PageTemplate component={ecpage} />;
};

export default EC;
