import React, { useState } from 'react';


const ProjectGrid = ({ title, projects }) => (
    <div className = 'p-3 mx-1 my-1 bg-white rounded-md'>
      <div className = 'mx-3 my-2'>
          <h3 className="font-semibold text-black mb-1 text-[14px]">{title}</h3>
          <div className="flex flex-wrap"> 
          {projects.map((project, index) => (
              <button key={index} className="w-1/4 flex my-2 items-start space-x-2">
              <img src={project.icon} alt={project.name} className="w-8 h-8" />
              <div className="flex flex-col items-start">
                  <p className="font-semibold text-[14px] text-black whitespace-nowrap">{project.name}</p>
                  <p className="text-sm text-[#C0C0C0] whitespace-nowrap">{project.description}</p>
              </div>
              </button>
          ))}
          </div>
      </div>
    </div>
  );

export default ProjectGrid;