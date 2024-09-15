import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';
import { PastProjectIntro } from '../components/PastProjectIntro';

const  ChangemakerChallenge =() => {
    const generalImages = importAll(require.context('../images/pastProject/changemakerChallenge/general', false, /\.(png|jpe?g|svg)$/));
    const goalImages = importAll(require.context('../images/pastProject/changemakerChallenge/goals', false, /\.(png|jpe?g|svg)$/));
    const aboutUsText = "The Changemaker Challenge (CMC), which is a two day event (on the third week of February) where students across faculties come together to create a project-based solution."
    const impactStats = [
        {title: "Community Partnership with Kudoz",description: "Kudoz is a program that allows individuals with cognitive disabilities to take part in different one-on-one experiences."},
        {title: "Partnership with Scotiabank",description: "The branch manager acted as a mentor to us. Furthermore, employees from the branch assisted in the interview workshops, helping us conduct mock interviews with students."},
        {title: "Enrich Students Education",description: "Successfully integrated a scholarship unit into the curriculum."}
      ];
    const goals = ['Zero Hunger', 'Clean Water and Sanitation', 'Sustainable Cities']
    const mainpage =(
        <main>
            <div className = 'flex flex-col gap-40'>
                <PastProjectIntro timeRange={'2014-2016'} title ={'Changemaker Challenge'}  hasButton = {true} buttonText={'Our Facebook'} aboutUsText={aboutUsText} image = {generalImages}/>

                
                <div className = 'mx-20 md:mx-40 space-y-10'>
                        <div className='me-20 space-y-5 md:me-60'>
                            <div className="text-md text-[#D00200] font-semibold cursor-pointer">(SDGs)</div>
                            <div className='text-3xl font-medium'>U.N. Sustainable Development Goals</div>
                        </div>

                        <div className="flex flex-col bg-white m-auto p-auto">
                            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                                <div className="flex flex-nowrap ml-0 gap-10">
                                {goals.map((goal, index) => (
                                    <div key={index} className="inline-block px-3">
                                    <div
                                    className=" learn-more-button w-80 h-full max-w-xs overflow-hidden rounded-lg bg-white flex flex-col gap-5 justify-between border">
                                        <img 
                                        src={goalImages['goal_'+ (index+1) + '.png']} 
                                        alt={goal} 
                                        className="w-full h-auto object-cover h-72 p-1 rounded-xl" 
                                        />
                                        <div className="p-4 flex flex-col flex-grow items-center">
                                        <div className="font-semibold text-[18px] mb-2">{goal}</div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>







                </div>

             </div>
          
        </main>
    );

    return (
        <PageTemplate component={mainpage}></PageTemplate>
    );
}

export default ChangemakerChallenge;

