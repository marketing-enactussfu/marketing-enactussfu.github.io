import React from "react";
import PageTemplate from '../components/PageTemplate';
import EventsPic from '../images/Events/eventspic.png';
import { importAll } from '../utilities/importImages'; 
import GetUpdate from '../components/GetUpdate';

const ForwardVision = () => {
    const generalPic = importAll(require.context('../images/Events/ForwardVision/general', false, /\.(png|jpe?g|svg)$/));
    const visionPic = importAll(require.context('../images/Events/ForwardVision/visions', false, /\.(png|jpe?g|svg)$/));
    const visions = [
        {
          title: "Pitching Streams",
          description: "Teams will develop a small enterprise focused on the theme of 'Climate Action'. On the event day, teams will pitch their ideas to a panel of investors to receive fictitious funding for the 'Scale-Up Session'."
        },
        {
          title: "Scale Up",
          description: "Each team will be paired with a professional project mentor to guide them in utilizing the funding earned from their pitch to enhance their project."
        },
        {
          title: "Finals",
          description: "In the final presentations, all teams will present their refined pitches to a panel of judges."
        }
      ];

      
    const eventspage = (
        <main className = 'mt-4'>
            <div className = 'flex flex-col lg:gap-36 md:gap-32 sm:gap-20 gap-10 pt-20'>

                <div className=" flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10">
                   <img src={generalPic['general1.png']}></img>
                </div>

               
                    <div className="flex flex-col items-start gap-12 currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 ">

                        <img 
                            src={generalPic['general2.png']} 
                            className="w-full h-full object-cover rounded-xl mt-16"
                            alt="Events" 
                        />
                            <div className="text-[#181818] text-xl sm:text-2xl md:text-3xl font-semibold text-center">
                            Join Us At Forward Vision 2025
                            </div>

                            <div className="text-[#5c5c5c] text-md sm:text-xl leading-6 md:leading-7 lg:leading-8">
                                    We are thrilled to invite you and your team of 4 to participate in Forward Vision, a unique competition hosted at the SFU Vancouver Harbour Centre. Forward Vision celebrates entrepreneurship, social enterprise, and the practical application of skills to make a positive impact on society.
                            </div>

                            <div className="text-[#5c5c5c] text-md sm:text-xl leading-6 md:leading-7 lg:leading-8">
                                    At Enactus SFU, we are dedicated to creating small enterprises that address social and environmental issues in our communities. This year, we are excited to present a revamped Forward Vision, offering you a remarkable opportunity to showcase your skills and creativity!
                            </div>

                            <button className = 'facebook-button text-[14px] text-semibold'>
                                <a href="https://drive.google.com/file/d/1sH5dmqYyXKlifyMZx-JKznBXVBxeR-wu/view" target="_blank">Forward Vision Participant Package </a>
                                
                            </button>
                    </div>


                <div className="md:py-20 sm:py-16 py-10 bg-[#FBFBFB] w-screen flex flex-col gap-8">
                    <div className="flex flex-col items-center currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10">
                        

                        <div className="text-[#181818] text-xl sm:text-2xl md:text-3xl font-semibold text-center">
                                What To Expect At Forward Vision
                         </div>
                    </div>

                    <div className='grid grid-cols-1 ourImpact-md:grid-cols-3 gap-10 py-10 md:mx-28 lg:mx-40 sm:mx-16 mx-10'>
                            {visions.map((stat, index) => (
                            <div key={index} className='text-center flex flex-col gap-2'>
                                <img src={visionPic['vision' + (index+1) + '.png']} className='h-6 w-6 mx-auto' />
                                <div className='text-[#181818] text-md sm:text-xl md:text-2xl font-semibold'>{stat.title}</div>
                                <div className='text-[#5C5C5C]  text-xs md:text-sm'>{stat.description}</div>
                            </div>
                            ))}
                </div>




                </div>

                    <div className="flex flex-col items-center items-start gap-12 currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10">

                    <div className=" flex flex-col justify-center items-center">
                                <img src={generalPic['general3.png']}></img>
                </div>
                           
                            <div className="text-[#5c5c5c] text-md sm:text-xl leading-6 font-[400]">
                            If the idea of social entrepreneurship excites you, we encourage you to participate in Forward Vision! Spots are limited, so be sure to register your team before the deadline on <span className = 'text-[#F50723] font-semibold'>A DATE</span>.
                            </div>

                
                            <button className = 'session-button text-[14px] text-semibold'>
                                Register Here
                            </button>
                    </div>


                    <GetUpdate />



               

            </div>
             

        </main>


          
        // </div>
    );

    return <PageTemplate component={eventspage} />;
};

export default ForwardVision;
