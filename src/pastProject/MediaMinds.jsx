import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';
import { PastProjectIntro } from '../components/PastProjectIntro';
import Subtitle from '../components/Subtitle';

const MediaMinds =() => {
    const generalImages = importAll(require.context('../images/pastProject/mediaMinds', false, /\.(png|jpe?g|svg)$/));
    const aboutUsText = "About 80% of immigrant children under the age of 15 do not know how to speak English when they arrive in Canada. To tackle this issue, Media Minds was created in 2012 to help youth newcomers deepen their engagement in Canadian society while maintaining their cultural image through our digital literacy project.";
    const secondSession = {
        title: 'What We Do',
        description: 'Media Minds works with local schools and community centers to provide a team-based workshop that strives to help students integrate into and engage in their community. These workshops enhance their interpersonal and teamwork skills through the use of film education.'
    }

    const mainpage =(
        <main className='mt-20'>
            <div className = 'flex flex-col md:gap-36 gap-20'>
                <PastProjectIntro timeRange={'2014-2016'} title ={'Media Minds'}  hasButton = {false} buttonText={''} aboutUsText={aboutUsText} image = {generalImages}/>

                {/* <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col justify-between gap-40 items-center md:flex-row xl:flex-row'> */}
                <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex justify-between items-center flex-col pastIntro-md:flex-row gap-10 pastIntro-md:gap-40'>
                                <img src= {generalImages['general_3.png']} className = 'rounded-xl w-full  pastIntro-md:w-2/5'></img>
                                <div className = 'space-y-10'>
                                    <Subtitle text={secondSession['title']}/>
                                    <div className = 'text-[#181818] sm:text-md text-base'>{secondSession['description']}</div>
                                </div>
                </div>
     
            

             <div className = 'bg-[#FBFBFB] py-28 w-screen'>

                <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col gap-5 items-center'>
                        <Subtitle text='Goal'/>
                        <div className = 'text-xl sm:text-2xl font-medium text-center md:mx-40 impact-sm:mx-24 mx-5  font-[500] text-[#181818]'>
                        Our goal is to give students a more effective transition into high school by empowering them to speak up, share their ideas and overcome the barriers they face.
                        </div>
                </div> 

            </div>

            
            <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col gap-5 items-center mb-28'>
                        <div className="text-md text-[#D00200] font-semibold cursor-pointer">Impact</div>
                        <div className = 'text-xl sm:text-2xl font-medium text-center md:mx-40 impact-sm:mx-24 mx-5 font-[500] text-[#181818]'>
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

export default MediaMinds;
