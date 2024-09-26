import React from "react";
import PageTemplate from '../components/PageTemplate';
import EventsPic from '../images/Events/eventspic.png';
import { importAll } from '../utilities/importImages'; 

const PMSeries = () => {
    const generalPic = importAll(require.context('../images/Events/PMSeries', false, /\.(png|jpe?g|svg)$/));
    const eventspage = (
        <main className = 'mt-4'>
            <div className = 'flex flex-col gap-10 pt-20'>

                <div className=" flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-16  md:mx-28 lg:mx-40  sm:mx-16 mx-10">
                   <img src={generalPic['PM1.png']}></img>
                </div>

                <div className="flex flex-col items-center items-start gap-12 lg:gap-24 md:mx-28 lg:mx-40  sm:mx-16 mx-10 mb-20">
                    {/* Image Section */}
                     <img 
                        src={generalPic['PM2.png']} 
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                        alt="Events" 
                    />
                   

                        <div className="text-[#181818] text-2xl sm:text-3xl font-semibold">
                                    PM Series
                        </div>

                        <div className="text-[#5c5c5c] text-md sm:text-xl leading-6 md:leading-7 lg:leading-8">
                                    The Project Management (PM) series is an opportunity for undergraduate students to take a deep dive into the world of project management, whilst experiencing the diverse opportunities for hands-on learning.
                        </div>



        
                </div>

            </div>
             

        </main>


          
        // </div>
    );

    return <PageTemplate component={eventspage} />;
};

export default PMSeries;
