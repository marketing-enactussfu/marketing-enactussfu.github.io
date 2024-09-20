import React from "react";
import PageTemplate from '../components/PageTemplate';
import oranges from '../images/currentprojects/oranges.png'; 
import logo from '../images/currentprojects/logo.png'; 
import paperbags from '../images/currentprojects/paperbags.png'; 

const SecondSavour = () => {
    const secondsavour = (
        <div>
            {/* Header Section */}
            <div className="h-[485px] px-20 py-[120px] bg-white flex flex-col justify-start items-center gap-16">
                <div className="h-[245px] flex flex-col justify-start items-center gap-10">
                    <div className="text-center text-[#d00200] text-base font-semibold font-['Inter']">
                        Current Projects
                    </div>
                    <div className="text-center text-[#181818] text-[40px] font-semibold font-['Inter']">
                        Second Savour
                    </div>
                    <div className="w-[742px] text-center text-[#5c5c5c] text-xl font-normal font-['Inter'] leading-[27px]">
                        A social enterprise that aims to combat food waste originating from excess/surplus produce.
                    </div>
                    <div className="flex justify-center items-center gap-6">
                        <div className="px-5 py-4 bg-[#d00200] rounded-full flex justify-center items-center gap-2.5 cursor-pointer">
                            <div className="text-white text-sm font-semibold font-['Inter']">Visit Website</div>
                        </div>
                        <div className="px-5 py-4 bg-[#181818] rounded-full flex justify-center items-center gap-2.5 cursor-pointer">
                            <div className="text-white text-sm font-semibold font-['Inter']">Our Instagram</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="px-20 pb-[120px] bg-white flex flex-col justify-start items-center gap-24">
                {/* Image Section 1: Oranges */}
                <img className="w-[742px] h-[495px] rounded-xl" src={oranges} alt="Oranges" />

                {/* Who We Are Section */}
                <div className="w-[742px] flex flex-col justify-start items-start gap-10">
                    <div className="text-[#181818] text-[32px] font-semibold font-['Inter']">
                        Who We Are?
                    </div>
                    <div className="text-[#5c5c5c] text-xl font-normal font-['Inter'] leading-[27px]">
                        We are Second Savour, where purpose meets palate. As a student-led social enterprise, our mission is to rescue rejected produce surplus and transform it into nutritious, long-lasting food items. We're not just about sustenance; we're on a mission to raise awareness about sustainable food consumption, sparking a collective reevaluation of our consumption habits.
                        <br /><br />
                        Our commitment is reflected in our three core pillars: First, we're environmentally conscious, crafting our products with meticulous care using sustainable resources. Second, we empower individuals by inspiring a rethinking of food waste, inviting them to be part of the solution. Finally, we repurpose damaged produce into upcycled food products, minimizing waste while shedding light on issues of hunger and inequality.
                    </div>
                </div>

                {/* Image Section 2: Logo (Moved Here) */}
                <img className="w-[742px] h-[495px] rounded-xl" src={logo} alt="Second Savour Logo" />

                {/* What We Do Section */}
                <div className="w-[742px] flex flex-col justify-start items-start gap-10">
                    <div className="text-[#181818] text-[32px] font-semibold font-['Inter']">
                        What We Do?
                    </div>
                    <div className="text-[#5c5c5c] text-xl font-normal font-['Inter'] leading-[27px]">
                        Our target audience includes individuals and households committed to reducing food waste and environmentally conscious consumers seeking sustainable alternatives. Our comprehensive approach involves gathering, skillfully processing, and conscientiously packaging candies in 100% compostable materials, minimizing carbon emissions. Beyond our delicious products, we're dedicated to educating over 3000 individuals this year on the vital importance of reducing food waste and embracing sustainable choices, while our overarching goals focus on saving greenhouse gas emissions, reducing plastic use, and creating a positive impact on both the environment and society. Join us in savoring change and making a meaningful difference.
                    </div>
                </div>

                {/* Image Section 3: Paper Bags */}
                <img className="w-[742px] h-[495px] rounded-xl" src={paperbags} alt="Paper Bags" />

                
                {/* Our Products Section */}
                <div className="w-[742px] flex flex-col justify-start items-start gap-10">
                    <div className="text-[#181818] text-[32px] font-semibold font-['Inter']">
                        Our Products
                    </div>
                    <div className="text-[#5c5c5c] text-xl font-normal font-['Inter'] leading-[27px]">
                        CitrusCandies, a product line within Second Savour, repurposes damaged citrus fruits from various sources into vitamin C-rich candy treats, providing a delicious and sustainable solution. Beyond crafting tasty treats, CitrusCandies is driven by the mission to promote a more sustainable food system by addressing the environmental, economic, and social costs of food waste. The project breakdown involves the Second Savour team developing and producing these upcycled products, selling them through various channels such as websites and pop-up booths, and actively engaging in educating communities and individuals about food waste and sustainable strategies through social media, newsletters, and additional pop-up booths. The overarching goal is to facilitate a positive environmental impact and inspire the emergence of the next generation of environmental business leaders.
                    </div>
                </div>
            </div>
        </div>
    );

    return <PageTemplate component={secondsavour} />;
};

export default SecondSavour;
