import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';
import { PastProjectIntro } from '../components/PastProjectIntro';
import Subtitle from '../components/Subtitle';

const BrightIdeas =() => {
    const generalImages = importAll(require.context('../images/pastProject/brightIdeas/general', false, /\.(png|jpe?g|svg)$/));
    const sponsorImages = importAll(require.context('../images/pastProject/brightIdeas/sponsors', false, /\.(png|jpe?g|svg)$/));
    const aboutUsText = "Bright Ideas offers students the opportunity to develop their entrepreneurial skills in a low-stakes environment and gain hands-on experience in the business world. Our program aims to connect students with various backgrounds and interests to share their knowledge and experiences.";
 
    
    const mainpage =(
        <main className='mt-20'>
            <div className = 'flex flex-col md:gap-36 gap-20'>
                <PastProjectIntro timeRange={'2016-2023'} title ={'Bright Ideas'}  hasButton = {true} buttonText={'Our Instagram'} aboutUsText={aboutUsText} image = {generalImages} buttonLink={'https://www.instagram.com/sfubrightideas/'}/>

                <div className = 'bg-[#FBFBFB] py-28 w-screen'>

                    <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10'>
                            <div className = 'text-2xl font-[500] text-center lg:mx-40 md:mx-28 sm:mx-16 mx-10'>
                                Bright Ideas is designed to instill confidence in students to enact change in their communities.
                            </div>
                    </div> 
                   
                </div>

                <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col gap-10 items-center'>
                    <Subtitle text='Bright Ideas Timeline'/>
                    <img src= {generalImages['general_3.png']}></img>
                </div>

                <div className='bg-[#FBFBFB] w-screen py-28 items-center'>
                    <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col gap-4'>
                        <div className="text-md text-[#D00200] font-semibold cursor-pointer">Our Sponsors</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-center">
                                {Object.keys(sponsorImages)
                                    .filter(key => key >= 'general_4.png')
                                    .map((key, index) => (
                                            <div key={index} className="p-1 flex justify-center">
                                                <img src={sponsorImages[key]} alt="general" className="rounded w-full" />
                                            </div>
                                    ))
                                }
                        </div>
                    </div>
                   
                </div>

                
           
                <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 mb-20'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
                            {Object.keys(generalImages)
                                .filter(key => key >= 'general_4.png')
                                .map((key, index) => (
                                        <div key={index} className="p-1 flex justify-center">
                                            <img src={generalImages[key]} alt="general" className="rounded w-full" />
                                        </div>
                                    
                                ))
                            }
                        </div>
                </div>


             </div>
          
        </main>
    );

    return (
        <PageTemplate component={mainpage}></PageTemplate>
    );
}

export default BrightIdeas;
