import React from "react";
import PageTemplate from './PageTemplate';
import Subtitle from './Subtitle';

const CurrentProjectsTemplate = ({title, text, pic }) => {
    const aa = (
        <main className = 'mt-4'>
                {/* Header Section */}
            <div className = 'flex flex-col gap-16'>
                <div className="lg:mx-60 md:mx-60 sm:mx-16 mx-10 bg-white flex flex-col items-center gap-5 pt-12">
                        <Subtitle text="Current Projects" />
                        <div className="text-center text-[#181818] text-3xl sm:text-4xl font-semibold">
                            {title}
                        </div>
                        {/* lg:mx-60 currentProject-md:mx-10 mx-10 */}
                        <div className="text-center text-[#5c5c5c] text-md sm:text-xl font-[400] currentProject-md:mx-60 currentProjectText-md:mx-20">
                            {text}
                        </div>
                </div>

                {/* md:mx-72 sm:mx-52 mx-28 */}

                {/* <div className="lg:mx-96 currentProject-md:mx-32 sm:mx-28 mx-8 items-center"> */}
                <div className="currentProject-md:mx-96 currentProjectText-md:mx-80 currentProjectText-mx:mx-48 sm:mx-28 mx-8 items-center">
                  <img className="w-full rounded-xl" src={pic} alt="Desk Image" />
                </div>

                <div className="currentProject-md:mx-80 currentProjectText-md:mx-78 currentProjectText-mx:mx-42 sm:mx-20 mx-5 mb-10">
                    <div className="currentProject-md:text-3xl currentProjectText-md:text-3xl currentProjectText-mx:text-2xl sm:text-2xl text-xl font-semibold text-center text-[#181818]">
                        Details about this project will be revealed soon. Check back later!
                    </div>
                </div>

            </div>
            
        </main>
            
    );

    return <PageTemplate component={aa} />;
};

export default CurrentProjectsTemplate;
