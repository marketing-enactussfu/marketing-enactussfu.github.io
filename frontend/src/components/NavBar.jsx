import React, { useState } from 'react';
import ProjectGrid from './ProjectGrid';
import enactus_logo from '../icons/enactus_logo.png';
import about from '../icons/navbar/about.png';
import enactus_logo_grey from '../icons/navbar/enactus_logo_grey.png';
import beeking from '../icons/navbar/beeking.png';
import second_savour from '../icons/navbar/second_savour.png'; 
import himalayan_skyes from '../icons/navbar/himalayan_skyes.png'; 
import aqua_analyzer from '../icons/navbar/aqua_analyzer.png'; 
import community from '../icons/navbar/community.png';  
import tubio_engergy from '../icons/navbar/tubio_engergy.png';  
import entrepreneurship_challenges from '../icons/navbar/entrepreneurship_challenges.png';
import kindred_knots from '../icons/navbar/kindred_knots.png';
import count_on_me from '../icons/navbar/count_on_me.png';
import bright_ideas from '../icons/navbar/bright_ideas.png';
import changemaker_challenge from '../icons/navbar/changemaker_challenge.png';
import banner_bags from '../icons/navbar/banner_bags.png';
import media_minds from '../icons/navbar/media_minds.png';
import coast_cards from '../icons/navbar/coast_cards.png';
import refresh from '../icons/navbar/refresh.png';


  const currentProjects = [
    { name: "The beeking Company", description: "Scented Candies", icon: beeking },
    { name: "Second Savour", description: "Delicious Candied Peels", icon: second_savour },
    { name: "Himalayan Skyes", description: "Empowering Youth", icon: himalayan_skyes},
    { name: "Aqua Analyzer", description: "Testing Water Qualities", icon: aqua_analyzer },
    { name: "Community Grafts", description: "Social Media Platform", icon: community },
    { name: "Tubio Engergy", description: "Sustainable Energy", icon: tubio_engergy },
    { name: "Entrepreneurship Challenges", description: "Client Based Projects", icon: entrepreneurship_challenges }
  ];
  
  const pastProjects = [
    { name: "Kindred Knots", description: "Senior Program", icon: kindred_knots },
    { name: "Bright Ideas", description: "Connecting Students", icon: bright_ideas },
    { name: "Banner Bags", description: "Waste Management", icon: banner_bags },
    { name: "Coast Cards", description: "Greeting Cards", icon: coast_cards },
    { name: "Count on Me", description: "Finance Education", icon: count_on_me },
    { name: "Changemaker Challenge", description: "Case Competition", icon: changemaker_challenge },
    { name: "Media Minds", description: "Digital Literacy", icon: media_minds },
    { name: "ReFresh", description: "Greeting Cards", icon: refresh }
  ];


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