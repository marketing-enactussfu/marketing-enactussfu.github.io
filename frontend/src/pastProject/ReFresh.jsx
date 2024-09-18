import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';
import { PastProjectIntro } from '../components/PastProjectIntro';

const ReFresh =() => {
    const generalImages = importAll(require.context('../images/pastProject/reFresh', false, /\.(png|jpe?g|svg)$/));
    const aboutUsText = "Refresh is a student-led social enterprise that collects and utilizes excess fruit produce from local grocers to create a variety of enjoyable culinary delights. We strive to provide an alternate future for visually imperfect produce in order to reduce food wastage, while making a measurable impact in our community.";

    const mainpage =(
        <main className = 'mt-4'>
            <div className = 'flex flex-col gap-40'>
                <PastProjectIntro timeRange={'2014-2016'} title ={'ReFresh'}  hasButton = {false} buttonText={''} aboutUsText={aboutUsText} image = {generalImages}/>
            <div className = 'bg-[#FBFBFB] py-36 w-screen'>
                <div className = 'mx-20 md:mx-40 flex flex-col gap-5 items-center'>
                        <div className = 'text-2xl font-medium text-center md:mx-40 mx-10'>
                            Over 30% of fruit and vegetables in North America don’t make it onto store shelves, simply because they do not fit the standard shape consumer.
                        </div>
                </div> 
            </div>

            <div className = 'mx-20 md:mx-40 flex flex-col gap-10 items-center'>
                            <div className="text-md text-[#D00200] font-semibold cursor-pointer">Mission</div>
                            <div className = 'text-2xl font-medium text-center md:mx-40 mx-10'>
                                    To provide a solution for excess groceries, while producing nutritious and sustainable merchandise for all to enjoy.
                            </div>
            </div> 

            <div className = 'mx-20 md:mx-40 flex flex-col justify-between gap-40 items-center md:flex-row xl:flex-row pb-10'>
                                <div className = 'space-y-10'>
                                                        <div className="text-md text-[#D00200] font-semibold cursor-pointer">{'Our Products'}</div>
                                                        <div>{'Surplus food products are turned into a variety of goods, including but not limited to: jams, sherbert, and any fruit snacks.'}</div>
                                </div>
                                <img src= {generalImages['general_3.png']} className = 'rounded-xl w-full md:w-2/5'></img>
            </div>

            </div>


          
        </main>
    );

    return (
        <PageTemplate component={mainpage}></PageTemplate>
    );
}

export default ReFresh;
