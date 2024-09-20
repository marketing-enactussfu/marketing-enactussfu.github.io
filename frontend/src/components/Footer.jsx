import React, { useState } from 'react';
import enactus_logo from '../icons/footer/enactus_logo.png';
import { currentProjects, pastProjects } from '../data/projectsData';
import Instagram from '../icons/footer/Instagram.png';
import LinkdIn from '../icons/footer/LinkdIn.png';
import Mail from '../icons/footer/Mail.png';

function Navbar() {
    
    return(
        <footer className = 'w-screen bg-[#ECECEC]'>
          
            <div className = 'w-screen py-4 sm:px-8'>
            {/* space-x-4 */}
                <div className = 'flex justify-between px-16 py-10 sm:py-16 text-[#5C5C5C] items-start md:flex-row flex-col gap-5'>
                    <img
                        className = 'absolute -translate-y-1/2 -translate-x-1/2'
                        src={enactus_logo}
                        alt="Logo"
                    ></img>

                    <div>
                        <p className = 'text-[48.19px] font-extrabold'>enactus</p>
                        <p>Simon Fraser University</p>
                    </div>
                    {/* flex-row max-[1041px]:flex-col */}

                    <div className = 'flex md:flex-row flex-col gap-9 text-[#5C5C5C] text-xs md:mt-3 mt-10'>
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

                <div className = 'flex flex-col sm:flex-row mx-10 justify-between text-xs items-start sm:items-end sm:gap-2 gap-5'>
                            <div className = 'ms-6'>
                            © 2024 Enactus SFU | Land Acknowledgement | Privacy Policy
                            </div>
                            {/* <div className = 'flex flex-row gap-3 me-2 ms-3'> */}
                            <div className = 'flex flex-row gap-3 me-2 ms-6'>
                                <img src={Instagram} alt="Logo" className = 'w-6 h-6'></img>
                                <img src={LinkdIn} alt="Logo" className = 'w-6 h-6'></img>
                                <img src={Mail} alt="Logo" className = 'w-6 h-6'></img>   
                            </div>
                </div>

            </div>

        </footer>
        
    )
}

export default Navbar;



