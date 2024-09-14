import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';

const WhatWeDo = () => {
    const aboutImages = importAll(require.context('../images/about/shot', false, /\.(png|jpe?g|svg)$/));
    const goalsImages = importAll(require.context('../images/about/goals', false, /\.(png|jpe?g|svg)$/));
    const text = "Welcome to the journey of Enactus SFU, where integrity, passion, innovation, and collaboration have been our guiding principles for 32 years. Enactus is a global organization that uses entrepreneurial action as a catalyst for progress, taking the concepts of social entrepreneurship and the triple bottom-line to heart.";
    const sections = [
        {title: "Mission",description: "A community of changemakers using entrepreneurship to address social, economic, and environmental needs. We aim to create measurable impact on others’ lives."},
        {title: "Vision",description: "To be student leaders who inspire positive change through innovation and social entrepreneurship to create a sustainable world."}
      ];
    const scrollToHistory= () => {
        const formElement = document.getElementById('history');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    const mainpage = (
        <main className="mt-4">
            <div className="flex flex-col gap-20 pt-12">
                <div className="flex flex-col gap-10 items-center mx-40 text-center">
                    <div className="text-md text-[#D00200] font-semibold cursor-pointer">About Us</div>
                    <div className="text-4xl font-semibold">
                        A story about Enactus SFU and the work that we do
                    </div>
                    <div className="text-[#5C5C5C] text-md">{text}</div>
                    <button className="session-button" onClick={scrollToHistory}>
                        Our History
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center items-center mx-40">
                    <img src={aboutImages['about_1.png']} alt="about" className = 'w-full'></img>
                </div>

                <div className="mx-40 text-center">
                    <div className="text-2xl font-bold mb-4">What are Enactus Projects?</div>
                    <div className="text-[#181818]">
                        Teams develop innovative programs that address social, environmental, and economic needs in the community in an attempt to improve the livelihoods of others. Currently, Enactus is made up of <span className="font-bold">66,500 students in 1,600 teams across 36 countries around the world.</span>
                    </div>
                </div>

                <div className="flex justify-center items-center mx-40">
                    <img src={aboutImages['about_2.png']} alt="about" className = 'w-full'/>
                </div>

                <div className="mx-40 text-center">
                    <div className="text-2xl font-bold mb-4">Enactus SFU's Impact</div>
                    <div className="text-[#181818]">
                        At Enactus SFU, we seek issues within our community and see them as opportunities to innovate. With an active member base across multiple concentrations and faculties, Enactus SFU continues to grow and expand its sustainable projects into the community each year. We help students develop new skills and empower them to take initiative and become the future leaders that our communities need.
                        <br />
                        Over the past 5 years, the team at Enactus SFU has dedicated over <span className="font-bold">73,000 hours</span> to improve the lives of over <span className="font-bold">6,600 individuals.</span>
                    </div>
                </div>

                <div className="flex justify-center items-center mx-40">
                    <img src={aboutImages['about_3.png']} alt="about" className = 'w-full' />
                </div>

                <div className ='mx-40 justify-center flex flex-col gap-4'>
                    <div className="text-3xl font-bold mb-4">OUR TARGET SDG GOALS</div>
                    <div className = 'text-[#181818] text-md'>Enactus SFU is expecting to execute projects for Sustainable Development Goals  #1, 3, 4, 6, 10, 12, 13, 14, 15 in the 2023/2024 academic year.</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center">
                        {Object.keys(goalsImages)
                            .sort((a, b) => {
                                const numA = parseInt(a.match(/\d+/)[0], 10);
                                const numB = parseInt(b.match(/\d+/)[0], 10);
                                return numA - numB;
                            })
                            .map((key, index) => (
                                key !== 'goal_9.png' && (
                                    <div key={index} className="p-1 flex justify-center">
                                        <img src={goalsImages[key]} alt="goal" className="rounded w-full" />
                                    </div>
                                )
                            ))
                        }

                        <div className="col-span-2 md:col-span-4 flex justify-center">
                                <img src={goalsImages['goal_9.png']} alt="goal" className="rounded w-full md:w-1/2" />
                        </div>
                    </div>

                </div>
                {/* Mission and Vison */}
                {Object.keys(sections).map((key, index) =>{
                        return(
                            <div key={index} className = 'flex flex-col gap-4 items-start mx-40'>
                                <div className = 'text-2xl font-bold'>{sections[key].title}</div>
                                <div className = 'text-[#181818] text-md'>{sections[key].description}</div>
                            </div>
                        )
                })}

                {/* Histroy */}
                <div className='bg-[#FBFBFB]' id = 'history'>
                    <div className='mx-40 pt-10 flex flex-col gap-10 text-[#181818] text-md'>
                        <div className="text-md text-[#D00200] font-semibold cursor-pointer">Our History</div>
                        <div className="text-4xl font-semibold">
                            Explore our timeline to discover the pivotal moments and transformative events that have shaped our organization.
                        </div>

                        {/* Add a check to ensure history is defined */}
                        <div className = 'flex flex-col gap-4'>
                            {history.map((yearData, index) => (
                                <div key={index} className = 'flex flex-col gap-9 border-b-2 py-2'>
                               
                                    <div className="text-2xl font-bold text-red-600">{yearData.year}</div>
                                  
                                    <div className="grid grid-cols-3">
                                        <p className="font-semibold col-start-1 col-span-1">President:</p>
                                        <p className="col-start-2 col-span-2">{yearData.president}</p>
                                    </div>
                        
                                    <div className="grid grid-cols-3">
                                        <h3 className="font-semibold col-start-1 col-span-1">Vice-Presidents</h3>
                                        <ul className="col-start-2 col-span-2">
                                            {yearData['vice_presidents'] && Object.entries(yearData['vice_presidents']).map(([role, name], idx) => (
                                            <li key={idx}>{role.replace(/_/g, ' ')}: {name}</li>
                                            ))}
                                        </ul>
                                    </div>
   
                                    <div className="grid grid-cols-3">
                                        <h3 className="font-semibold col-start-1 col-span-1">Projects</h3>
                                        <ul className="col-start-2 col-span-2">
                                            {yearData.projects && yearData.projects.map((project, idx) => (
                                            <li key={idx}>{project}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {yearData.regional_wins && (
                                          <div className="grid grid-cols-3">
                                          <h3 className="font-semibold col-start-1 col-span-1">Regional Wins</h3>
                                          <ul className="col-start-2 col-span-2">
                                              {yearData.regional_wins && yearData.regional_wins.map((win, idx) => (
                                              <li key={idx}>{win}</li>
                                              ))}
                                          </ul>
                                      </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex items-center mx-40 justify-center my-10'>
                    {/* should adjust the icon */}
                    <button className="session-button" onClick={scrollToHistory}>
                            Back To Top
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2 h-4 w-4 transform rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                            </svg>
                
                    </button>

                </div>
                
    </div>
        </main>
    );

    return (
        <PageTemplate component={mainpage}></PageTemplate>
    );
}

export default WhatWeDo;
