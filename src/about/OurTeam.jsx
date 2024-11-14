import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { importAll } from '../utilities/importImages'; 

const coreOperations = [
    {name: "David Guo",description: "Co-President"},
    {name: "Cedric Tanafranca",description: "Co-President"},
    {name: "Lauren Riestra",description: "Co-VP of Events"},
    {name: "Rachael Varghese",description: "Co-VP of Events"},
    {name: "Peehu Gupta",description: "Co-VP of External Relations"},
    {name: "Ruchi Sharma",description: "Co-VP of External Relations" },
    {name: "Celine August Santoso", description: "Co-VP of Media and Marketing"},
    {name: "Jenna Emperador",description: "Co-VP of Media and Marketing"},
    {name: "Olivia Cheng", description: "Director of Marketing Strategy"},
    {name: "Stephanie Ma",description: "Co-Director of Design"},
    {name: "Van Mai",description: "Co-Director of Design"},
    {name: "Brianna Mei",description: "Director of Media"},
    {name: "Mandy Qian",description: "Director of Web Development"},
    {name: "Andrew Learmonth",description: "Director of Finance"},
    {name: "Cameron Miranda",description: "Director of Internal Strategy"}
  ];
  

  const projectManagers = [
    {name: "Christine Hui",description: "Project Manager of The BeeKind Company"},
    {name: "Bhumika Kalra",description: "Co-Project Manager of SKYES"},
    {name: "Ethan Chan",description: "Co-Project Manager of Himalayan SKYES"},
    {name: "Lin Lin",description: "Project Manager of Turbio Energy"},
    {name: "Justin Cheung",description: "Project Manager of Second Savour"},
    {name: "Rami Alhanna",description: "Co-Project Manager of Unify"},
    {name: "Savar Gupta", description: "Co-Project Manager of Unify"},
    {name: "Claudia Arana Leon",description: "Project Manager of Aqua Analyzer"},
    {name: 'Danny Dong', description: 'Project Manager of Catalyst'}
  ];


const OurTeam = () =>{

   //coreOperations
   const coreOperationsImage = importAll(require.context('../images/about/coreOperations', false, /\.(png|jpe?g|svg)$/));
    const projectManagersImage = importAll(require.context('../images/about/projectManagers', false, /\.(png|jpe?g|svg)$/));
    const mainpage = (
        <main className = 'mt-4'>

            <div className = 'flex flex-col gap-20'>
            <div className = 'text-2xl sm:text-4xl font-semibold text-center pt-12'>Our Leadership Team</div>

                <div className = 'bg-[#FBFBFB]'>
                
                <div className = 'flex flex-col items-center sm:items-start gap-4 md:mx-28 lg:mx-40  sm:mx-16 mx-10'>
                    <div className = 'text-xl sm:text-2xl md:text-3xl font-semibold text-start'>Core Operations</div>
                      <div className="sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex flex-col sm:items-start items-center">
                          {coreOperations.map((member, index) => {
                              const firstName = member.name.split(' ')[0].toLowerCase();
                              const imageKey = Object.keys(coreOperationsImage).find(key =>
                                  key.toLowerCase().includes(firstName)
                              );
                              return (
                                  <div key={index} className="flex flex-col items-center">
                                      <img src={coreOperationsImage[imageKey]} alt="core" className="rounded-md" />
                                      <div className="mt-2 font-semibold text-center sm:text-xs">{member.name}</div>
                                      <div className="text-sm text-[#181818] text-center sm:text-xs">{member.description}</div>
                                  </div>
                              );
                          })}
                      </div>
                </div>
                </div>

                <div className = 'flex flex-col items-center sm:items-start gap-4 md:mx-40 sm:mx-20 mx-10 my-10'>
                    <div className = 'text-2xl md:text-3xl font-semibold text-center'>Project Managers</div>
                    <div className="sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex flex-col sm:items-start items-center">
                        {projectManagers.map((member, index) => {
                            const firstName = member.name.split(' ')[0].toLowerCase();
                            const imageKey = Object.keys(projectManagersImage).find(key =>
                                key.toLowerCase().includes(firstName)
                            );
                            return (
                                <div key={index} className="flex flex-col items-center">
                                    <img src={projectManagersImage[imageKey]} alt="project manager" className="rounded-md" />
                                    <div className="mt-2 font-semibold text-center sm:text-xs">{member.name}</div>
                                    <div className="text-sm text-[#181818] text-center sm:text-xs">{member.description}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>     
            </div>
        </main>
    )

    return(
        <PageTemplate component={mainpage}></PageTemplate> 
    )
}

export default OurTeam;