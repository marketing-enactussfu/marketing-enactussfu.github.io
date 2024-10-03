import React from "react";
import PageTemplate from '../components/PageTemplate';
import EventsPic from '../images/Events/eventspic.png';
import { useNavigate } from 'react-router-dom';


const Events = () => {
    const navigate = useNavigate();
    const eventspage = (
        <main className = 'mt-4'>
            <div className = 'flex flex-col md:gap-10 gap-2 pt-12'>
                {/* Header Section */}
                <div className=" flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-16  currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10">
                    <div className="text-[#181818] text-3xl sm:text-4xl font-semibold text-center">
                        Our Events
                    </div>
                    <div className="text-[#5c5c5c] text-md sm:text-xl text-center leading-6 md:leading-7 lg:leading-8">
                        Discover our educational workshops hosted by Enactus SFU, connect with like-minded individuals, and learn about sustainable social entrepreneurship.
                    </div>
                </div>

                {/* Events Content Section */}
                <div className="flex flex-col events-md:flex-row max-w-7xl justify-center items-start gap-12 lg:gap-24 md:mx-28 lg:mx-48  sm:mx-16 mx-10 mb-20">
                    {/* Image Section */}
                    <div className="w-full events-md:w-1/2 flex justify-center">
                        <img 
                            src={EventsPic} 
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                            alt="Events" 
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full events-md:w-1/2 flex flex-col justify-start items-start gap-12">
                        {/* PM Series Section */}
                        <div className="flex flex-col gap-4 items-start">
                            <div className="text-[#181818]  text-2xl sm:text-3xl font-semibold">
                                PM Series
                            </div>
                            <div className="text-[#5c5c5c] text-md sm:text-xl leading-6 md:leading-7 lg:leading-8">
                                The Project Management (PM) series is an opportunity for undergraduate students to take a deep dive into the world of project management, whilst experiencing the diverse opportunities for hands-on learning.
                            </div>
                            <button 
                            className="session-button text-[12px] sm:text-[14px] font-semibold"
                            onClick={() => navigate('/events/pm-series')}
                            >
                                Learn More
                            </button>
                        </div>

                        {/* Forward Vision Section */}
                        <div className="flex flex-col gap-4 items-start">
                            <div className="text-[#181818] text-2xl sm:text-3xl font-semibold">
                                Forward Vision
                            </div>
                            <div className="text-[#5c5c5c] text-md sm:text-xl leading-6 md:leading-7 lg:leading-8">
                                Showcase your entrepreneurial spirit and skills in our very own competition! Competitors will be tested on their entrepreneurship, social enterprise, and the practical application of their idea that positively impacts society in a pitch style.
                            </div>
                            <button className="session-button text-[12px] sm:text-[14px] font-semibold"
                            onClick={() => navigate('/events/forward-vision')}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

            </div>
             

        </main>


          
        // </div>
    );

    return <PageTemplate component={eventspage} />;
};

export default Events;
