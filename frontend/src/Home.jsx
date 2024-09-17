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
            <div className="flex flex-col gap-20">
                <div className="relative w-full h-screen w-screen">
                    <img 
                        src={header}
                        alt="Enactus Team" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="ms-4 relative z-10 container mx-auto h-full flex items-center px-10">
                        <div className="text-white space-y-4 max-w-lg w-[300px]">
                        <h1 className="text-4xl font-bold">At Enactus SFU, we dare to do.</h1>
                        <p className="text-xl">
                            Ignite your integrity, passion, and learn from each other in a spirit of innovation and collaboration.
                        </p>
                        {/* <button className="bg-red-600 text-white py-3 px-6 rounded-full hover:bg-red-600 transition"> */}
                        <button className="session-button md:"
                                onClick={() => navigate('/careder')}>
                            Join Our Team
                        </button>
                        </div>
                    </div>
                </div>
                
                {/*Our Goals*/}
                <div className='mx-20 md:mx-40'>
                    {/* Our Goals Section */}
                    <div className='text-sm text-[#D00200] font-semibold'>Our Goals</div>
                    <div className='flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0 justify-between'>
                        <div className='flex flex-col items-start gap-4 w-full md:w-1/2'>
                        <div className='font-bold text-2xl md:text-3xl'>{ourGoalsContent.title}</div>
                        <div className='text-[#5C5C5C]'>{ourGoalsContent.text}</div>
                        <button 
                        className='session-button'
                        onClick={() => navigate('/about/what-we-do')}
                        >Learn More</button>
                        </div>

                        <img 
                        src={ourGoal} 
                        alt="our_goals" 
                        className='object-contain'
                        />
                    </div>
                    {/* Goals Display */}
                    <div className='grid grid-cols-3 gap-10 mt-8'>
                        {ourGoalsSession.map((session, index) => (
                        <div key={index} className="flex flex-col items-start gap-2">
                            <img src={session.icon} alt={session.title}/>
                            <div className='text-sm font-bold'>{session.title}</div>
                            <div className='text-sm text-gray-600'>{session.description}</div>
                        </div>
                        ))}
                    </div>
                </div>

                {/*Highlights*/}
                <div className="py-10 bg-[#FBFBFB] w-screen">
                    <div className = 'mx-20 md:mx-40'>
                        <div className="text-sm text-[#D00200] font-semibold">Highlights</div>
                        <div className="text-[32px] font-semibold">
                            Over the past 5 years, Enactus SFU has dedicated over{" "}
                            <span className="text-[#D00200]">187,000+ hours</span> to improve the lives of over{" "}
                            <span className="text-[#D00200]">15,000+ individuals.</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-6">
                            {highLightsContent.map((session, index) => (
                            <div key={index}>
                                <div className="text-[32px] font-bold">{session.title}</div>
                                <div className="text-sm text-gray-600">{session.description}</div>
                            </div>
                            ))}
                        </div>
                    </div>
                   
                </div>
            

                {/* What We Do */}
                <div className = 'mx-20 md:mx-40'>
                    <div className="p-10">
                        <div className="text-sm text-[#D00200] font-semibold">Where We Do</div>
                        <div className="flex flex-row justify-between gap-20">
                            <div className="font-bold text-3xl">{whatWeDoContent.title}</div>
                            <div className="text-[#5C5C5C]">{whatWeDoContent.text}</div>
                        </div>

                    </div>

                    <div className="flex flex-col bg-white m-auto p-auto ms-5">
                        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                            <div className="flex flex-nowrap ml-0">
                            {currentProjectsContent.map((project, index) => (
                                <div key={index} className="inline-block px-3">
                                <div
                                    className=" learn-more-button w-80 h-full max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-between">
                                    <img 
                                    src={currentProjectsContentImages[project.title.replace(/\s+/g, '_').toLowerCase() + '.png']} 
                                    alt={project.title} 
                                    className="w-full object-cover h-72 p-1 rounded-lg" 
                                    />
                                    <div className="p-4 flex flex-col flex-grow">
                                    <div className="font-semibold text-[18px] mb-2">{project.title}</div>
                                    <div className="text-gray-700 text-base text-[16px] mb-4 flex-grow">{project.description}</div>
                                    <a href="/about/what-we-do" 
                                    // className="learn-more text-red-500 font-semibold inline-block text-[12px] mt-auto"
                                    className="learn-more text-red-500 font-semibold inline-block text-[12px] mt-auto"> Learn More</a>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            

                <div className='mx-20 md:mx-40'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center p-10">
                        <div className = 'space-y-4'>
                            <div className = 'text-sm text-[#D00200] font-semibold'>Enactus Canada Competitions</div>
                            <div className = 'font-bold text-3xl'>{competitionsContent['title']}</div>
                            <div className = 'text-[#5C5C5C]'>{competitionsContent['text']}</div>

                            <div className = 'flex flex-row gap-3'>
                                <button className = 'bg-[#D00200] text-sm text-white rounded-full px-3 py-2 font-semibold hover:bg-red-800' onClick={() => navigate('/careers')}>Join Us</button>
                                <button className = 'bg-[#868686] text-sm text-white rounded-full px-3 py-2 font-semibold hover:bg-gray-500' onClick={() => navigate('/competitions')}>Learn More</button>
                            </div>
                        </div>
                        <img src = {competitions} alt = 'competitions' className = 'object-cover rounded-xl'></img>
                    </div>

                </div>
               
                {/* brands */}
                <div className = 'flex flex-col gap-10 md:mx-40 mx-20'>
                {/* For smaller screens (combine both into a single div) */}
                <div className=" flex flex-col gap-10 items-center justify-center">

                    <div className='md:hidden flex flex-wrap items-center justify-center'>
                            {Object.keys(brandImages)
                                .sort((a, b) => {
                                    const numA = parseInt(a.match(/\d+/)[0], 10);
                                    const numB = parseInt(b.match(/\d+/)[0], 10);
                                    return numA - numB;
                                })
                                .map((key, index) => (
                                    <div key={key} className="w-1/2 md:w-1/4 flex justify-center p-2"> 
                                        <img src={brandImages[key]} alt={key}/>
                                    </div>
                            ))}
                    </div>

                    <div className="hidden md:flex md:flex-row gap-10 items-center justify-center">
                        {/* First 6 images */}
                        {['brand_1.png', 'brand_2.png', 'brand_3.png', 'brand_4.png', 'brand_5.png', 'brand_6.png'].map((image, index) => (
                            <div key={index} className="justify-center">
                            <img src={brandImages[image]} alt={`brand ${index + 1}`} />
                            </div>
                        ))}
                        </div>

                    <div className="hidden md:flex md:flex-row gap-10 items-center justify-center mx-10 md:mx-20">
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
                <div className='py-10 bg-[#FBFBFB] w-screen'>
                    <div className="flex justify-center flex-col items-center py-6 gap-7 mx-20 md:mx-40">
                        <div className = 'text-3xl font-bold'>Get Updates</div>
                        <div className = 'text-[#5C5C5C]'>Sign up with your email address to receive the latest news and updates from Enactus SFU!</div>
                        <form className="flex items-center rounded-full border border-gray-300 px-4 py-2 w-full max-w-lg">
                            <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-grow outline-none px-4 py-2 text-gray-600 placeholder-gray-400 rounded-full"
                            />
                            <button
                            type="submit"
                            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
                            >
                            Subscribe
                            </button>
                        </form>
                    </div>
                </div>
             

            </div>
            
        
        </main>
    )

    return(
        <PageTemplate component={mainpage}></PageTemplate> 
    )
}

export default Home;