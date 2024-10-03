import React from "react";
import PageTemplate from '../components/PageTemplate';
import EventsPic from '../images/Events/eventspic.png';
import { importAll } from '../utilities/importImages'; 

const PMSeries = () => {
    const generalPic = importAll(require.context('../images/Events/PMSeries', false, /\.(png|jpe?g|svg)$/));
    const workshops = [
        {
          id: 1, 
          title: "Workshop #1",
          name: "Introduction to Project Management",
        },
        {
          id: 2,
          title: "Workshop #2",
          name: "Project Management Industry Exploration",
        },
        {
          id: 3,
          title: "Workshop #3",
          name: "Stay Tuned for More Details",
        }
      ];
      
    const eventspage = (
        <main className = 'mt-4'>
            <div className = 'flex flex-col lg:gap-36 md:gap-32 sm:gap-20 gap-10 pt-20'>

                <div className=" flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10">
                   <img src={generalPic['PM1.png']}></img>
                </div>

                <div className="md:py-20 sm:py-16 py-10 bg-[#FBFBFB] w-screen">
                    <div className="flex flex-col items-center items-start gap-12 currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10">
                        {/* Image Section */}
                        <img 
                            src={generalPic['PM2.png']} 
                            className="w-full h-full object-cover rounded-xl shadow-lg"
                            alt="Events" 
                        />
                            <div className="text-[#181818] text-xl sm:text-2xl md:text-3xl font-semibold text-center">
                            About the Project Management Series
                            </div>

                            <div className="text-[#5c5c5c] text-md sm:text-xl leading-6 md:leading-7 lg:leading-8 text-center">
                            The Project Management (PM) series is an opportunity for undergraduate students to take a deep dive into the world of project management, whilst experiencing the diverse opportunities for hands-on learning.
                            </div>
            
                    </div>
                </div>


                <div className = 'flex flex-col gap-20'>
                    <div className=" md:text-4xl sm:text-3xl text-2xl font-semibold text-center currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10">
                            PM Series features three in-person workshops:
                    </div>
    
                    {workshops.map((workshop) => (
                            <div key={workshop.id} className="flex flex-col gap-4  items-center currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10">
                            <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-[#D00200] text-center">{workshop.title}</h2>
                            <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-[#181818] text-center">{workshop.name}</h3>
                            <img
                                src={generalPic[`PM${workshop.id + 2}.png`]}
                                alt={workshop.name}
                                className="workshop-image"
                            />
                            </div>
                    ))}

                </div>


                <div className="md:py-20 sm:py-16 py-10 bg-[#FBFBFB] w-screen">
                    <div className="flex flex-col items-center items-start gap-12 mb-20 currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10">
                        {/* Image Section */}

                        <div className="text-[#181818] text-xl sm:text-2xl md:text-3xl font-semibold">
                              In Collaboration With
                         </div>


                        <img 
                            src={generalPic['PM6.png']} 
                            className="w-full h-full object-cover rounded-xl"
                            alt="Events" 
                        />
                
                    </div>
                </div>

                


               

            </div>
             

        </main>


          
        // </div>
    );

    return <PageTemplate component={eventspage} />;
};

export default PMSeries;
