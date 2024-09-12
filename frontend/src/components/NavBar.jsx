import React, { useState } from 'react';
import ProjectGrid from './ProjectGrid';
import enactus_logo from '../icons/enactus_logo.png';
import about from '../icons/navbar/about.png';
import enactus_logo_grey from '../icons/navbar/enactus_logo_grey.png';
import { currentProjects, pastProjects } from '../data/projectsData';

function Navbar() {

  return (
    <nav className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center text-sm text-black font-semibold">
        <div>
          <img
            src={enactus_logo}
            alt="Logo"
            className="h-8"
            href="/"
          />
        </div>

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
                  href="#"
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
                  href="#"
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
            // className="opacity-0 invisible absolute bg-gray-100 z-[1000] left-1/2 -translate-x-1/2 mt-4 container bg-white shadow-lg rounded-lg border border-gray-200 w-max text-xs group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out">
            className="mt-3 z-10 z-[1000] left-1/2 -translate-x-1/2 opacity-0 border border-gray-200 invisible absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 transition-all duration-500 ease-out w-max transform scale-95">
              <ProjectGrid title="Current Projects" projects={currentProjects} />
              <ProjectGrid title="Past Projects" projects={pastProjects} />
            </div>
          </div>

          <div>
            <a href="#" className="hover:text-gray-900">
              Events
            </a>
          </div>

          <div>
            <a href="#" className="hover:text-gray-900">
              Sponsorships
            </a>
          </div>

          <div>
            <a href="#" className="hover:text-gray-900">
              Competitions
            </a>
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
