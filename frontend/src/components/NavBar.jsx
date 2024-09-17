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
      <div className="mx-20 md:mx-40 flex justify-between items-center text-sm text-black font-semibold">
        <button onClick = {() => navigate('/')}>

          <img
            src={enactus_logo}
            alt="Logo"
            className="h-8"
          />
        </button>

        <div className="flex space-x-8 text-gray-600 items-center">
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
              <li>
                <a
                  href="/about/what-we-do"
                  className="bg-white text-sm block px-4 py-3 mt-1 mx-1 text-gray-600 hover:bg-gray-100 flex items-center gap-2"
                >
                  <img
                    src={enactus_logo_grey}
                    alt="enactus_logo"
                    className="h-5 w-5"
                  />
                  What We Do
                </a>
              </li>

              <div>
                <a
                  href="/about/our-team"
                  className="bg-white block px-4 py-3 mb-1 mx-1 text-gray-600 hover:bg-gray-100 flex items-center gap-2"
                >
                  <img src={about} alt="About" className="h-5 w-5" />
                  Our Team
                </a>
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
              <ProjectGrid title="Current Projects" projects={currentProjects} type = 'current-projects'/>
              <ProjectGrid title="Past Projects" projects={pastProjects} type = 'past-projects'/>
            </div>
          </div>

          <div>
            <a href="/events" className="hover:text-red-500 hover:underline">
              Events
            </a>
          </div>

          <div>
            <a href="/sponsorship" className="hover:text-red-500 hover:underline">
              Sponsorships
            </a>
          </div>

          <div>
            <a href="/competitions" className="hover:text-red-500 hover:underline">
              Competitions
            </a>
          </div>

          {/* Join Our Team Button */}
          <div>
            <button 
            className="session-button"
            onClick={() => navigate('/career')}
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
