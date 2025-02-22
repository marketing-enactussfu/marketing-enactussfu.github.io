import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { PastProjectIntro } from '../components/PastProjectIntro';
import Subtitle from '../components/Subtitle';

const ReFresh =() => {
    const generalImages = importAll(require.context('../images/pastProject/reFresh', false, /\.(png|jpe?g|svg)$/));
    const aboutUsText = "Refresh is a student-led social enterprise that collects and utilizes excess fruit produce from local grocers to create a variety of enjoyable culinary delights. We strive to provide an alternate future for visually imperfect produce in order to reduce food wastage, while making a measurable impact in our community.";

    const mainpage =(
        <main className='mt-20'>
            <div className = 'flex flex-col md:gap-36 gap-20'>
                <PastProjectIntro timeRange={'2014-2016'} title ={'ReFresh'}  hasButton = {false} buttonText={''} aboutUsText={aboutUsText} image = {generalImages}/>

            <div className = 'bg-[#FBFBFB] py-28 w-screen'>
                <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col gap-5 items-center'>
                        <div className = 'text-xl sm:text-2xl font-medium text-center md:mx-40 mx-10'>
                            Over 30% of fruit and vegetables in North America don’t make it onto store shelves, simply because they do not fit the standard shape consumer.
                        </div>
                </div> 
            </div>

            <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col gap-10 items-center'>
                            <Subtitle text='Mission'/>
                            <div className = 'text-xl sm:text-2xl font-medium text-center md:mx-40 mx-10'>
                                    To provide a solution for excess groceries, while producing nutritious and sustainable merchandise for all to enjoy.
                            </div>
            </div> 

            <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col justify-between md:gap-40 gap-16 items-center md:flex-row xl:flex-row pb-20'>
                                <div className = 'space-y-5'>
                                                        <Subtitle text='Our Products'/>
                                                        <div className='text-[#181818] sm:text-md text-base'>{'Surplus food products are turned into a variety of goods, including but not limited to: jams, sherbert, and any fruit snacks.'}</div>
                                </div>
                                <img src= {generalImages['general_3.png']} className = 'rounded-md w-full md:w-2/5'></img>
            </div>

            </div>


          
        </main>
    );

    return (
        <PageTemplate component={mainpage}></PageTemplate>
    );
}

export default ReFresh;
