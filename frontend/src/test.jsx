
 //102399712593 :)

 import React from "react";
 import PageTemplate from './components/PageTemplate';
 
 // Importing the images
 import AwardCard1 from './images/home/AwardCard/AwardCard1.png';
 import AwardCard2 from './images/home/AwardCard/AwardCard2.png';
 import AwardCard3 from './images/home/AwardCard/AwardCard3.png';
 import AwardCard4 from './images/home/AwardCard/AwardCard4.png';
 import AwardCard5 from './images/home/AwardCard/AwardCard5.png';
 import AwardCard6 from './images/home/AwardCard/AwardCard6.png';
 import AwardCard7 from './images/home/AwardCard/AwardCard7.png';
 import AwardCard8 from './images/home/AwardCard/AwardCard8.png';
 import AwardCard9 from './images/home/AwardCard/AwardCard9.png';
 import AwardCard10 from './images/home/AwardCard/AwardCard10.png';
 import AwardCard11 from './images/home/AwardCard/AwardCard11.png';
 import AwardCard12 from './images/home/AwardCard/AwardCard12.png';
 import AwardCard13 from './images/home/AwardCard/AwardCard13.png';
 import AwardCard14 from './images/home/AwardCard/AwardCard14.png';
 import AwardCard15 from './images/home/AwardCard/AwardCard15.png';
 import AwardCard16 from './images/home/AwardCard/AwardCard16.png';
 import AwardCard17 from './images/home/AwardCard/AwardCard17.png';
 
 const Competitions = () => {
     const competitionspage = (
         <div>
             {/* Header Section */}
             <div className="w-full max-w-screen-xl mx-auto h-auto px-6 md:px-20 lg:px-[600px] py-12 bg-white flex flex-col justify-start items-center gap-8">
                 <div className="flex flex-col justify-start items-center gap-4 md:gap-6 lg:gap-10">
                     <div className="text-center text-[#d00200] text-base font-semibold font-['Inter']">
                         Awards
                     </div>
                     <div className="text-center text-[#181818] text-[24px] md:text-[32px] lg:text-[40px] font-semibold font-['Inter']">
                         Our Legacy of Excellence
                     </div>
                     <div className="max-w-xl text-center text-[#5c5c5c] text-sm md:text-base lg:text-xl font-normal font-['Inter'] leading-6 md:leading-7 lg:leading-[27px]">
                         Over the years, Enactus SFU has consistently secured top positions in Enactus Canada’s competitions. In each exposition, we demonstrate our commitment to innovation, earning awards that reflect the hard work of our members. Join us, and you could be part of our next winning team.
                     </div>
                 </div>
             </div>
 
             {/* Main Content Section */}
             <div className="w-full max-w-screen-xl mx-auto h-auto px-6 md:px-20 lg:px-32 pb-12 md:pb-20 lg:pb-28 bg-white flex flex-col justify-start items-center gap-16 lg:gap-24">
                 {/* Yearly Awards Sections */}
                 {[
                     {
                         year: "2024",
                         awards: [
                             {
                                 place: "1st Place",
                                 challenge: "Enactus Alumni Innovation Impact Challenge",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#ffd25f",
                                 image: AwardCard1
                             },
                             {
                                 place: "2nd Place",
                                 challenge: "Canadian Tire Environmental Sustainability",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#d7d7d7",
                                 image: AwardCard2
                             },
                             {
                                 place: "2nd Place",
                                 challenge: "TD Entrepreneurship Challenge",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#d7d7d7",
                                 image: AwardCard3
                             }
                         ]
                     },
                     {
                         year: "2023",
                         awards: [
                             {
                                 place: "3rd Place",
                                 challenge: "TD Entrepreneurship Challenge",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#d9936b",
                                 image: AwardCard4
                             },
                             {
                                 place: "3rd Place",
                                 challenge: "Scotiabank Climate Action Project Idea Pitch",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#d9936b",
                                 image: AwardCard5
                             }
                         ]
                     },
                     {
                         year: "2021",
                         awards: [
                             {
                                 place: "3rd Place",
                                 challenge: "TD Entrepreneurship Challenge",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#d9936b",
                                 image: AwardCard6
                             },
                             {
                                 place: "Finalist",
                                 challenge: "Scotiabank Climate Action Project Idea Pitch",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#ffd25f",
                                 image: AwardCard7
                             }
                         ]
                     },
                     {
                         year: "2020",
                         awards: [
                             {
                                 place: "1st Place",
                                 challenge: "Scotiabank Youth Empowerment Challenge",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#ffd25f",
                                 image: AwardCard8
                             },
                             {
                                 place: "3rd Place",
                                 challenge: "Western Bank Financial Education Challenge",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#d9936b",
                                 image: AwardCard9
                             }
                         ]
                     },
                     {
                         year: "2018",
                         awards: [
                             {
                                 place: "Semi-Finalist",
                                 challenge: "Nationals Exposition",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#ffd25f",
                                 image: AwardCard10
                             },
                             {
                                 place: "1st Place",
                                 challenge: "Scotiabank Youth Empowerment Challenge",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#ffd25f",
                                 image: AwardCard11
                             }
                         ]
                     },
                     {
                         year: "2017",
                         awards: [
                             {
                                 place: "1st Place",
                                 challenge: "Capital One Financial Education Challenge",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#ffd25f",
                                 image: AwardCard12
                             },
                             {
                                 place: "Semi-Finalist",
                                 challenge: "Nationals Exposition",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#ffd25f",
                                 image: AwardCard13
                             },
                             {
                                 place: "1st Place",
                                 challenge: "EcoLiving Challenge",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#ffd25f",
                                 image: AwardCard14
                             },
                             {
                                 place: "1st Place",
                                 challenge: "Scotiabank Youth Empowerment Challenge",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#ffd25f",
                                 image: AwardCard15
                             },
                             {
                                 place: "1st Place",
                                 challenge: "TD Entrepreneurship Challenge",
                                 description: "Enactus Canada Regionals",
                                 bgColor: "#ffd25f",
                                 image: AwardCard16
                             }
                         ]
                     }
                 ].map((section, index) => (
                     <div key={index} className="w-full flex flex-col justify-start items-center gap-12">
                         <div className="w-full text-left text-[#181818] text-[32px] font-semibold font-['Inter']">
                             {section.year}
                         </div>
                         <div className="w-full flex flex-wrap justify-center items-start gap-8">
                             {section.awards.map((award, idx) => (
                                 <div
                                     key={idx}
                                     className="w-[350px] md:w-[400px] p-6 bg-white rounded-xl border border-[#ececec] flex flex-col justify-start items-start gap-6"
                                 >
                                     <div
                                         className="w-[58px] h-[58px] p-3.5 rounded-full flex flex-col justify-center items-center gap-2.5"
                                         style={{ backgroundColor: award.bgColor }}
                                     >
                                         <img
                                             src={award.image}
                                             alt={award.challenge}
                                             className="w-full h-full object-contain"
                                         />
                                     </div>
                                     <div className="w-full flex flex-col justify-start items-start gap-4">
                                         <div className="w-full text-[#181818] text-base font-semibold font-['Inter']">
                                             {award.place}
                                         </div>
                                         <div className="w-full text-[#181818] text-base font-normal font-['Inter'] leading-snug">
                                             {award.challenge}
                                         </div>
                                         <div className="w-full text-[#5c5c5c] text-xs font-normal font-['Inter']">
                                             {award.description}
                                         </div>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     );
 
     return <PageTemplate component={competitionspage} />;
 };
 
 export default Competitions;
 