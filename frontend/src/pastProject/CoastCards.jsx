import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';

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

    const mainpage = (
        <main className="mt-40">
            <div className = 'flex flex-col gap-20'>
                <div className = 'mx-40'>
                    <div className="text-md text-[#D00200] font-semibold cursor-pointer">Enactus 2014-2016</div>
                    <div className="text-3xl font-bold mb-4">Coast Cards</div>
                    <img src= {generalImages['general_1.png']}></img>
                </div>

                <div className = 'mx-40'>
                    <img src= {generalImages['general_2.png']}></img>
                </div>

                <div className = 'mx-40 space-y-5'>
                        <div className='me-60 space-y-5'>
                            <div className="text-md text-[#D00200] font-semibold cursor-pointer">Our Process</div>
                            <div className='text-3xl bold-bold'>The coasters are blended together with scrap paper and organic material to create our beautiful handmade greeting cards</div>
                        </div>
                       
                        <div className="flex flex-col bg-white m-auto p-auto">
                            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                                <div className="flex flex-nowrap ml-0 gap-10">
                                {processes.map((process, index) => (
                                    <div key={index} className="inline-block px-3">
                                    <div
                                    // shadow-md 
                                    className=" learn-more-button w-80 h-full max-w-xs overflow-hidden rounded-lg bg-white flex flex-col gap-5 justify-between border">

                                        <img 
                                        src={processImages['process_'+ (index+1) + '.png']} 
                                        alt={process.title} 
                                        className="w-full h-auto object-cover h-72 p-1 rounded-xl" 
                                        />
                                        <div className="p-4 flex flex-col flex-grow items-center">
                                        <div className="font-semibold text-[18px] mb-2">{process.title}</div>
                                        <div className="mx-5 text-center text-gray-700 text-base text-[16px] mb-4 flex-grow">{process.description}</div>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                        
               
                    
                </div>
                <div className = 'bg-[#FBFBFB] py-36'>
                    <div className = 'mx-40'>
                        <div className = 'text-2xl font-semibold text-center'>
                            Every candle you purchase is a step towards environmental conservation. Experience the magic of candlelight while being a part of something greater – a movement that believes in the power of small actions to create significant impact.
                        </div>
                    </div> 
                </div>

                <div className = 'mx-40'>
                    <div className = 'flex flex-col items-center gap-5'>
                        <div className="text-md text-[#D00200] font-semibold cursor-pointer">Our Impact</div>
                        <div className = 'flex flex-row gap-20 py-20'>
                            {impactStats.map((stat, index) => (
                                <div>
                                    <div className = 'text-[#181818] text-2xl font-semibold'>{stat.value}</div>
                                    <div className='text-[#5C5C5C] text-sm'>{stat.description}</div>
                                </div>
                            ))}
        
                        </div>

                    </div>

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
