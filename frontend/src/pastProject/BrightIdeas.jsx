import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';
import { PastProjectIntro } from '../components/PastProjectIntro';

const BrightIdeas =() => {
    const generalImages = importAll(require.context('../images/pastProject/brightIdeas/general', false, /\.(png|jpe?g|svg)$/));
    const sponsorImages = importAll(require.context('../images/pastProject/brightIdeas/sponsors', false, /\.(png|jpe?g|svg)$/));
    const aboutUsText = "Bright Ideas offers students the opportunity to develop their entrepreneurial skills in a low-stakes environment and gain hands-on experience in the business world. Our program aims to connect students with various backgrounds and interests to share their knowledge and experiences.";
 
    
    const mainpage =(
        <main>
            <div className = 'flex flex-col gap-40'>
                <PastProjectIntro timeRange={'2014-2016'} title ={'Count On me'}  hasButton = {true} buttonText={'Our Instagram'} aboutUsText={aboutUsText} image = {generalImages}/>

                <div className = 'bg-[#FBFBFB] py-36 w-screen'>

                <div className = 'mx-20 md:mx-40'>
                        <div className = 'text-2xl font-semibold text-center mx-60'>
                            Bright Ideas is designed to instill confidence in students to enact change in their communities.
                        </div>
                    </div> 
                   
                </div>

                <div className = 'mx-20 md:mx-40 flex flex-col gap-10 items-center'>
                    <div className="text-md text-[#D00200] font-semibold cursor-pointer">Bright Ideas Timeline</div>
                    <img src= {generalImages['general_3.png']}></img>
                </div>

                <div className='bg-[#FBFBFB] w-screen py-40 flex flex-col gap-20 items-center'>
                    <div className="text-md text-[#D00200] font-semibold cursor-pointer">Our Sponsors</div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-center items-center">
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

                
           
                <div className = 'mx-20 md:mx-40'>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
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
