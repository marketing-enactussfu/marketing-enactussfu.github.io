import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';
import { PastProjectIntro } from '../components/PastProjectIntro';
import Subtitle from '../components/Subtitle';

const CoastCard =() => {
    const generalImages = importAll(require.context('../images/pastProject/coastCard/general', false, /\.(png|jpe?g|svg)$/));
    const processImages = importAll(require.context('../images/pastProject/coastCard/processes', false, /\.(png|jpe?g|svg)$/));
    const processes = [
        {title: "Blend",description: "First we blend up the scrap paper until they are broken up into small bits."},
        {title: "Filter",description: "Next we squeeze out the excess liquid from the paper by filtering it with the strainer."},
        {title: "Stamp",description: "Then we customize the dried papers with our stamp."},
      ];

    const impactStats = [
        {value: "1500+",description: "Coasters diverted from entering landfills"},
        {value: "105 lbs",description: "Diverted carbon emissions"},
        {value: "150+",description: "Community members educated"},
    ];

    const aboutUsText = 'In 2016, our project founder witnessed the overwhelming amount of coasters being thrown out every night by local restaurants. We created Coast Cards- a project within Enactus SFU that sells eco-friendly greeting cards made from upcycling used restaurant coasters.'

    const mainpage = (
        <main className='mt-20'>
            <div className = 'flex flex-col md:gap-36 gap-20'>

                <PastProjectIntro timeRange={'2014-2016'} title ={'Coast Cards'}  hasButton = {true} buttonText={'Our Facebook'} aboutUsText={aboutUsText} image = {generalImages} buttonLink={'https://www.facebook.com/coastcardsSFU?__xts__[0]=68.ARA6BoPRaWy-CXtg23bN_mhGx-2oA37brCLmEsaLBDXDS3yz7fxP4QlEQEYJIt9lZJsQNS0kblMC6WF6rkxNWH5UM-xMAgokRP3Cky2cwyw85mpC44ENzKvXSjwPJHT_urtcdhQjhNt5l-sj2oL-SeEOQdGpRC2InoAI0RjAtvG2V8CB9TSjmxuhlEmXIuLfMc_vDqKXQ89ytx-NaXljOetSHxvJozoDp6ztQYk-WUMAyjWHJ56GQ7eQhZ2cLXpT0dKu7cOvVwd6QNhBkKFCF8DXzFdN3uQ&fref=nf&hc_ref=ARQ7uBSwvyANBTho71Aj73KFqZKQ1IHYZfnMvJ6QjJp5QX96VJOJiI0HRfwrwSeWnrE'}/>
                <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 space-y-10'>
                        <div className='me-20 space-y-5 md:me-60'>
                            <Subtitle text='Our Process'/>
                            <div className='text-2xl sm:text-3xl font-[500]'>The coasters are blended together with scrap paper and organic material to create our beautiful handmade greeting cards</div>
                        </div>

                        <div className="flex flex-col bg-white m-auto p-auto">
                            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                                <div className="flex flex-nowrap ml-0 gap-10">
                                {processes.map((process, index) => (
                                    <div key={index} className="inline-block px-3">
                                    <div
                                    className=" learn-more-button w-80 h-full max-w-xs overflow-hidden rounded-xl bg-white flex flex-col gap-5 justify-between border">

                                        <img 
                                        src={processImages['process_'+ (index+1) + '.png']} 
                                        alt={process.title} 
                                        className="w-full h-auto object-cover h-72 p-1 rounded-xl" 
                                        />
                                        <div className="p-4 flex flex-col flex-grow items-center">
                                        <div className="font-[400] sm:text-xl text-md mb-2 text-[#181818]">{process.title}</div>
                                        <div className="mx-5 text-center text-xs sm:text-sm text-xs mb-4 flex-grow text-[#5C5C5C]">{process.description}</div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                </div>

                <div className = 'bg-[#FBFBFB] py-28 w-screen'>
                    <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10'>
                        <div className = 'sm:text-2xl text-xl font-[500] text-center text-[#181818]'>
                            Every candle you purchase is a step towards environmental conservation. Experience the magic of candlelight while being a part of something greater – a movement that believes in the power of small actions to create significant impact.
                        </div>
                    </div> 
                </div>
         
                <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10'>
                    <div className = 'flex flex-col items-center gap-10'>
                        <Subtitle text='Our Impact'/>
                        <div className = 'grid coastCardImpact-sm:grid-cols-3 grid-cols-1 coastCardImpact-sm:gap-20 gap-10 items-center'>
                            {impactStats.map((stat, index) => (
                                <div className = 'flex flex-col gap-2 items-center'>
                                    <div className = 'text-[#181818] text-xl sm:text-2xl font-semibold'>{stat.value}</div>
                                    <div className='text-[#5C5C5C] text-xs sm:text-sm text-center'>{stat.description}</div>
                                </div>
                            ))}
    
                        </div>

                    </div>
                </div>

                <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 mb-20'>
                    <img src= {generalImages['general_3.png']} className='w-full pb-10'></img>
                </div>

                

            </div>

   

        </main>
    );

    return (
        <PageTemplate component={mainpage}></PageTemplate>
    );
}

export default CoastCard;
