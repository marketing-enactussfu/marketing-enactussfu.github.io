import React from "react";
import PageTemplate from './components/PageTemplate';
import WeDareToDo from './images/Careers/WeDareToDo.png';
import GroupPhoto from './images/Careers/GroupPhoto.png';
import Clock from './images/Careers/Clock.png';
import ReviewRole from './images/Careers/ReviewRole.png';
import Target from './images/Careers/Target.png';
import Questionmark from './images/Careers/Questionmark.png';
import Heart from './images/Careers/Heart.png';
import MagnifyingGlass from './images/Careers/MagnifyingGlass.png';
import GroupPhoto2 from './images/Careers/GroupPhoto2.png'; 
import GetUpdate from "./components/GetUpdate";

const guides = [
    { src: ReviewRole, alt: "Review the Role", title: "Review the role", content: "Before your interview, carefully read through the job description to understand the expectations and responsibilities. This will help you align your experiences and skills with what we’re looking for." },
    { src: MagnifyingGlass, alt: "Showcase your Research", title: "Showcase your research", content: "We appreciate candidates who take the time to learn about Enactus SFU. Research our current projects, values, and the impact we’re making in the community. Understanding our mission and how we operate will allow you to speak confidently about why you want to be part of Enactus SFU. Explore our Enactus SFU Projects page to get insights into our ongoing initiatives. Knowing how your role contributes to these projects is a great way to demonstrate your fit with our team." },
    { src: Heart, alt: "Focus on your fit and contribution", title: "Focus on your fit and contribution to our culture", content: "At Enactus SFU, we value not only skills and experience but also personality and cultural fit. We aim to build a team where lifelong connections are formed. Showcase how you can contribute to our community and why you believe you’d be a great addition to our team. Let your personality shine through!" },
    { src: Clock, alt: "Clarify and take your time", title: "Clarify and take your time", content: "If you don’t understand a question, ask for clarification or request it to be rephrased. Don’t hesitate to take a moment to gather your thoughts before responding. We value clear and thoughtful communication." },
    { src: Target, alt: "Be detailed but concise", title: "Be detailed but concise", content: "We appreciate thorough responses that focus on your personal contributions and the outcomes of your efforts. Rather than giving broad overviews, dive into specific challenges you’ve faced and what actions you took. Avoid spending too much time discussing team efforts without highlighting your own role and impact." },
    { src: Questionmark, alt: "Bring your questions", title: "Bring your questions", content: "Your curiosity matters to us. Use this opportunity to learn more about Enactus SFU, our projects, and the team. We’re eager to answer your questions and provide you with a deeper understanding of our organization." }
]

const Careers = () => {
    const careerspage = (
        <div className="flex flex-col gap-20 mt-4">
            {/* First Section */}

            {/* <div className="w-full min-h-[485px] px-8 py-[120px] flex flex-col justify-center items-center gap-16"> */}
            <div className = 'md:mx-28 lg:mx-40 sm:mx-16 mx-10 pt-12'>
                <div className="text-center flex flex-col items-center gap-7">
                    <div className="text-[#d00200] text-base font-semibold ">Join Our Team</div>
                    <div className="text-[#181818] text-[40px] font-semibold">Careers at Enactus</div>
                    <div className="w-full max-w-lg text-[#181818] text-xl font-normal leading-[27px]">
                        Join us in making an impact in our community through entrepreneurial action.
                    </div>
                    <div className="flex justify-center">
                        <div className="session-button sm:text-md text-base font-semibold">
                            Hiring Package
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="py-10 bg-[#FBFBFB] w-screen">
                <div className = 'md:mx-28 lg:mx-40 sm:mx-16 mx-10'>
                    <div className="flex flex-col gap-6 items-center mb-5">
                        <div>
                            <img src={WeDareToDo} alt="We Dare To Do" className="w-full h-auto" />
                        </div>
                        <div className="text-[#181818] text-2xl text-2xl md:text-3xl font-semibold  mb-4">Open Positions</div>
                        <div className="text-[#181818] text-base sm:text-md font-normal leading-relaxed text-center mx-10 sm:mx-20 md:mx-40">
                            There are no open positions for now! Follow @EnactusSFU on Instagram to get the latest updates on our hiring initiatives!
                        </div>
                    </div>
                </div>
            </div>
           


            {/* Third Section */}
            <div className = 'md:mx-28 lg:mx-40 sm:mx-16 mx-10'>
                {/* Organization Culture */}
                <div className="flex flex-col gap-8 items-start">
                    <img src={GroupPhoto} alt="Organization Culture" className="w-full h-auto" /> 
                    <div className="text-center text-[#181818] text-2xl sm:text-3xl font-semibold ">☕ Organization Culture</div>
                    <div className="text-[#181818] text-base sm:text-xl font-normal leading-[27px]">
                        At Enactus SFU, our culture is deeply rooted in innovation, collaboration, and competition. As part of a global network committed to social entrepreneurship, we focus on developing sustainable solutions to the social, environmental, and economic challenges within our community.
                        <br /><br />
                        Our team leads seven impactful projects, each addressing a unique aspect of these challenges. These projects are a testament to our commitment to making a difference and are a key part of what defines us as an organization. Over the past five years, our team has dedicated over 85,000 hours to improving the lives of more than 7,000 individuals. This unwavering commitment to service and excellence reflects the heart of Enactus SFU—a culture focused on making a lasting impact while nurturing the next generation of leaders.
                        <br /><br />
                        Competition is also a significant aspect of our culture. Participation in the Enactus Regionals and Nationals Exposition is a highlight of our year, where our members showcase how their community outreach projects and business ventures are making a tangible impact in Canada and beyond. This competitive spirit not only drives our success but also fosters growth, teamwork, and a relentless pursuit of excellence among our members.
                        <br /><br />
                        By combining our passion for social impact with the drive to excel in competition, we continue to build a vibrant community where students develop essential skills, form lasting relationships, and emerge as the future leaders our world needs.
                    </div>
                </div>
            </div>

             {/* New Image Section */}
             <div className = 'md:mx-28 lg:mx-40 sm:mx-16 mx-10 flex flex-col gap-10 items-start'> 
                    <img src={GroupPhoto2} alt="Your New Image Description" className="w-full h-auto" /> 
            </div>
            {/* Interview Guides */}
            <div className = 'md:mx-28 lg:mx-40 sm:mx-16 mx-10 flex flex-col gap-6 items-start'> 
                    <div className="text-center text-[#181818] text-2xl sm:text-3xl font-semibold mb-4">📕 Interview Guides</div>
                    <div className="flex flex-col gap-6 items-center">
                        {guides.map((item, index) => (
                            <div key={index} className=" bg-white rounded-xl border border-[#d7d7d7] flex flex-col justify-start items-start p-8 w-full">
                                <div className="flex items-start md:gap-7 sm:gap-4 gap-2">
                                    <img src={item.src} alt={item.alt} className = 'md:w-auto sm:w-[28px] w-[20px] mt-1'/> 
                                    <div className="flex-1">
                                        <div className="text-[#181818] text-base sm:text-lg font-medium">{item.title}</div>
                                        <div className="text-[#5c5c5c] text-xs sm:text-sm font-normal leading-relaxed">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>


            {/* Get Updates */}
            <GetUpdate/>
        </div>
    );

    return (
        <PageTemplate component={careerspage} />
    );
};

export default Careers;

