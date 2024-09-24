import { useState } from 'react';
import menu from '../icons/navbar/menu.png';
import enactus_logo from '../icons/enactus_logo.png'; 
import glyph from '../icons/navbar/glyph.png';
import back from '../icons/navbar/back.png';
import glyph_back from '../icons/navbar/glyph_back.png';
import { useNavigate } from 'react-router-dom';
import about from '../icons/navbar/about.png';
import enactus_logo_grey from '../icons/navbar/enactus_logo_grey.png';
import { currentProjects, pastProjects } from '../data/projectsData';
import ProjectGrid from './ProjectGrid';



function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState('main');
  const navigate = useNavigate();

  // Handler for switching back to the main menu
  const handleBackClick = () => {
      setCurrentView('main');
  };

  const chevron_right =()=>{
    return(
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={'#30313D'} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    )
  }

  const chevron_left =()=>{
    return(
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={'#D00200'} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
     
    )
  }

  const back_button =()=>{
    return(
      <button onClick={handleBackClick} className="flex items-center text-red-600 mb-4">
        {chevron_left()} Back
      </button>
    )
  }

  
  return (
    <nav className="bg-white fixed top-0 w-screen z-50">

      <div className = 'py-4 border-b-2 border-[#D8D8D8]'>
        {/* Navigation Bar */}
        <div className="md:mx-28 lg:mx-40 sm:mx-16 mx-10 flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo */}
            {currentView === 'main' ?<button onClick = {() => navigate('/')}>
              <img src={enactus_logo} alt="Logo"/>
            </button> : back_button()
            }
          </div>
          {/* Hamburger Menu Icon */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke={'#30313D'} className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
            : <img src={menu} alt="menu_logo" />}
            
          </button>
        </div>
      </div>

      {isOpen && (
        <div  className={`w-full flex flex-col justify-between h-screen bg-white shadow-md transform${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out`}>

          <div className="flex-grow overflow-y-auto">
          {currentView === 'main' && (
            <ul className="flex-grow flex flex-col space-y-4 text-[#181818] text-[18px] font-[500] md:mx-28 lg:mx-40 sm:mx-16 mx-10 overflow-y-auto">
              <li className="border-b-2 border-[#D8D8D8] py-5 ">
                <a onClick={() => setCurrentView('about')} className="flex justify-between cursor-pointer">
                  About <span>{chevron_right()}</span>
                </a>
              </li>
              <li className="border-b-2 border-[#D8D8D8] py-5">
                <a onClick={() => setCurrentView('projects')} className="flex justify-between cursor-pointer">
                  Projects <span>{chevron_right()}</span>
                </a>
              </li>
              <li className="border-b-2 border-[#D8D8D8] py-5">
                <a href="/events" className="flex justify-between">
                  Events
                </a>
              </li>
              <li className="border-b-2 border-[#D8D8D8] py-5">
                <a href="/sponsorship" className="flex justify-between">
                  Sponsorship
                </a>
              </li>
              <li className="border-b-2 border-[#D8D8D8] py-5">
                <a href="/competitions" className="flex justify-between">
                  Competitions
                </a>
              </li>
            </ul>
          )}


          {currentView === 'about' && (
            <div className="flex flex-col overflow-y-auto gap-7 md:mx-28 lg:mx-40 sm:mx-16 mx-10 py-5">
              <h2 className="text-xl font-bold text-[#181818] text-sm">About</h2>
              <ul className = 'flex flex-col gap-3'>
                <li className="flex flex-row items-center gap-6 py-2 text-[16px] font-semibold">
                  <a
                  href="/about/our-team"
                  className="flex items-center gap-6"
                  >
                  <img src={about} alt="About" className="h-5 w-5" />
                  Our Team
                  </a>

                </li>
                <li className="flex flex-row items-center gap-6 py-2 text-[16px] font-semibold">
                  <a
                  href="/about/our-team"
                  className="flex items-center gap-6"
                  >
                  <img
                    src={enactus_logo_grey}
                    alt="enactus_logo"
                    className="h-5 w-5"
                  />
                  What We Do
                  </a>
                </li>
              </ul>
            </div>
          )}


          {currentView === 'projects' && (
                   <div className='md:mx-28 lg:mx-40 sm:mx-16 mx-10 flex flex-col bg-[#FBFBFB]'>
                     <ProjectGrid title="Current Projects" projects={currentProjects} type = 'current-projects' isMobile = {true}/>
                     <ProjectGrid title="Past Projects" projects={pastProjects} type = 'past-projects' isMobile = {true}/>
                   </div>
 
          )}
          </div>

          {/* Footer-like Button */}
          <footer className="w-screen py-4 bg-white bg-opacity-20 shadow-t mb-20">
            <div className="flex justify-center">
              <button className="session-button text-[12px] font-semibold">
                Join Our Team
              </button>
            </div>
          </footer>

        </div>

      )}

    </nav>
  );

}

export default MobileNav;
