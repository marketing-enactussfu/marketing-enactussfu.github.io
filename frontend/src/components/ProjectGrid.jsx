import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectGrid = ({ title, projects, type }) => {
  const navigate = useNavigate();

  return (
    <div className='p-3 mx-1 my-1 bg-white rounded-md'>
      <div className='mx-3 my-2'>
        <h3 className="font-semibold text-black mb-1 text-[14px]">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
