import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectGrid = ({ title, projects, type, isMobile}) => {
  const navigate = useNavigate();

  return (
    <div className={(isMobile ? 'md:mx-28 lg:mx-40 sm:mx-16 mx-10 p-3 mx-1 my-1 bg-white rounded-md' : 'p-3 mx-1 my-1 bg-white rounded-md')}>
        <div className={(isMobile ? 'mt-4' : 'mx-3 my-2')}>
          <h3 className='font-semibold text-black text-[14px] mb-4'>{title}</h3>
          <div className={'grid ' + (isMobile ? 'grid-cols-1' : 'navbar-md:grid-cols-4 grid-cols-2 gap-4')}>
            {projects.map((project, index) => (
              <button 
                key={index} 
                className="project-button flex items-start space-x-2 p-2 bg-white rounded-lg"
                onClick={() => navigate(`/projects/${type}/` + project.name.toLowerCase().replace(/\s+/g, '-'))}
              >
                <img src={project.icon} alt={project.name} className="w-8 h-8" />
                <div className="flex flex-col items-start">
                  <p className="font-semibold text-[14px] text-black whitespace-nowrap">
                    {project.name}
                    <span className="project-description text-white"> →</span>
                  </p>
                  <p className="project-description text-xs text-[#C0C0C0] whitespace-nowrap">
                    {project.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
     
    </div>
  );
};

export default ProjectGrid;
