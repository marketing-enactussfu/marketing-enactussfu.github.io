import React from 'react';
import PageTemplate from './components/PageTemplate';
import { importAll } from './utilities/importImages'; 
import competitions from './images/home/competitions.png';
import ourGoal from './images/home/ourGoal.png';
import development from './images/home/ourgoals/development.png';
import member_engagement from './images/home/ourgoals/member_engagement.png';
import collective_growth from './images/home/ourgoals/collective_growth.png';
import header from './images/home/header.png';
import { useNavigate } from 'react-router-dom';
import header_layer from   './images/home/header_layer.png';
import GetUpdate from './components/GetUpdate';


const ourGoalsContent = {
    title: 'We build projects that create a positive impact on our community.',
    text: "What others see as challenges, we see as opportunities to innovate. With an active member base across multiple concentrations and faculties, Enactus SFU continues to expand sustainable projects yearly, empowering students to develop entrepreneurial skills and become future leaders."
};

const ourGoalsSession = [
    {title: "Development", description: "Allow students to build sustainable projects and further their impact by adapting to changing trends.",icon: development},
    {title: "Member Engagement",description: "Build a welcoming, engaging, and inclusive community for all members.",icon: member_engagement},
    {title: "Collective Growth",description: "Foster unity and create opportunities for members to make an impact on the community and the club.",icon:collective_growth}
  ];
const highLightsContent = [
    {title: '15+',description: 'Projects operated throughout the years.'},
    {title: '20+',description: 'Awards won from our initiatives and events.'},
    {title: '100+',description: 'Members across faculties and concentrations.'},
    {title: '187,000+',description: 'Volunteer hours from our hardworking members.'},
    {title: '15,000+',description: 'Lives impacted by our projects.'}
  ];

const whatWeDoContent = {
    title : 'Explore current projects.',
    text: 'We create new projects every year. Be part of our team and contribute to initiatives that have a positive impact on society and the environment.'
}

const competitionsContent = {
    title:'Join our team and turn your projects into award-winning initiatives.',
    text: "We participate in Enactus Canada’s Regional and National expositions to address pressing economic, social, and environmental needs. Whether you're competing as a presenter or a designer, you’ll have the chance to collaborate with peers, gain recognition, and receive awards for your participation. Your contribution plays a crucial role in our collective success, so join us to represent our team and make a difference in our community."
}

const currentProjectsContent = [
    {title: 'BeeKind Co.',description: 'Working to turn the candle industry into a sustainable practice, while spreading mental health resources and awareness throughout our community.'},
    {title: 'Second Savour',description: 'A social enterprise that aims to combat food waste originating from excess surplus produce into delicious candied peels.'},
    {title: 'Himalayan Skyes',description: 'Our mission is to empower the youth in Nepal, with essential business skills to help them thrive in their local communities.'},
    {title: 'Aqua Analyzer', description: 'The Aqua Analyzer tests water quality for indigenous communities.'},
]


