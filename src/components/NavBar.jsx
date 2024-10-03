import React, { useState } from 'react';
import ProjectGrid from './ProjectGrid';
import enactus_logo from '../icons/enactus_logo.png';
import about from '../icons/navbar/about.png';
import enactus_logo_grey from '../icons/navbar/enactus_logo_grey.png';
import { currentProjects, pastProjects } from '../data/projectsData';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-md py-4 fixed top-0 w-screen z-50">
      <div className="md:mx-28 lg:mx-40 sm:mx-16 mx-10 flex justify-between items-center text-sm text-black font-semibold">
        <button onClick = {() => navigate('/enactussfu')}>

          <img
            src={enactus_logo}
            alt="Logo"
            className="h-8"
          />
        </button>

        <div className="flex space-x-8 text-gray-600 items-center text-[14px]">
          {/* About Dropdown */}
          <div
            className="relative group inline-block" 
          >
            <button 
            id="dropdownDelayButton"
            className="hover:text-gray-900 focus:outline-none"
            type="button"
            >
              About
            </button>
            {/* Dropdown with CSS-only approach */}
            <div 
              id="dropdownDelay"
              aria-labelledby="dropdownDelayButton"
              className="mt-4 z-10 z-[1000] left-1/2 -translate-x-1/2 opacity-0 border border-gray-200 invisible absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 transition-all duration-500 ease-out transform scale-95">
              <div>
                <button
                  onClick={() => navigate('/enactussfu/about/what-we-do')}
                  className="bg-white text-sm block px-4 py-3 mt-1 mx-1 text-gray-600 hover:bg-gray-100 flex items-center gap-2"
                >
                  <img
                    src={enactus_logo_grey}
                    alt="enactus_logo"
                    className="h-5 w-5"
                  />
                  What We Do
                </button>
              </div>

              <div>
                <button
                  onClick = {() => navigate('/enactussfu/about/our-team')}
                  className="bg-white block px-4 py-3 mb-1 mx-1 text-gray-600 hover:bg-gray-100 flex items-center gap-2"
                >
                  <img src={about} alt="About" className="h-5 w-5" />
                  Our Team
                </button>
              </div>
            </div>
          </div>

          {/* Projects Dropdown */}
          <div
            className="relative group"
          >
            <button 
            className="hover:text-gray-900 focus:outline-none"
            id="dropdownDelayButton"
            >
              Projects
            </button>

            <div 
            id="dropdownDelay"
            aria-labelledby="dropdownDelayButton"
            className="mt-3 z-10 z-[1000] left-1/2 -translate-x-1/2 opacity-0 border border-gray-200 invisible absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 transition-all duration-500 ease-out w-max transform scale-95">
              <ProjectGrid title="Current Projects" projects={currentProjects} type = 'current-projects' isMobile = {false}/>
              <ProjectGrid title="Past Projects" projects={pastProjects} type = 'past-projects' isMobile = {false}/>
            </div>
          </div>
          
          <div>
            <button
            onClick = {() => navigate('/enactussfu/events')}
            className="hover:text-red-500 hover:underline">
              Events
            </button>
          </div>

          <div>
            <button 
              onClick = {() => navigate('/enactussfu/sponsorship')}
              className="hover:text-red-500 hover:underline">
              Sponsorships
            </button>
          </div>

          <div>
            <button 
            onClick = {() => navigate('/enactussfu/competitions')}
            className="hover:text-red-500 hover:underline">
              Competitions
            </button>
          </div>

          {/* Join Our Team Button */}
          <div>
            <button 
            className="session-button"
            onClick={() => navigate('/enactussfu/career')}
            >
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
