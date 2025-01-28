import React from "react";
import PageTemplate from '../components/PageTemplate';
import catalyst from '../images/currentprojects/catalyst.png'; 
import logo from '../images/currentprojects/logo.png'; 
import paperbags from '../images/currentprojects/paperbags.png'; 
import Subtitle from "../components/Subtitle";

const Catalyst = () => {

    const Title = ({title})=>{
        return(
            <div className="text-[#181818] sm:text-3xl text-2xl font-semibold">
                {title}
           </div>
        )
    }
    
    const Text = ({text})=>{
        return (
            <div className="text-start text-[#5c5c5c] text-base sm:text-xl font-normal">
        
                {text}
            </div>

        )
    }
    const secondsavour = (
        <main className = 'mt-4'>
            {/* Header Section */}
            <div className = 'flex flex-col gap-10 sm:gap-12 md:gap-16'>
                    <div className="currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 bg-white flex flex-col items-center gap-8 pt-12">
                            <Subtitle text="Current Projects" />
                            <Title title="Catalyst" />
                            <div className="text-center text-[#5c5c5c] text-md sm:text-xl font-[400] currentProject-md:mx-20 currentProjectText-md:mx-10">
                                A 8-10 week collaborative program with the Charles Chang Institute of Entrepreneurship to enable students across British Columbia to unleash their entrepreneurial mindset.
                            </div>
                            <div className="text-center text-[#5c5c5c] text-md sm:text-xl font-bold currentProject-md:mx-20 currentProjectText-md:mx-10">
                                We are now accepting registration for Catalyst 2025
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-4">
                                <button className="session-button sm:text-[14px] text-[12px] font-semifold"
                                    onClick = {()=> window.open('https://www.eventbrite.ca/e/catalyst-entrepreneurship-challenge-tickets-1221315139459?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=wsa&aff=ebdsshwebmobile&fbclid=PAZXh0bgNhZW0CMTEAAaa1UaIOHFeth-yVEb4Go_tC9Jbm4LUsmGklJ13igaKOU-eiZU_M6A44d3Q_aem_42lIR0C9keIqhvPNpxp3HQ', '_blank')}>
                                    Register Here
                                </button>
                                <button className="facebook-button sm:text-[14px] text-[12px] font-semifold"
                                onClick = {()=> window.open('https://www.instagram.com/catalystsfu', '_blank')}>
                                    Our Instagram
                                </button>
                            </div>
                    </div>

                    <div className="currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 items-center">
                            <img className="w-full rounded-xl" src={catalyst} alt="catalyst" />
                    </div>


                   
                    <div className="flex flex-col justify-start items-start gap-4 currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 ">
                                <Title title="Join Us At Catalyst 2025" />
                                <Text text = "The competition spans over 8 weeks where students are given full creative freedom to create a business solution(product or application) to a problem presented by a community partner with mentorship assistance. "/>
                                <Text text = "The structure of this program includes an opening ceremony, in-person and online workshops, pitch off, and closing ceremony. Refreshments will be provided in each event to keep participants energized."/>
                            <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                                <button className="session-button sm:text-[14px] text-[12px] font-semifold"
                                    onClick = {()=> window.open('https://www.eventbrite.ca/e/catalyst-entrepreneurship-challenge-tickets-1221315139459?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=wsa&aff=ebdsshwebmobile&fbclid=PAZXh0bgNhZW0CMTEAAaa1UaIOHFeth-yVEb4Go_tC9Jbm4LUsmGklJ13igaKOU-eiZU_M6A44d3Q_aem_42lIR0C9keIqhvPNpxp3HQ', '_blank')}>
                                    Register Here
                                </button>
                                <button className="facebook-button sm:text-[14px] text-[12px] font-semifold"
                                onClick = {()=> window.open('https://drive.google.com/file/d/1Z8aT2Y7hsmi-SKiJQEIeDqEhIORQtiJL/view?usp=drive_link', '_blank')}>
                                    Information Package
                                </button>
                            </div>
                    </div>

                    <div className="flex justify-center currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10">
                        {/* Image Section 2: Logo */}
                        <img className="max-w-[500px] w-full rounded-xl mx-auto" src={logo} alt="Second Savour Logo" />
                    </div>


                     
                    {/* The Chang Institute */}
                    <div className="flex flex-col justify-start items-start gap-4 currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 ">
                        <Title title="The Chang Institute" />
                        <Text text = "The Charles Chang Institute for Entrepreneurship is the academic hub for entrepreneurship and innovation at SFU. Through learning in the classroom, workshops, events and an incubator program, all SFU students, faculty, staff and recent alumni from any faculty can practice entrepreneurship and grow their entrepreneurial mindset."/>
                    </div>

                    <div className="w-full bg-[#FBFBFB] py-8">
                        {/* Inner container with flexible width */}
                        <div className="max-w-[1200px] w-[90%] lg:w-[80%] mx-auto px-6 sm:px-10 py-12 bg-[#FBFBFB]">
                            <h2 className="text-center text-3xl font-bold">What To Expect At Catalyst</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mt-8">
                                <div>
                                    <h3 className="text-red-600 font-semibold">Real-World Problem Solving</h3>
                                    <p>The program will present students with authentic challenges currently experienced by an organization. Projects are expected to have real-world implications and potential for implementation.</p>
                                </div>
                                <div>
                                    <h3 className="text-red-600 font-semibold">Networking Opportunities</h3>
                                    <p>The program facilitates meaningful connections with individuals from various backgrounds, including industry-leading professionals and fellow students.</p>
                                </div>
                                <div>
                                    <h3 className="text-red-600 font-semibold">Skill Development</h3>
                                    <p>Explore new ways to think outside the box and develop innovative solutions. Enhance problem-solving, leadership, and collaboration skills.</p>
                                </div>
                                <div>
                                    <h3 className="text-red-600 font-semibold">Cross-Collaboration with Other Majors</h3>
                                    <p>Join a vibrant, supportive community where all majors and backgrounds come together to collaborate.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Event Timeline Section */}
                    <div className="w-full bg-white py-6">
                        <div className="currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 flex flex-col gap-10">
                        <Title title="Event Timeline" />
                            
                            {/* Timeline Items */}
                            {[
                                {
                                    title: "Registration Period",
                                    details: [
                                        "Early Bird Registration: January 15th - February 1st, 2025",
                                        "Regular Registration: February 2nd - February 8th, 2025"
                                    ],
                                },
                                {
                                    title: "Opening Ceremony - February 15th, 2025",
                                    details: [
                                        "To kick off the event, we will welcome representatives from TransLink, who will introduce their organization and outline various problem areas within the organization. Next, we will provide an overview of the event timeline, highlighting key workshops, competition rules and structure.  "
                                    ],
                                },
                                {
                                    title: "Workshop #1: Problem Identification - February 22nd, 2025",
                                    details: [
                                        "At Workshop 1, a representative from the Chang Institute will guide participants through various brainstorming methods and business models to strengthen their problem-solving and innovation skills. This session will equip participants with the essential tools to effectively analyze and identify opportunities and challenges for impactful solutions. "
                                    ],
                                },
                                {
                                    title: "Fireside Chat - March 2nd, 2025",
                                    details: [
                                        "At our Fireside Chat, we will host a panel discussion and a Q&A session featuring a diverse group of entrepreneurs who will share their personal journeys, the challenges they have faced, and the ideation process behind their businesses. Panelists will include mentors from the Chang Institute, SFU alumni, local business owners, angel investors, and other business professionals."
                                    ],
                                },
                                {
                                    title: "Workshop #2: Pitch - March 22nd, 2025",
                                    details: [
                                        "At Workshop 2, we will collaborate with industry professionals to host a pitch workshop designed to teach participants how to organize and structure their product or idea for presentation to TransLink and the judges. "
                                    ],
                                },
                                {
                                    title: "Closing Ceremony - April 5th, 2025",
                                    details: [
                                        "The final pitch-off will feature teams presenting their ideas to TransLink, with projects evaluated based on criteria such as feasibility, innovation and market potential. Following these presentations, judges will deliberate and finalize the scores. After the winners are announced, a representative from the Chang Institute will discuss next steps for participants to further develop their ideas."
                                    ],
                                },
                            ].map((event, index) => (
                                <div key={index} className="bg-white rounded-xl border border-[#d7d7d7] p-6">
                                    <h3 className="text-[#d00200] text-lg font-medium">{event.title}</h3>
                                    {/* Render two separate lines */}
                                    <div className="text-[#5c5c5c] text-sm leading-[17.5px] space-y-1">
                                        {event.details.map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


{/* Call-to-Action Section */}
<div className="currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 text-center flex flex-col items-center space-y-2 mt-0 pt-0">
    <h3 className="text-[#5c5c5c] text-base sm:text-xl font-normal">
        If the idea of solving a real-world problem excites you, we encourage you to participate in Catalyst! 
        Spots are limited, so be sure to register soon!
    </h3>
    <div className="py-3"></div>
    <button className="bg-red-600 text-white px-6 py-2 rounded-full text-sm sm:text-base font-semibold"
        onClick={() => window.open('https://www.eventbrite.ca/e/catalyst-entrepreneurship-challenge-tickets-1221315139459?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=wsa&aff=ebdsshwebmobile&fbclid=PAZXh0bgNhZW0CMTEAAaa1UaIOHFeth-yVEb4Go_tC9Jbm4LUsmGklJ13igaKOU-eiZU_M6A44d3Q_aem_42lIR0C9keIqhvPNpxp3HQ', '_blank')}>
        Register Here
    </button>
    <div className="py-3"></div>
    <div className="py-3"></div>
    <div className="py-10"></div>
</div>



                </div>


    
  
        </main>
    );

    return <PageTemplate component={secondsavour} />;
};

export default Catalyst;
