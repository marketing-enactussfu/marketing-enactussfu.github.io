import React, { useState } from 'react';
import enactus_logo from '../icons/footer/enactus_logo.png';
import { currentProjects, pastProjects } from '../data/projectsData';
import Instagram from '../icons/footer/Instagram.png';
import LinkdIn from '../icons/footer/LinkdIn.png';
import Mail from '../icons/footer/Mail.png';

function Navbar() {

    return(
        <div className = 'w-screen bg-[#ECECEC]'>
          
            <div className = 'w-screen py-4 px-8'>
    
                <div className = 'flex space-x-4 justify-between p-16 text-[#5C5C5C] items-start'>

                    <img
                        className = 'absolute -translate-y-1/2 -translate-x-1/2 w-[67.12px] h-[72.28px]'
                        src={enactus_logo}
                        alt="Logo"
                    ></img>

                    <div>
                        <p className = 'text-[48.19px] font-extrabold'>enactus</p>
                        <p>Simon Fraser University</p>
                    </div>

                    <div className = 'flex flex-row gap-9 text-[#5C5C5C] text-xs'>
                        <div className = 'flex flex-col gap-2'>
                            <div className = 'text-black text-sm font-semibold'>Organization</div>
                            <p>About Us</p>
                            <p>The Team</p>
                            <p>History</p>
                            <p>Awards</p>
                        </div>
                        <div className = 'flex flex-col gap-2'>
                            <div className = 'text-black text-sm font-semibold'>Current Projects</div>
                            {currentProjects.map((project) => (
                                <p>{project.name}</p>
                            ))}

                        </div>
                        <div className = 'flex flex-col gap-2'>
                            <div className = 'text-black text-sm font-semibold'>Past Projects</div>
                            {pastProjects.map((project) => (
                                <p>{project.name}</p>
                            ))}
                        </div>

                        <div className = 'flex flex-col gap-2'>
                            <div className = 'text-black text-sm font-semibold'>Get Involved</div>
                            <p>Careers</p>
                            <p>Sponsor Us</p>
                            <p>Contact Us</p>
                        </div>

                    </div>
                </div>
    
                <div className = 'flex mx-12 justify-between text-xs items-end'>
                            <div className = 'ms-6'>
                            © 2024 Enactus SFU | Land Acknowledgement | Privacy Policy
                            </div>
                            <div className = 'flex flex-row gap-3 me-2'>
                                <img src={Instagram} alt="Logo" className = 'w-6 h-6'></img>
                                <img src={LinkdIn} alt="Logo" className = 'w-6 h-6'></img>
                                <img src={Mail} alt="Logo" className = 'w-6 h-6'></img>   
                            </div>
                </div>

            </div>

        </div>
        
    )
}

export default Navbar;



