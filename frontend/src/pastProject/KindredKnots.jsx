import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';
import { PastProjectIntro } from '../components/PastProjectIntro';

const KindredKnots = () => {
    const generalImages = importAll(require.context('../images/pastProject/kindredKnots/general', false, /\.(png|jpe?g|svg)$/));
    const whatWeDoImages = importAll(require.context('../images/pastProject/kindredKnots/whatWeDo', false, /\.(png|jpe?g|svg)$/));
    const parnerImages = importAll(require.context('../images/pastProject/kindredKnots/partners', false, /\.(png|jpe?g|svg)$/));
    
    const aboutUsText = "About 80% of immigrant children under the age of 15 do not know how to speak English when they arrive in Canada. To tackle this issue, Media Minds was created in 2012 to help youth newcomers deepen their engagement in Canadian society while maintaining their cultural image through our digital literacy project.";
    
    const corePillars = [
        {
          title: "Fostering Valuable Relationships",
          description: "Elder participants receive the opportunity to develop valuable relationships with community members, our team, and youth volunteers through tailored knitting and social activities. Bringing an enhanced sense of community and belonging."
        },
        {
          title: "Immersive Learning Experience",
          description: "Through our detailed knitting workshop guides, participants can delve into the opportunity to learn the fundamental basics of knitting whilst building problem-solving and teamwork abilities."
        },
        {
          title: "Social Contribution Value",
          description: "Our venture goes a step further by donating completed knitted projects to the unhoused population in need of support. Kindred Knots addresses a pressing societal issue and provides participating elders with a sense of belonging to the community."
        }
    ];
   
    const mainpage = (
        <main className='mt-20'>
            <div className='flex flex-col md:gap-36 gap-20'>
                <PastProjectIntro 
                    timeRange={'2023-2024'} 
                    title={'Kindred Knots'} 
                    hasButton={true} 
                    buttonText={'Our Instagram'} 
                    aboutUsText={aboutUsText} 
                    image={generalImages} 
                />

                <div className='bg-[#FBFBFB] py-28 w-screen'>
                    <div className='lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col gap-20'>
                        <div className='flex flex-col items-center'>
                            <div className='sm:text-md text-base text-[#D00200] font-semibold'>Our Impact</div>
                            
                            <div className='grid grid-cols-1 impact-md:grid-cols-3 gap-10 py-10'>
                                {corePillars.map((stat, index) => (
                                    <div key={index} className='text-center'>
                                        <div className='text-[#181818] text-2xl font-semibold'>{stat.title}</div>
                                        <div className='text-[#5C5C5C] text-sm'>{stat.description}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col whatweDoPic-sm:gap-10 gap-6 items-center'>
                    <div className='sm:text-md text-base text-[#D00200] font-semibold'>What We Do</div>
                    <div className = 'whatweDo-sm::mr-56 mr-10'>
                        <div className = 'text-start'>
                            Kindred Knots delivers bi-weekly interactive knitting sessions at partnering elder care centres. Our team provides social activities and knitting projects for both elders and youth participants, with each session meticulously crafted. Each knitting project is developed with an alignment to address the needs of the unhoused.
                        </div>
                    </div>

                    <div className="grid grid-cols-1 whatweDoPic-sm:grid-cols-3 whatweDoPic-sm:gap-3 gap-6 items-center">
                            {Object.keys(whatWeDoImages).map((image, index) => (
                                image !== 'whatWeDo_4.png' && (
                                    <img key={index} src={whatWeDoImages[image]} className = 'whatweDoPic-sm:rounded-md w-screen rounded-xl'></img>
                                )
                            ))}
                    </div>

                    <div className = 'flex whatweDo-sm:flex-row flex-col justify-between gap-10 items-center'>
                                <img src= {whatWeDoImages['whatWeDo_4.png']} className = 'rounded-xl w-full'></img>
                                <div className = 'space-y-10'>
                                <div>Kindred Knots’ Monthly Clothing Donation Drives are hosted regularly at SFU’s Burnaby campus. Through the collaborative efforts of the student community, unused clothing items are given a second life. All collected donations are then donated to partnering organizations to provide essential clothing support for Vacnouver’s unhoused.</div>
                                </div>
                    </div>
            
                </div>

                <div className='md:mx-40 mx-20 flex flex-col items-center gap-5 mb-20'>
                        <div className="text-md text-[#D00200] font-semibold cursor-pointer">Partners</div>
                        <div className="grid grid-cols-1 partner-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-center items-center">
                                {Object.keys(parnerImages)
                                    .map((key, index) => (
                                            <div key={index} className="p-1 flex justify-center">
                                                <img src={parnerImages[key]} alt="general" className="rounded w-full" />
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

export default KindredKnots;

