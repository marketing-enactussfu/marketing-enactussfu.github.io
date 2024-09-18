import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';
import { PastProjectIntro } from '../components/PastProjectIntro';

const MediaMind =() => {
    const generalImages = importAll(require.context('../images/pastProject/mediaMinds', false, /\.(png|jpe?g|svg)$/));
    const aboutUsText = "About 80% of immigrant children under the age of 15 do not know how to speak English when they arrive in Canada. To tackle this issue, Media Minds was created in 2012 to help youth newcomers deepen their engagement in Canadian society while maintaining their cultural image through our digital literacy project.";
    const secondSession = {
        title: 'What We Do',
        description: 'Media Minds works with local schools and community centers to provide a team-based workshop that strives to help students integrate into and engage in their community. These workshops enhance their interpersonal and teamwork skills through the use of film education.'
    }

    const mainpage =(
        <main className = 'mt-4'>
            <div className = 'flex flex-col gap-40'>
                <PastProjectIntro timeRange={'2014-2016'} title ={'Media Minds'}  hasButton = {false} buttonText={''} aboutUsText={aboutUsText} image = {generalImages}/>

                <div className = 'mx-20 md:mx-40 flex flex-col justify-between gap-40 items-center md:flex-row xl:flex-row'>
                                <img src= {generalImages['general_3.png']} className = 'rounded-xl w-full md:w-2/5'></img>
                                <div className = 'space-y-10'>
                                    <div className="text-md text-[#D00200] font-semibold cursor-pointer">{secondSession['title']}</div>
                                    <div>{secondSession['description']}</div>
                                </div>
                </div>
     
             </div>

             <div className = 'bg-[#FBFBFB] py-36 w-screen'>

                <div className = 'mx-20 md:mx-40 flex flex-col gap-5 items-center'>
                        <div className="text-md text-[#D00200] font-semibold cursor-pointer">Goal</div>
                        <div className = 'text-2xl font-medium text-center md:mx-40 mx-10'>
                        Our goal is to give students a more effective transition into high school by empowering them to speak up, share their ideas and overcome the barriers they face.
                        </div>
                </div> 

            </div>


            <div className = 'bg-[#FBFBFB] py-36 w-screen'>
                <div className = 'mx-20 md:mx-40 flex flex-col gap-5 items-center'>
                        <div className="text-md text-[#D00200] font-semibold cursor-pointer">Impact</div>
                        <div className = 'text-2xl font-medium text-center md:mx-40 mx-10'>
                        In 2015/2016, 15 Enactus SFU students were able to impact 58 individuals in the community and contributed over 3670 volunteer hours. 
                </div>
            </div> 

</div>

            
          
        </main>
    );

    return (
        <PageTemplate component={mainpage}></PageTemplate>
    );

  
}

export default MediaMind;
