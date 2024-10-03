import React from 'react';
import enactus_logo from '../icons/footer/enactus_logo.png';
import Instagram from '../icons/footer/Instagram.png';
import LinkedIn from '../icons/footer/LinkdIn.png';
import Mail from '../icons/footer/Mail.png';
import { useNavigate } from 'react-router-dom';
import { currentProjects, pastProjects } from '../data/projectsData'; // Assume both current and past projects are imported

function Navbar() {
    const navigate = useNavigate();
    const currentProjects = [
        { name: 'The beekind Company', slug: 'current-projects/the-beekind-company' },
        { name: 'Second Savour', slug: 'current-projects/second-savour' },
        { name: 'Himalayan Skyes', slug: 'current-projects/himalayan-skyes' },
        { name: 'Aqua Analyzer', slug: 'current-projects/aqua-analyzer' },
        { name: 'Community Grafts', slug: 'current-projects/community-grafts' },
        { name: 'Turbio Energy', slug: 'current-projects/turbio-energy' },
        { name: 'Entrepreneurship Challenges', slug: 'current-projects/entrepreneurship-challenges' },
    ];

    const pastProjects = [
        { name: 'Kindred Knots', slug: 'past-projects/kindred-knots' },
        { name: 'Bright Ideas', slug: 'past-projects/bright-ideas' },
        { name: 'Banner Bags', slug: 'past-projects/banner-bags' },
        { name: 'Coast Cards', slug: 'past-projects/coast-cards' },
        { name: 'Count On Me', slug: 'past-projects/count-on-me' },
        { name: 'Changemaker Challenge', slug: 'past-projects/changemaker-challenge' },
        { name: 'Media Minds', slug: 'past-projects/media-minds' },
        { name: 'Refresh', slug: 'past-projects/refresh' },

    ];

    return (
        <footer className="w-screen bg-[#ECECEC]">
            <div className="w-screen py-4 sm:px-8">
                {/* Header and Logo Section */}
                <div className="flex justify-between px-16 py-10 sm:py-16 text-[#5C5C5C] items-start md:flex-row flex-col gap-5">
                    <img
                        className="absolute -translate-y-1/2 -translate-x-1/2"
                        src={enactus_logo}
                        alt="Logo"
                    />
                    <div>
                        <p className="text-[48.19px] font-extrabold">enactus</p>
                        <p>Simon Fraser University</p>
                    </div>

                    {/* Organization Links */}
                    <div className="flex md:flex-row flex-col gap-9 text-[#5C5C5C] text-xs md:mt-3 mt-10">
                        <div className="flex flex-col gap-2 items-start">
                            <div className="text-black text-sm font-semibold">Organization</div>
                            <button onClick={() => navigate('/enactussfu/about/what-we-do')} className='hover:text-red-600 hover:underline'>
                                    About Us
                                </button>
                                <button onClick={() => navigate('/enactussfu/about/our-team')} className='hover:text-red-600 hover:underline'>
                                    The Team
                                </button>
                                <button onClick={() => navigate('/enactussfu/about/what-we-do#history')} className='hover:text-red-600 hover:underline'>
                                    History
                                </button>
                                <button onClick={() => navigate('/enactussfu/competitions')} className='hover:text-red-600 hover:underline'>
                                    Awards
                                </button>                        
                        </div>

                        {/* Current Projects Links */}
                        <div className="flex flex-col gap-2 items-start">
                            <div className="text-black text-sm font-semibold">Current Projects</div>
                            {currentProjects.map((project) => (
                                <button
                                key={project.slug}
                                onClick={() => navigate(`/enactussfu/projects/${project.slug}`)}
                                className="text-gray-700 hover:text-red-600 hover:underline"
                              >
                                {project.name}
                              </button>
                            ))}
                        </div>

                        {/* Past Projects Links */}
                        <div className="flex flex-col gap-2 items-start">
                            <div className="text-black text-sm font-semibold">Past Projects</div>
                            {pastProjects.map((project) => (
                                        <button
                                        key={project.slug}
                                        onClick={() => navigate(`/enactussfu/projects/${project.slug}`)}
                                        className="text-gray-700 hover:text-red-600 hover:underline"
                                      >
                                        {project.name}
                                      </button>
                            ))}
                        </div>

                        {/* Get Involved Links */}
                        <div className="flex flex-col gap-2 items-start">
                            <div className="text-black text-sm font-semibold">Get Involved</div>
                            <button 
                                    onClick={() => navigate('/enactussfu/career')} 
                                    className='hover:text-red-600 hover:underline'>
                                    Careers
                                </button>
                                <button 
                                    onClick={() => navigate('/enactussfu/sponsorship')} 
                                    className='hover:text-red-600 hover:underline'>
                                    Sponsor Us
                                </button>
                            <a href="/mailto:info@enactussfu.com" className = 'hover:text-red-600 hover:underline'>Contact Us</a> {/* Corrected the Contact Us link */}
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="flex flex-col sm:flex-row mx-10 justify-between text-xs items-start sm:items-end sm:gap-2 gap-5">
                    <div className="ms-6">
                        © 2024 Enactus SFU | <a href="https://www.sfu.ca/communicators-toolkit/brand/guidelines/writing/editorial-style-guide/language-grammar/territorial-acknowledgements.html" target="_blank" >Land Acknowledgement</a> | <a href="/privacy-policy">Privacy Policy</a>
                    </div>
                    <div className="flex flex-row gap-3 me-2 ms-6">
                        <a href="https://www.instagram.com/enactussfu/" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/company/enactussfu/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
                        </a>
                        <a href="mailto:president@enactussfu.com">
                            <img src={Mail} alt="Mail" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Navbar;
