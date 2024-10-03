import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 
import { history } from '../data/history';
import { PastProjectIntro } from '../components/PastProjectIntro';
import Subtitle from '../components/Subtitle';

const BannerBags =() => {
    const generalImages = importAll(require.context('../images/pastProject/bannerBag/general', false, /\.(png|jpe?g|svg)$/));
    const bottonLineImages = importAll(require.context('../images/pastProject/bannerBag/bottonLine', false, /\.(png|jpe?g|svg)$/));
    const aboutUsText = "Many students are unaware of the amount of waste that we throw away, and this ultimately goes into the landfills. By educating high school students about environmental sustainability, they can make greener decisions and help their communities to become more sustainable for present and future generations. Banner Bags works to achieve this by developing an education curriculum targeted at high school students to highlight the management of waste through the upcycling of banners that students can constantly reuse.";
    const sustainabilityInitiatives = [
        {
          title: "Social",
          description: "We engage high school students to be more aware about sustainability issues and help them contribute to make their communities into bags."
        },
        {
          title: "Economic",
          description: "We support other organizations like Common Thread and work with them to secure reliable streams of revenue."
        },
        {
          title: "Environmental",
          description: "We take city street banners and work with high school students to upcycle them into bags. By diverting this waste from the landfill, we can minimize the harmful impact on the communities we live in."
        }
      ];

      const componentsData = [
        {
          title: "Education",
          description: "Our Education team goes to various high schools (goal: 1-2 schools a week and a goal of 1000 students impacted) and presents to high school students on environmental sustainability. At the presentations, we provide classrooms with a class set of banners, which they upcycle into Banner Bags. Banner companies provide our program with used street banners that would ordinarily be thrown into the landfill."
        },
        {
          title: "Go Green",
          description: "After the textiles students have the newfound knowledge and by targeting other student groups, the Go Green Challenge lets students explore their creativity by finding ways to upcycle waste in their communities through projects. The progress will be tracked through monthly follow-up mentorship sessions and through the creation of videos."
        },
        {
          title: "Social Enterprise",
          description: "We are also working on a revenue-generating social enterprise model with Common Thread."
        }
      ];
      

    
    const mainpage =(
        <main className='mt-20'>
            <div className = 'flex flex-col md:gap-36 gap-20'>
                <PastProjectIntro timeRange={'2014-2016'} title ={'Banner Bag'}  hasButton = {false} buttonText={''} aboutUsText={aboutUsText} image = {generalImages}/>

                <div className = 'bg-[#FBFBFB] py-28 w-screen'>
                    <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col gap-10 items-center'>
                        <Subtitle text='Mission'/>
                            <div className = 'text-xl sm:text-2xl font-medium text-center md:mx-40 mx-10'>
                            Banner Bags works to develop an education curriculum targeted at high school students to highlight the management of waste through the upcycling of banners that students can constantly reuse.
                            </div>
                    </div> 
                
                </div>

                <div className = 'lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col items-center 3components-md:gap-10 gap-7'>
                        <Subtitle text='3 Components'/>   
                       
                        
                            <div className="3components-sm:p-10 p-6 pb-20 border rounded-lg">
                                <h3 className="text-md sm:text-lg font-semibold text-center">{componentsData[0].title}</h3>
                                <p className="mt-4 text-xs sm:text-sm text-center">{componentsData[0].description}</p>
                            </div>
                            <div className="grid grid-cols-1 3components-md:grid-cols-5 3components-md:gap-10 gap-4">
                                {componentsData.map((component, index) => (
                                    index > 0 && (
                                    <div
                                        key={index}
                                        className={`3components-sm:p-10 p-6 pb-20 border rounded-lg ${
                                        index % 2 !== 0
                                            ? 'col-span-1 3components-md:col-span-3'
                                            : 'col-span-1 3components-md:col-span-2'
                                        }`}
                                    >
                                        <h3 className="text-md sm:text-lg font-semibold text-center">{component.title}</h3>
                                        <p className="mt-4 text-xs sm:text-sm text-center">{component.description}</p>
                                    </div>
                                    )
                                ))}
                            

               

                        </div>
                       
                                    
                </div>

                <div className = 'bg-[#FBFBFB] py-28 w-screen'>

                    <div className="lg:mx-40 md:mx-28 sm:mx-16 mx-10 flex flex-col items-center">
                    <Subtitle text='Triple Bottom Line'/>
                    <div className="flex flex-col justify-center gap-10 mt-10 tripleBottomLine-md:flex-row">
                        {sustainabilityInitiatives.map((component, index) => (
                        <div 
                            key={index} 
                            className="w-full px-3">
                            <div className="learn-more-button h-full max-w-xs overflow-hidden rounded-lg bg-white flex flex-col gap-5 justify-between border">
                            <img 
                                src={bottonLineImages['bottonLine_' + (index + 1) + '.png']} 
                                alt={component.title} 
                                className="w-full h-auto object-cover h-72 p-1 rounded-xl" 
                            />
                            <div className="p-6 flex flex-col flex-grow items-center">
                                <div className="font-semibold sm:text-lg text-md text-[#181818] mb-2">{component.title}</div>
                                <div className="text-[#5C5C5C] text-xs sm:text-sm text-center">{component.description}</div>
                            </div>
                            </div>
                        </div>
                        ))}
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

export default BannerBags;
