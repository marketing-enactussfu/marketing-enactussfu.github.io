import React from "react";
import award2 from './icons/awards/silver.png';
import award3 from './icons/awards/bronze.png';
import award1 from './icons/awards/award1.png';

import PageTemplate from './components/PageTemplate';

const awardsData = [
    {
        year: 2024,
        awards: [
            { imgSrc: award1, title: "1st Place", subtitle: "Enactus Alumni Innovation Impact Challenge", description: "Enactus Canada Regionals" },
            { imgSrc: award2, title: "Top Innovator", subtitle: "Global Impact Challenge", description: "Enactus World Cup" },
            { imgSrc: award2, title: "Best Social Enterprise", subtitle: "Community Development Awards", description: "Enactus Nationals" }
        ]
    },
    {
        year: 2023,
        awards: [
            { imgSrc: award3, title: "1st Place", subtitle: "Environmental Sustainability Challenge", description: "Enactus Regionals" },
            { imgSrc: award3, title: "Top Social Impact", subtitle: "Social Impact Awards", description: "Enactus Nationals" }
        ]
    },
    {
        year: 2021,
        awards: [
            { imgSrc: award3, title: "2nd Place", subtitle: "Tech Innovation Challenge", description: "Enactus Regionals" },
            { imgSrc: award1, title: "Best Presentation", subtitle: "Enactus Presentation Challenge", description: "Enactus Nationals" }
        ]
    },
    {
        year: 2020,
        awards: [
            { imgSrc: award1, title: "1st Place", subtitle: "Innovation in Action", description: "Enactus Nationals" },
            { imgSrc: award3, title: "Community Impact Award", subtitle: "Community Leadership Awards", description: "Enactus Regionals" }
        ]
    },
    {
        year: 2018,
        awards: [
            { imgSrc: award1, title: "1st Place", subtitle: "Best Tech for Good", description: "Enactus Nationals" },
            { imgSrc: award1, title: "Excellence in Leadership", subtitle: "Leadership Awards", description: "Enactus Regionals" }
        ]
    },
    {
        year: 2017,
        awards: [
            { imgSrc: award1, title: "Top Innovator", subtitle: "Innovation Challenge", description: "Enactus Nationals" },
            { imgSrc: award1, title: "Best New Project", subtitle: "Start-Up Awards", description: "Enactus Regionals" },
            { imgSrc: award1, title: "1st Place", subtitle: "Sustainable Development Goals", description: "Enactus World Cup" },
            { imgSrc: award1, title: "Best Community Initiative", subtitle: "Community Awards", description: "Enactus Nationals" },
            { imgSrc: award1, title: "Excellence in Technology", subtitle: "Tech for Good Awards", description: "Enactus Regionals" }
        ]
    }
];

const Competitions = () => {
    const competitionspage = (
        <div className="flex flex-col md:gap-10 gap-4 mt-4">

            {/* Header Section */}
            <div className="text-center mb-16 md:mx-28 lg:mx-40 sm:mx-16 mx-10 pt-12">
                <div className="text-[#D00200] sm:text-md text-base font-bold">Awards</div>
                <div className="text-4xl font-bold text-gray-800 mt-2">Our Legacy of Excellence</div>
                <p className="text-gray-600 sm:text-lg text-md mt-4 max-w-3xl mx-auto">
                    Over the years, Enactus SFU has consistently secured top positions in Enactus Canada’s competitions. In each exposition, we demonstrate our commitment to innovation, earning awards that reflect the hard work of our members. Join us, and you could be part of our next winning team.
                </p>
            </div>

            {/* Awards Section */}
            <div className="flex flex-col md:mx-28 lg:mx-40 sm:mx-16 mx-10 md:gap-32 sm:gap-20 gap-10 md:mb-32 sm:mb-20 mb-10">
                {awardsData.map(({ year, awards }) => (
                    <div key={year} className="w-full">
                        <div className="flex items-start mb-6">
                            <div className="sm:text-2xl text-xl font-bold text-gray-800 text-left">
                                {year}
                            </div>
                        </div>
                        <div className="grid custom-lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">
                            {awards.map(({ imgSrc, title, subtitle, description }, index) => (
                                <div key={index} className="text-[#181818] border border-[#ECECEC] rounded-md p-4 space-y-4">
                                    <img src={imgSrc} alt={`Award ${year}-${index + 1}`} />
                                    <div className="justify-center flex flex-col gap-4">
                                        <div className="sm:text-md text-base font-semibold">{title}</div>
                                        <div className="sm:text-md text-base font-[400]">{subtitle}</div>
                                        <div className="sm:text-xs text-xs text-[#5C5C5C]">{description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return <PageTemplate component={competitionspage} />;
};

export default Competitions;
