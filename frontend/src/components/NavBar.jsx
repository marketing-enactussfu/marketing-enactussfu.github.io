import React, { useState } from 'react';
import ProjectGrid from './ProjectGrid';
import enactus_logo from '../icons/enactus_logo.png';
import about from '../icons/navbar/about.png';
import enactus_logo_grey from '../icons/navbar/enactus_logo_grey.png';
import { currentProjects, pastProjects } from '../data/projectsData';

function Navbar() {

  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle specific dropdown
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center text-sm text-black font-semibold">
        <div>
          <img
            src={enactus_logo}
            alt="Logo"
            className="h-8"
            href = '/'
          />
        </div>

        <div className="flex space-x-8 text-gray-600 items-center">
          {/* About Dropdown */}
          <div class="relative">
            <button
              onClick={() => toggleDropdown('about')}
              className="hover:text-gray-900 focus:outline-none"
            >
              About
            </button>
            {openDropdown === 'about' && ( 
              <div className="bg-gray-100 container mx-auto absolute z-[1000] left-1/2 -translate-x-1/2 mt-4 w-48 border border-gray-200 rounded-lg shadow-lg text-xs flex flex-col">
                <div>
                    <a href="#" className="bg-white text-sm block px-4 py-3 mt-1 mx-1 text-gray-600 hover:bg-gray-100 flex items-center">
                    <img
                        src={enactus_logo_grey}
                        alt="enactus_logo"
                        className="h-5 w-5"
                    />
                    What We Do
                    </a>
                </div>

                <div>
                    <a href="#" className="bg-white block px-4 py-3 mb-1 mx-1 text-gray-600 hover:bg-gray-100 flex items-center">
                    <img
                        src={about}
                        alt="About"
                        className="h-5 w-5"
                    />
                    Our Team
                    </a>
                </div>
               
              </div>
            )}
          </div>


          <div className="relative">
                <button
                onClick={() => toggleDropdown('projects')}
                className=" hover:text-gray-900 focus:outline-none"
                >
                Projects
                </button>


                {openDropdown === 'projects' && (
                <div 
                className = 'bg-gray-100 absolute z-[1000] left-1/2 -translate-x-1/2 mt-4 container mx-auto bg-white shadow-lg rounded-lg border border-gray-200 w-screen text-xs'
                >
                        <ProjectGrid title="Current Projects" projects={currentProjects} />
                        <ProjectGrid title = "Past Projects" projects={pastProjects} />
                        
                </div>
                )}

          </div>

          <div>
            <a href="#" className="hover:text-gray-900">Events</a>
          </div>

          <div>
          <a href="#" className="hover:text-gray-900">Sponsorships</a>
          </div>

          <div>
          <a href="#" className="hover:text-gray-900">Competitions</a>
          </div>


        {/* Join Our Team Button */}
        <div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
            Join Our Team
         </button>
        </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;