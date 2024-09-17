import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';
import { PastProjectIntro } from '../components/PastProjectIntro';

const KindredKnots =() => {
    const generalImages = importAll(require.context('../images/pastProject/countOnMe', false, /\.(png|jpe?g|svg)$/));
    const aboutUsText = "Count on Me strives to provide youth with assistance in financial literacy, financial independence, and employability skills. We partner with community organizations and highschools to provide workshops regarding 5 topics. Our project is lead by trained youth leaders and consists of five hands-on workshops which include: discussions, interactive activities, and PowerPoint presentations. Our program empowers students with the necessary tools to build their own secure and fulfilling futures.";
    const impactStats = [
        {title: "Community Partnership with Kudoz",description: "Kudoz is a program that allows individuals with cognitive disabilities to take part in different one-on-one experiences."},
        {title: "Partnership with Scotiabank",description: "The branch manager acted as a mentor to us. Furthermore, employees from the branch assisted in the interview workshops, helping us conduct mock interviews with students."},
        {title: "Enrich Students Education",description: "Successfully integrated a scholarship unit into the curriculum."}
      ];
    
    const mainpage =(
        <main className = 'mt-4'>
            <div className = 'flex flex-col gap-40'>
                <PastProjectIntro timeRange={'2014-2016'} title ={'Count On Me'}  hasButton = {true} buttonText={'Our Facebook'} aboutUsText={aboutUsText} image = {generalImages}/>

                <div className='bg-[#FBFBFB] py-36 w-screen'>
                    <div className='mx-20 md:mx-40 flex flex-col gap-20'>
                        
                        <div className='flex flex-col items-center'>
                        <div className="text-md text-[#D00200] font-semibold cursor-pointer">Our Impact</div>
                        
                        {/* Updated with grid layout */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-10'>
                            {impactStats.map((stat, index) => (
                            <div key={index} className='text-center'>
                                <div className='text-[#181818] text-2xl font-semibold'>{stat.title}</div>
                                <div className='text-[#5C5C5C] text-sm'>{stat.description}</div>
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

export default KindredKnots;
