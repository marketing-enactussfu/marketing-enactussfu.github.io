import React from "react";
import AwardCard1 from './images/home/AwardCard/AwardCard1.png';
import AwardCard2 from './images/home/AwardCard/AwardCard2.png';
import AwardCard3 from './images/home/AwardCard/AwardCard3.png';
import AwardCard4 from './images/home/AwardCard/AwardCard4.png';
import AwardCard5 from './images/home/AwardCard/AwardCard5.png';
import AwardCard6 from './images/home/AwardCard/AwardCard6.png';
import AwardCard7 from './images/home/AwardCard/AwardCard7.png';
import AwardCard8 from './images/home/AwardCard/AwardCard8.png';
import AwardCard9 from './images/home/AwardCard/AwardCard9.png';
import AwardCard10 from './images/home/AwardCard/AwardCard10.png';
import AwardCard11 from './images/home/AwardCard/AwardCard11.png';
import AwardCard12 from './images/home/AwardCard/AwardCard12.png';
import AwardCard13 from './images/home/AwardCard/AwardCard13.png';
import AwardCard14 from './images/home/AwardCard/AwardCard14.png';
import AwardCard15 from './images/home/AwardCard/AwardCard15.png';
import AwardCard16 from './images/home/AwardCard/AwardCard16.png';
import AwardCard17 from './images/home/AwardCard/AwardCard17.png';
import PageTemplate from './components/PageTemplate';

const awardsData = [
    { year: 2024, images: [AwardCard1, AwardCard2, AwardCard3] },
    { year: 2023, images: [AwardCard4, AwardCard5] },
    { year: 2021, images: [AwardCard6, AwardCard7] },
    { year: 2020, images: [AwardCard8, AwardCard9] },
    { year: 2018, images: [AwardCard10, AwardCard11] },
    { year: 2017, images: [AwardCard12, AwardCard13, AwardCard14, AwardCard15, AwardCard16] },
];

const Competitions = () => {
    const competitionspage = (
        <div className="bg-white flex flex-col items-center w-full min-h-screen py-16 px-4">
            {/* Header Section */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <div className="text-red-500 text-3xl font-bold">Awards</div>
                <div className="text-4xl font-bold text-gray-800 mt-2">Our Legacy of Excellence</div>
                <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
                    Over the years, Enactus SFU has consistently secured top positions in Enactus Canada’s competitions. In each exposition, we demonstrate our commitment to innovation, earning awards that reflect the hard work of our members. Join us, and you could be part of our next winning team.
                </p>
            </div>

            {/* Awards Section */}
            <div className="flex flex-col w-full max-w-screen-lg mx-auto gap-12 px-4 md:px-8 lg:px-12">
                {awardsData.map(({ year, images }) => (
                    <div key={year} className="w-full">
                        <div className="flex items-center mb-6 w-full">
                            <div className="text-2xl font-bold text-gray-800 text-left">
                                {year}
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-start gap-1 w-full">
                            {images.map((imgSrc, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <img
                                        src={imgSrc}
                                        className="w-full max-w-[280px] h-auto"
                                        alt={`Award ${year}-${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <PageTemplate component={competitionspage} />
    );
};

export default Competitions;
