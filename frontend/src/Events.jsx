import React from "react";
import PageTemplate from './components/PageTemplate';
import EventsPic from './images/Events/eventspic.png'; // Make sure the image path is correct

const Events = () => {
    const eventspage = (
        <div className="w-full h-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-12 bg-white flex flex-col items-center">
            {/* Header Section */}
            <div className="w-full max-w-4xl flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-16">
                <div className="text-[#181818] text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
                    Our Events
                </div>
                <div className="text-[#5c5c5c] text-base md:text-lg lg:text-xl text-center leading-6 md:leading-7 lg:leading-8">
                    Discover our educational workshops hosted by Enactus SFU, connect with like-minded individuals, and learn about sustainable social entrepreneurship.
                </div>
            </div>

            {/* Events Content Section */}
            <div className="flex flex-col lg:flex-row w-full max-w-7xl justify-center items-start gap-12 lg:gap-24">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img 
                        src={EventsPic} 
                        className="w-full h-auto object-cover rounded-xl shadow-lg"
                        alt="Events" 
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-12">
                    {/* PM Series Section */}
                    <div className="flex flex-col gap-4">
                        <div className="text-[#181818] text-2xl md:text-3xl lg:text-4xl font-semibold">
                            PM Series
                        </div>
                        <div className="text-[#5c5c5c] text-base md:text-lg lg:text-xl leading-6 md:leading-7 lg:leading-8">
                            The Project Management (PM) series is an opportunity for undergraduate students to take a deep dive into the world of project management, whilst experiencing the diverse opportunities for hands-on learning.
                        </div>
                        <button className="px-5 py-4 bg-[#d00200] rounded-full text-white text-sm font-semibold hover:bg-[#b50000]">
                            Learn More
                        </button>
                    </div>

                    {/* Forward Vision Section */}
                    <div className="flex flex-col gap-4">
                        <div className="text-[#181818] text-2xl md:text-3xl lg:text-4xl font-semibold">
                            Forward Vision
                        </div>
                        <div className="text-[#5c5c5c] text-base md:text-lg lg:text-xl leading-6 md:leading-7 lg:leading-8">
                            Showcase your entrepreneurial spirit and skills in our very own competition! Competitors will be tested on their entrepreneurship, social enterprise, and the practical application of their idea that positively impacts society in a pitch style.
                        </div>
                        <button className="px-5 py-4 bg-[#d00200] rounded-full text-white text-sm font-semibold hover:bg-[#b50000]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    return <PageTemplate component={eventspage} />;
};

export default Events;