const Home = () =>{
    const navigate = useNavigate();
    const brandImages = importAll(require.context('./images/home/brands', false, /\.(png|jpe?g|svg)$/));
    const currentProjectsContentImages = importAll(require.context('./images/home/currentProjects', false, /\.(png|jpe?g|svg)$/));

    const mainpage = (
        <main className = 'space-y-5'>
            <div className="flex flex-col md:gap-36 gap-20">
                <div className="relative w-full h-screen w-screen">
                    <img 
                        src={header}
                        alt="Enactus Team" 
                        className="absolute inset-0 w-screen h-screen object-cover z-0"
                    />
                    <img src = {header_layer}
                        alt="Enactus Team layer" 
                        className="absolute inset-0 w-screen h-screen object-cover z-10 opacity-100"
                    ></img>

                    <div className="absolute inset-0 bg-black  opacity-10 z-20"></div>
                    <div className="lg:mx-40 md:mx-28 sm:mx-16 mx-10 relative z-30 h-full flex items-center">
                        <div className="text-white space-y-4 max-w-lg w-[300px]">
                        <h1 className="text-3xl sm:text-4xl font-bold">At Enactus SFU, we dare to do.</h1>
                        <p className="text-base sm:text-xl">
                            Ignite your integrity, passion, and learn from each other in a spirit of innovation and collaboration.
                        </p>
                        <button className="session-button text-sm sm:text-base font-semibold"
                                onClick={() => navigate('/careers')}>
                            Join Our Team
                        </button>
                        </div>
                    </div>
                </div>
                
                {/*Our Goals*/}
                <div className='lg:mx-40 md:mx-28 sm:mx-16 mx-10 space-y-10'>
                    {/* Our Goals Section */}
                    <div className='sm:text-md text-base text-[#D00200] font-semibold'>Our Goals</div>
                    <div className='flex flex-col custom-lg:flex-row justify-between space-x-0 custom-lg:gap-20 gap-10 md:space-y-0 justify-between items-start'>
                        <div className='flex flex-col items-start md:gap-10 gap-5  w-full custom-lg:w-3/5'>
                            <div className='font-bold text-2xl custom-lg:text-3xl'>{ourGoalsContent.title}</div>
                            <div className='text-[#5C5C5C] sm:text-md text-base'>{ourGoalsContent.text}</div>
                            <button 
                            className='session-button sm:text-md text-base font-semibold'
                            onClick={() => navigate('/about/what-we-do')}
                            >Learn More</button>
                        </div>

                        <img 
                        src={ourGoal} 
                        alt="our_goals" 
                        className='object-contain w-full custom-lg:w-2/5'
                        />
                    </div>
                    {/* Goals Display */}
                    <div className='grid custom-lg:grid-cols-3 grid-cols-1 gap-10 mt-8'>
                        {ourGoalsSession.map((session, index) => (
                        <div key={index} className="flex flex-col items-start gap-2">
                            <img src={session.icon} alt={session.title}/>
                            <div className='text-[13px] sm:text-[14px] font-semibold'>{session.title}</div>
                            <div className='text-xs sm:text-sm text-gray-600'>{session.description}</div>
                        </div>
                        ))}
                    </div>
                </div>

                {/*Highlights*/}
                <div className="py-10 bg-[#FBFBFB] w-screen">
                    <div className = 'md:mx-28 lg:mx-40 sm:mx-16 mx-10 space-y-10'>
                        <div className="sm:text-md text-base text-[#D00200] font-semibold">Highlights</div>
                        <div className="text-[28px] sm:text-[32px] font-semibold">
                            Over the past 5 years, Enactus SFU has dedicated over{" "}
                            <span className="text-[#D00200]">187,000+ hours</span> to improve the lives of over{" "}
                            <span className="text-[#D00200]">15,000+ individuals.</span>
                        </div>
                        {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-6"> */}
                        <div className = 'flex flex-col md:flex-row justify-between gap-8 mt-6'>
                            {highLightsContent.map((session, index) => (
                            <div key={index}>
                                <div className="text-[28px] sm:text-[32px] font-bold">{session.title}</div>
                                <div className="text-[15px] sm:text-sm text-gray-600">{session.description}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                   
                </div>
            

                {/* What We Do */}
                <div className = 'md:mx-28 lg:mx-40 sm:mx-16 mx-10'>
                    <div className="py-10 space-y-10">
                        <div className="sm:text-md  text-base text-[#D00200] font-semibold">What We Do</div>
                        <div className="flex flex-col whatWeDo-md:flex-row justify-between whatWeDo-md:gap-20 gap-5">
                            <div className="font-bold text-2xl md:text-3xl whatWeDo-md:w-2/5 w-full">{whatWeDoContent.title}</div>
                            <div className="text-[#5C5C5C] md:text-md text-base whatWeDo-md:w-3/5 w-full">{whatWeDoContent.text}</div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white">
                        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                            <div className="flex flex-nowrap ml-0">
                            {currentProjectsContent.map((project, index) => (
                                <div key={index} className="inline-block px-3">
                                <div
                                    className=" learn-more-button w-60 sm:w-80 h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-between">
                                    <img 
                                    src={currentProjectsContentImages[project.title.replace(/\s+/g, '_').toLowerCase() + '.png']} 
                                    alt={project.title} 
                                    className="w-auto object-cover h-72 p-1 rounded-lg" 
                                    />
                                    <div className="p-4 flex flex-col flex-grow">
                                    <div className="font-semibold text-[12px] sm:text-[18px] mb-2">{project.title}</div>
                                    <div className="text-[#5C5C5C] text-[11px] sm:text-[16px] mb-4 flex-grow">{project.description}</div>
                                    <a href="/about/what-we-do" 
                                    // className="learn-more text-red-500 font-semibold inline-block text-[12px] mt-auto"
                                    className="learn-more text-red-500 font-semibold inline-block text-[11px] sm:text-[12px] mt-auto "> Learn More</a>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            

                <div className='md:mx-28 lg:mx-40 sm:mx-16 mx-10 space-y-10'>
                    <div className="grid grid-cols-1 home-competitions-md:grid-cols-2 home-competitions-md:gap-20 items-center gap-16">
                        <div className = 'space-y-4'>
                        <div className="sm:text-md text-base text-[#D00200] font-semibold">Enactus Canada Competitions</div>
                        <div className='font-semibold text-2xl md:text-3xl'>{competitionsContent['title']}</div>
                        <div className='text-[#5C5C5C] sm:text-md text-base'>{competitionsContent['text']}</div>
        
                            <div className = 'flex flex-row gap-3'>
                                <button className = 'bg-[#D00200] text-white rounded-full px-3 py-2 font-semibold hover:bg-red-800 sm:text-md text-base' onClick={() => navigate('/careers')}>Join Us</button>
                                <button className = 'bg-[#868686] text-white rounded-full px-3 py-2 font-semibold hover:bg-gray-500 sm:text-md text-base' onClick={() => navigate('/competitions')}>Learn More</button>
                            </div>
                        </div>
                        <img src = {competitions} alt = 'competitions' className = 'w-full rounded-xl'></img>
                    </div>

                </div>
               
                {/* brands */}
                <div className = 'gap-10 lg:mx-40 md:mx-28 sm:mx-16 mx-10'>
                {/* For smaller screens (combine both into a single div) */}
                <div className=" flex flex-col gap-10 items-center justify-center">
                    <div className='home-competitions-md:hidden grid md:grid-cols-4 sm:grid-cols-3 home-brand-sm:grid-cols-2  grid-cols-1 items-center justify-center'>
                            {Object.keys(brandImages)
                                .sort((a, b) => {
                                    const numA = parseInt(a.match(/\d+/)[0], 10);
                                    const numB = parseInt(b.match(/\d+/)[0], 10);
                                    return numA - numB;
                                })
                                .map((key, index) => (
                                    <div key={key} className="flex justify-center p-4 w-full"> 
                                        <img src={brandImages[key]} alt={key}/>
                                    </div>
                            ))}
                    </div>

                    <div className="hidden home-competitions-md:flex home-competitions-md:flex-row gap-10 items-center justify-center">
                        {/* First 6 images */}
                        {['brand_1.png', 'brand_2.png', 'brand_3.png', 'brand_4.png', 'brand_5.png', 'brand_6.png'].map((image, index) => (
                            <div key={index} className="justify-center">
                            <img src={brandImages[image]} alt={`brand ${index + 1}`} />
                            </div>
                        ))}
                        </div>

                    <div className="hidden home-competitions-md:flex home-competitions-md:flex-row gap-10 items-center justify-center mx-10 home-competitions-md:mx-20">
                        {/* Next 6 images */}
                        {['brand_7.png', 'brand_8.png', 'brand_9.png', 'brand_10.png', 'brand_11.png', 'brand_12.png'].map((image, index) => (
                            <div key={index} className="justify-center">
                            <img src={brandImages[image]} alt={`brand ${index + 7}`} />
                            </div>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Get Updates */}
                <GetUpdate/>
    

            </div>
            
        
        </main>
    )

    return(
        <PageTemplate component={mainpage}></PageTemplate> 
    )
}

export default Home;